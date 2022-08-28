'reach 0.1';

const [isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);

const [
  isGuess, GUESSZERO, GUESSONE, GUESSTWO,
  GUESSTHREE, GUESSFOUR, GUESSFIVE, GUESSSIX,
  GUESSSEVEN, GUESSEIGHT, GUESSNINE, GUESSTEN
] = makeEnum(11);

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

// game logic
const winner = (fingersA, fingersB, guessA, guessB) => {
  if (guessA == guessB) {
    return DRAW;                                        //tie
  } else if (((fingersA + fingersB) == guessA)) {
    return A_WINS;                                      // player A wins
  } else if (((fingersA + fingersB) == guessB)) {
    return B_WINS;                                      // player B wins
  } else {
    return DRAW;                                        // tie
  }
};

assert(winner(ZERO, TWO, GUESSZERO, GUESSTWO) == B_WINS);
assert(winner(TWO, ZERO, GUESSTWO, GUESSZERO) == A_WINS);
assert(winner(ZERO, ONE, GUESSZERO, GUESSTWO) == DRAW);
assert(winner(ONE, ONE, GUESSONE, GUESSONE) == DRAW);

// asseting for all combinations
forall(UInt, fingersA =>
  forall(UInt, fingersB =>
    forall(UInt, guessA =>
      forall(UInt, guessB =>
        assert(isOutcome(winner(fingersA, fingersB, guessA, guessB)))))));

//  asserting for a draw - each guesses the same
forall(UInt, (fingerA) =>
  forall(UInt, (fingerB) =>
    forall(UInt, (guess) =>
      assert(winner(fingerA, fingerB, guess, guess) == DRAW))));

// adding the timeout functionality
const Player =
{
  ...hasRandom,
  getFingers: Fun([], UInt),
  getGuess: Fun([UInt], UInt),
  seeWinning: Fun([UInt], Null),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)
};

// Let's add a wager function for Alice       
const Alice =
{
  ...Player,
  wager: UInt,
  ...hasConsoleLogger
};

// Let's add a acceptWager function for Bob
const Bob =
{
  ...Player,
  acceptWager: Fun([UInt], Null),
  ...hasConsoleLogger
};
const DEADLINE = 30;

export const main = Reach.App(() => {

  const A = Participant('Alice', Alice);
  const B = Participant('Bob', Bob);
  init();

  const informTimeout = () => {
    each([A, B], () => { interact.informTimeout(); });
  };

  A.only(() => { const wager = declassify(interact.wager); });
  A.publish(wager).pay(wager);
  commit();

  B.only(() => { interact.acceptWager(wager); });
  B.pay(wager).timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));

  var outcome = DRAW;
  invariant(balance() == 2 * wager && isOutcome(outcome));

  // At this point we have to loop until we have a winner
  while (outcome == DRAW) {
    commit();
    A.only(() => {
      const _fingersA = interact.getFingers();
      const _guessA = interact.getGuess(_fingersA);
      // log fingersA to frontend       
      interact.log(_fingersA);

      // Should Alice be able to publish her fingers and guess would be great, so let's do it here, 
      // meanwhile we must also keep it secret.  The makeCommitment method does this.    

      const [_commitA, _saltA] = makeCommitment(interact, _fingersA);
      const commitA = declassify(_commitA);
      const [_guessCommitA, _guessSaltA] = makeCommitment(interact, _guessA);
      const guessCommitA = declassify(_guessCommitA);
    });

    A.publish(commitA)
      .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
    commit();

    A.publish(guessCommitA)
      .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
    ;
    commit();
    // Bob does not know the values for Alice, but Alice does know the values 
    unknowable(B, A(_fingersA, _saltA));
    unknowable(B, A(_guessA, _guessSaltA));

    B.only(() => {

      const _fingersB = interact.getFingers();
      const _guessB = interact.getGuess(_fingersB);
    
      const fingersB = declassify(_fingersB);
      const guessB = declassify(_guessB);

    });

    B.publish(fingersB)
      .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
    commit();
    B.publish(guessB)
      .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
    ;

    commit();
    // Alice will declassify the secret information here
    A.only(() => {
      const [saltA, fingersA] = declassify([_saltA, _fingersA]);
      const [guessSaltA, guessA] = declassify([_guessSaltA, _guessA]);

    });
    A.publish(saltA, fingersA)
      .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
    
      // It's time to check that the published values match the original values.
    checkCommitment(commitA, saltA, fingersA);
    commit();

    A.publish(guessSaltA, guessA)
      .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
    checkCommitment(guessCommitA, guessSaltA, guessA);

    commit();

    A.only(() => {
      const WinningNumber = fingersA + fingersB;
      interact.seeWinning(WinningNumber);
    });

    A.publish(WinningNumber)
      .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));

    outcome = winner(fingersA, fingersB, guessA, guessB);
    continue;

  }

  assert(outcome == A_WINS || outcome == B_WINS);
  
  // Over here we are sending winnings to winner 
  transfer(2 * wager).to(outcome == A_WINS ? A : B);
  commit();

  each([A, B], () => {
    interact.seeOutcome(outcome);
  })
  exit();
});