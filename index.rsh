/* eslint-disable no-array-constructor */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const [isOutcome, B_WINS, A_WINS, DRAW] = makeEnum(3);

const winner = (guessA, fingersA, guessB, fingersB) => {
  const total = fingersA + fingersB;
  return total == guessA && total != guessB ? 1 : total == guessB && total != guessA ? 0 : 2;
};

const common = {
  ...hasRandom,
  pickAndGuess: Fun([], Array(UInt, 2)),
  declareWinner: Fun([UInt, UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // We would do well to define Alice's interact interface 
    ...common,
    deadline: UInt,
    wager: UInt,
  });
  const B = Participant('Bob', {
    // Meanwhile we are going to states how Bob's interact interface looks
    ...common,
    acceptWager: Fun([UInt], Null),
  });
  init();
  // Let one of the players publish and deploys the contract

  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout();
    });
  };

  A.only(() => {
    const deadline = declassify(interact.deadline);
    const wager = declassify(interact.wager);
  });
  A.publish(deadline, wager).pay(wager);
  commit();

  B.interact.acceptWager(wager);
  B.pay(wager).timeout(relativeTime(deadline), () => closeTo(A, informTimeout));

  var [outcome, total] = [DRAW, 0];
  invariant(balance() == 2 * wager && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();
    A.only(() => {
      const [_fingersAlice, _guessAlice] = interact.pickAndGuess();
      const [_fingersACommit, _fingersASalt] = makeCommitment(interact, _fingersAlice);
      const fingersACommit = declassify(_fingersACommit);
      const [_guessACommit, _guessASalt] = makeCommitment(interact, _guessAlice);
      const guessACommit = declassify(_guessACommit);
    });
    A.publish(fingersACommit, guessACommit).timeout(relativeTime(deadline), () => closeTo(B, informTimeout));
    commit();

    unknowable(B, A(_fingersAlice, _fingersASalt));
    unknowable(B, A(_guessAlice, _guessASalt));
    B.only(() => {
      const [fingersBob, guessBob] = declassify(interact.pickAndGuess());
    });
    B.publish(fingersBob, guessBob).timeout(relativeTime(deadline), () => closeTo(A, informTimeout));
    commit();

    A.only(() => {
      const fingersAlice = declassify(_fingersAlice);
      const fingersASalt = declassify(_fingersASalt);
      const guessAlice = declassify(_guessAlice);
      const guessASalt = declassify(_guessASalt);
    });
    A.publish(fingersAlice, guessAlice, fingersASalt, guessASalt).timeout(relativeTime(deadline), () => closeTo(B, informTimeout));
    checkCommitment(fingersACommit, fingersASalt, fingersAlice);
    checkCommitment(guessACommit, guessASalt, guessAlice);

    [outcome, total] = [winner(guessAlice, fingersAlice, guessBob, fingersBob), fingersAlice + fingersBob];
    continue;
  }

  assert(outcome == A_WINS || outcome == B_WINS);
  outcome == A_WINS ? transfer(balance()).to(A) : transfer(balance()).to(B);
  commit();

  each([A, B], () => {
    interact.declareWinner(outcome, total);
  });

  exit();
});
