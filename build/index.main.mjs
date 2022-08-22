// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v501 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v501],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:88:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v501, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
      
      sim_r.txns.push({
        amt: v505,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v516 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
  ;
  const v516 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v516],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v504, v505, v516],
      evt_cnt: 0,
      funcNum: 2,
      lct: v506,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v504,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:84:48:application',
      fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:92:61:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
    const v524 = stdlib.add(v505, v505);
    ;
    let v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v526 = v521;
    let v533 = v524;
    
    while (await (async () => {
      const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v541;})()) {
      const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
      const v552 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:101:44:application',
        fs: ['at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v553 = stdlib.protect(ctc0, await interact.getGuess(v552), {
        at: './index.rsh:102:40:application',
        fs: ['at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.log(v552), {
        at: './index.rsh:104:19:application',
        fs: ['at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)'],
        msg: 'log',
        who: 'Alice'
        });
      const v554 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:109:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v555 = stdlib.digest(ctc2, [v554, v552]);
      const v557 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:111:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v558 = stdlib.digest(ctc2, [v557, v553]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v504, v505, v520, v533, v548, v555],
        evt_cnt: 1,
        funcNum: 4,
        lct: v526,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:115:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn3;
          
          ;
          const v571 = stdlib.add(v562, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v548],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v548],
          evt_cnt: 0,
          funcNum: 5,
          lct: v526,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v520,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
        ;
        const v775 = stdlib.addressEq(v504, v772);
        const v776 = stdlib.addressEq(v520, v772);
        const v777 = v775 ? true : v776;
        stdlib.assert(v777, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:116:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:84:48:application',
          fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:116:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn3;
        ;
        const v564 = stdlib.addressEq(v504, v560);
        stdlib.assert(v564, {
          at: './index.rsh:115:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v571 = stdlib.add(v562, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
        const txn4 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v561, v571, v558],
          evt_cnt: 1,
          funcNum: 6,
          lct: v562,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:119:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn4;
            
            ;
            const v584 = stdlib.add(v575, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v571],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc3],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v571],
            evt_cnt: 0,
            funcNum: 7,
            lct: v562,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v520,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
          ;
          const v757 = stdlib.addressEq(v504, v754);
          const v758 = stdlib.addressEq(v520, v754);
          const v759 = v757 ? true : v758;
          stdlib.assert(v759, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:84:48:application',
            fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn4;
          ;
          const v577 = stdlib.addressEq(v504, v573);
          stdlib.assert(v577, {
            at: './index.rsh:119:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v584 = stdlib.add(v575, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v584],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v584],
              evt_cnt: 0,
              funcNum: 9,
              lct: v575,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
            ;
            const v739 = stdlib.addressEq(v504, v736);
            const v740 = stdlib.addressEq(v520, v736);
            const v741 = v739 ? true : v740;
            stdlib.assert(v741, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:84:48:application',
              fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn5;
            ;
            const v594 = stdlib.addressEq(v520, v590);
            stdlib.assert(v594, {
              at: './index.rsh:138:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v601 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v601],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v601],
                evt_cnt: 0,
                funcNum: 11,
                lct: v592,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v504,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
              ;
              const v721 = stdlib.addressEq(v504, v718);
              const v722 = stdlib.addressEq(v520, v718);
              const v723 = v721 ? true : v722;
              stdlib.assert(v723, {
                at: 'reach standard library:200:11:dot',
                fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:84:48:application',
                fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn6;
              ;
              const v607 = stdlib.addressEq(v520, v603);
              stdlib.assert(v607, {
                at: './index.rsh:141:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v614 = stdlib.add(v605, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
              const txn7 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v604, v614, v554, v552],
                evt_cnt: 2,
                funcNum: 12,
                lct: v605,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:152:7:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn7;
                  
                  ;
                  const v632 = stdlib.add(v621, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v614],
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v561, v574, v591, v604, v614],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v605,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v520,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                ;
                const v703 = stdlib.addressEq(v504, v700);
                const v704 = stdlib.addressEq(v520, v700);
                const v705 = v703 ? true : v704;
                stdlib.assert(v705, {
                  at: 'reach standard library:200:11:dot',
                  fs: ['at ./index.rsh:153:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:84:48:application',
                  fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:153:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn7;
                ;
                const v623 = stdlib.addressEq(v504, v618);
                stdlib.assert(v623, {
                  at: './index.rsh:152:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v624 = stdlib.digest(ctc2, [v619, v620]);
                const v625 = stdlib.digestEq(v561, v624);
                stdlib.assert(v625, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:155:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v632 = stdlib.add(v621, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                const txn8 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v574, v591, v604, v620, v632, v557, v553],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v621,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:158:7:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn8;
                    
                    ;
                    const v648 = stdlib.add(v637, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v632],
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v574, v591, v604, v620, v632],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v621,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v520,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                  ;
                  const v685 = stdlib.addressEq(v504, v682);
                  const v686 = stdlib.addressEq(v520, v682);
                  const v687 = v685 ? true : v686;
                  stdlib.assert(v687, {
                    at: 'reach standard library:200:11:dot',
                    fs: ['at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:84:48:application',
                    fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn8;
                  ;
                  const v639 = stdlib.addressEq(v504, v634);
                  stdlib.assert(v639, {
                    at: './index.rsh:158:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v640 = stdlib.digest(ctc2, [v635, v636]);
                  const v641 = stdlib.digestEq(v574, v640);
                  stdlib.assert(v641, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:160:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v648 = stdlib.add(v637, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                  const v652 = stdlib.add(v620, v591);
                  stdlib.protect(ctc1, await interact.seeWinning(v652), {
                    at: './index.rsh:166:26:application',
                    fs: ['at ./index.rsh:164:11:application call to [unknown function] (defined at: ./index.rsh:164:15:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn9 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v591, v604, v620, v636, v648, v652],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v637,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:169:7:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn9;
                      
                      ;
                      let v658;
                      const v659 = stdlib.eq(v636, v604);
                      if (v659) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v660 = stdlib.add(v620, v591);
                        const v661 = stdlib.eq(v660, v636);
                        if (v661) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          const v663 = stdlib.eq(v660, v604);
                          if (v663) {
                            v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                            }
                          else {
                            v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv525 = v658;
                      const cv526 = v655;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v525 = cv525;
                        const v526 = cv526;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                          
                          return v541;})()) {
                          const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                          sim_r.isHalt = false;
                          }
                        else {
                          const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                          const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:179:12:decimal', stdlib.UInt_max, '2'), v505);
                          const v795 = v790 ? v504 : v520;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v795,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v648],
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v504, v505, v520, v533, v591, v604, v620, v636, v648],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v637,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v504,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                    ;
                    const v667 = stdlib.addressEq(v504, v664);
                    const v668 = stdlib.addressEq(v520, v664);
                    const v669 = v667 ? true : v668;
                    stdlib.assert(v669, {
                      at: 'reach standard library:200:11:dot',
                      fs: ['at ./index.rsh:170:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:84:48:application',
                      fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:170:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn9;
                    ;
                    const v657 = stdlib.addressEq(v504, v653);
                    stdlib.assert(v657, {
                      at: './index.rsh:169:7:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    let v658;
                    const v659 = stdlib.eq(v636, v604);
                    if (v659) {
                      v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v660 = stdlib.add(v620, v591);
                      const v661 = stdlib.eq(v660, v636);
                      if (v661) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v663 = stdlib.eq(v660, v604);
                        if (v663) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv525 = v658;
                    const cv526 = v655;
                    const cv533 = v533;
                    
                    v525 = cv525;
                    v526 = cv526;
                    v533 = cv533;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:179:12:decimal', stdlib.UInt_max, '2'), v505);
    const v795 = v790 ? v504 : v520;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v525), {
      at: './index.rsh:183:24:application',
      fs: ['at ./index.rsh:182:7:application call to [unknown function] (defined at: ./index.rsh:182:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
  ;
  const v516 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
  stdlib.protect(ctc1, await interact.acceptWager(v505), {
    at: './index.rsh:91:38:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v504, v505, v516],
    evt_cnt: 0,
    funcNum: 1,
    lct: v506,
    onlyIf: true,
    out_tys: [],
    pay: [v505, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
      
      const v524 = stdlib.add(v505, v505);
      sim_r.txns.push({
        amt: v505,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v526 = v521;
      const v533 = v524;
      
      if (await (async () => {
        const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v541;})()) {
        const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        }
      else {
        const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:179:12:decimal', stdlib.UInt_max, '2'), v505);
        const v795 = v790 ? v504 : v520;
        sim_r.txns.push({
          kind: 'from',
          to: v795,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v516],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v504, v505, v516],
      evt_cnt: 0,
      funcNum: 2,
      lct: v506,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v504,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:84:48:application',
      fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:92:61:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
    const v524 = stdlib.add(v505, v505);
    ;
    let v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v526 = v521;
    let v533 = v524;
    
    while (await (async () => {
      const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v541;})()) {
      const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v548],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v548],
          evt_cnt: 0,
          funcNum: 5,
          lct: v526,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v520,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
        ;
        const v775 = stdlib.addressEq(v504, v772);
        const v776 = stdlib.addressEq(v520, v772);
        const v777 = v775 ? true : v776;
        stdlib.assert(v777, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:116:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:84:48:application',
          fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:116:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn3;
        ;
        const v564 = stdlib.addressEq(v504, v560);
        stdlib.assert(v564, {
          at: './index.rsh:115:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v571 = stdlib.add(v562, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v571],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v571],
            evt_cnt: 0,
            funcNum: 7,
            lct: v562,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v520,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
          ;
          const v757 = stdlib.addressEq(v504, v754);
          const v758 = stdlib.addressEq(v520, v754);
          const v759 = v757 ? true : v758;
          stdlib.assert(v759, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:84:48:application',
            fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn4;
          ;
          const v577 = stdlib.addressEq(v504, v573);
          stdlib.assert(v577, {
            at: './index.rsh:119:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v584 = stdlib.add(v575, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
          const v588 = stdlib.protect(ctc0, await interact.getFingers(), {
            at: './index.rsh:129:44:application',
            fs: ['at ./index.rsh:127:11:application call to [unknown function] (defined at: ./index.rsh:127:15:function exp)'],
            msg: 'getFingers',
            who: 'Bob'
            });
          const v589 = stdlib.protect(ctc0, await interact.getGuess(v588), {
            at: './index.rsh:131:40:application',
            fs: ['at ./index.rsh:127:11:application call to [unknown function] (defined at: ./index.rsh:127:15:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v574, v584, v588],
            evt_cnt: 1,
            funcNum: 8,
            lct: v575,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:138:7:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn5;
              
              ;
              const v601 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v584],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v584],
              evt_cnt: 0,
              funcNum: 9,
              lct: v575,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
            ;
            const v739 = stdlib.addressEq(v504, v736);
            const v740 = stdlib.addressEq(v520, v736);
            const v741 = v739 ? true : v740;
            stdlib.assert(v741, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:84:48:application',
              fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn5;
            ;
            const v594 = stdlib.addressEq(v520, v590);
            stdlib.assert(v594, {
              at: './index.rsh:138:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v601 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
            const txn6 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v591, v601, v589],
              evt_cnt: 1,
              funcNum: 10,
              lct: v592,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:141:7:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn6;
                
                ;
                const v614 = stdlib.add(v605, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v601],
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v601],
                evt_cnt: 0,
                funcNum: 11,
                lct: v592,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v504,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
              ;
              const v721 = stdlib.addressEq(v504, v718);
              const v722 = stdlib.addressEq(v520, v718);
              const v723 = v721 ? true : v722;
              stdlib.assert(v723, {
                at: 'reach standard library:200:11:dot',
                fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:84:48:application',
                fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn6;
              ;
              const v607 = stdlib.addressEq(v520, v603);
              stdlib.assert(v607, {
                at: './index.rsh:141:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v614 = stdlib.add(v605, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v614],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v561, v574, v591, v604, v614],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v605,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v520,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                ;
                const v703 = stdlib.addressEq(v504, v700);
                const v704 = stdlib.addressEq(v520, v700);
                const v705 = v703 ? true : v704;
                stdlib.assert(v705, {
                  at: 'reach standard library:200:11:dot',
                  fs: ['at ./index.rsh:153:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:84:48:application',
                  fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:153:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn7;
                ;
                const v623 = stdlib.addressEq(v504, v618);
                stdlib.assert(v623, {
                  at: './index.rsh:152:7:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v624 = stdlib.digest(ctc3, [v619, v620]);
                const v625 = stdlib.digestEq(v561, v624);
                stdlib.assert(v625, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:155:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v632 = stdlib.add(v621, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                const txn8 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v632],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v574, v591, v604, v620, v632],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v621,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v520,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                  ;
                  const v685 = stdlib.addressEq(v504, v682);
                  const v686 = stdlib.addressEq(v520, v682);
                  const v687 = v685 ? true : v686;
                  stdlib.assert(v687, {
                    at: 'reach standard library:200:11:dot',
                    fs: ['at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:84:48:application',
                    fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn8;
                  ;
                  const v639 = stdlib.addressEq(v504, v634);
                  stdlib.assert(v639, {
                    at: './index.rsh:158:7:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v640 = stdlib.digest(ctc3, [v635, v636]);
                  const v641 = stdlib.digestEq(v574, v640);
                  stdlib.assert(v641, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:160:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v648 = stdlib.add(v637, stdlib.checkedBigNumberify('./index.rsh:70:18:decimal', stdlib.UInt_max, '30'));
                  const txn9 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v648],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v504, v505, v520, v533, v591, v604, v620, v636, v648],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v637,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v504,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                    ;
                    const v667 = stdlib.addressEq(v504, v664);
                    const v668 = stdlib.addressEq(v520, v664);
                    const v669 = v667 ? true : v668;
                    stdlib.assert(v669, {
                      at: 'reach standard library:200:11:dot',
                      fs: ['at ./index.rsh:170:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:84:48:application',
                      fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:83:28:function exp)', 'at ./index.rsh:170:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn9;
                    ;
                    const v657 = stdlib.addressEq(v504, v653);
                    stdlib.assert(v657, {
                      at: './index.rsh:169:7:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    let v658;
                    const v659 = stdlib.eq(v636, v604);
                    if (v659) {
                      v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v660 = stdlib.add(v620, v591);
                      const v661 = stdlib.eq(v660, v636);
                      if (v661) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v663 = stdlib.eq(v660, v604);
                        if (v663) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv525 = v658;
                    const cv526 = v655;
                    const cv533 = v533;
                    
                    v525 = cv525;
                    v526 = cv526;
                    v533 = cv533;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:179:12:decimal', stdlib.UInt_max, '2'), v505);
    const v795 = v790 ? v504 : v520;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v525), {
      at: './index.rsh:183:24:application',
      fs: ['at ./index.rsh:182:7:application call to [unknown function] (defined at: ./index.rsh:182:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAVAAFIIB4RcAIFCAkNDwuQAQdQmAGIAaABKCYDAQABAQAiNQAxGEEIjipkSSJbNQEhCVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQoMQAR9SSELDEACYkkhDAxAAUxJgRAMQADySSEFDEAAUyEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABACB0o6wMgY0AyEGWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgegSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/gVhbNf6BaFs1/Uk1BRc1/IAEfoUQcTT8FlCwMgY0AyEGWwxENP8xABJENP00/hJBAAYjNftCACw0A4FgWzQDIRBbCEk1+jT9EkEAByEHNftCABE0+jT+EkEABiI1+0IAAyM1+zT/NAMlWzQDVyggNPsyBjQDJFtCBqxIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gARGR4xesDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IGtUmBDgxAALVIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf5XKCA1/SRbNfwhBls1+4F4WzX6gYABWzX5STUFSSJbNfghCVs194AEva7n1TT4FlA09xZQsDIGNAMhElsMRDT/MQASRDQDV1AgNPgWNPcWUAESRDIGIQQINfY0/zT+FlA0/VA0/BZQNPsWUDT6FlA0+RZQNPcWUDT2FlAoSwFXAHhnSCEFNQEyBjUCQgYVSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNXKCA1/4AEIp+XA7AyBjQDIRNbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBaZJIQ0MQAEUSYEMDEAAukghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/lcoIDX9JFs1/FdwIDX7IQ5bNfohEVs1+Uk1BUkiWzX4IQlbNfeABMOqkME0+BZQNPcWULAyBjQDIRNbDEQ0/zEAEkQ0A1dQIDT4FjT3FlABEkQyBiEECDX2NP80/hZQNP1QNPwWUDT7UDT6FlA0+RZQNPcWUDT2FlAoSwFXAH9nKUsBV38RZ0ghDDUBMgY1AkIE+kghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOPZNjWwMgY0AyERWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgSLSYEKDEAAn0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/lcoIDX9JFs1/FdQIDX7V3AgNfohDls1+Uk1BRc1+IAEp4vCCzT4FlCwMgY0AyERWwxENP0xABJEMgYhBAg19zT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQNPgWUDT3FlAoSwFXAH9nKUsBV38pZ0ghCzUBMgY1AkIEAUghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyEOWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOSSSEIDEAB0UkhDwxAAOxJIQkMQACVSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yVbNf5XKCA1/SRbNfxXUCA1+1dwIDX6STUFFzX5gAQv2ukdNPkWULAyBjQDIQ5bDEQ0/TEAEkQyBiEECDX4NP80/hZQNP1QNPwWUDT7UDT6UDT5FlA0+BZQKEsBVwB/ZylLAVd/IWdIIQ01ATIGNQJCAwRIIQ80ARJENARJIhJMNAISEUQoZEk1A1coIDX/gATiG7OpsDIGNAMhBlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ICmEmBBgxAAIdIIQ80ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/lcoIDX9JFs1/FdQIDX7STUFNfqABGnuOz40+lCwMgY0AyEGWwxENP8xABJEMgYhBAg1+TT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQKEsBVwB/ZylLAVd/GWdIIQo1ATIGNQJCAiZIIQg0ARJENARJIhJMNAISEUQoZEk1A1coIDX/gATMmZJcsDIGNAMhEFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IBukkhBwxAAL5JgQQMQAB3SCEINAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/lcoIDX9JFs1/Ek1BTX7gAQ4sCMtNPtQsDIGNAMhEFsMRDT/MQASRDIGIQQINfo0/zT+FlA0/VA0/BZQNPtQNPoWUChLAVcAeGdIIQ81ATIGNQJCAVEhBxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEUWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgD1SSMMQABCSCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwMgY0AyEUWwxENP+IAS40A1cAIDT/MQAjMgY0/0kIQgBRSIGgjQaIARMiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gA7TIGIQQINf4xADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgB4Nf81/jX9Nfw1+zX6NP0jEkEAKzT+IQQINfk0+jT7FlA0/FA0/xZQNPkWUChLAVcAWGdIIQg1ATIGNQJCADqxIrIBIQc0+wuyCCOyEDT8NPo0/SEHEk2yB7NCAAAxGSEIEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v619",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v620",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v654",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v619",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v620",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v654",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002c4e38038062002c4e8339810160408190526200002691620001f2565b60008080554360035560408051602080820183529281528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a160208201515162000095903414600762000122565b620000a2601e4362000294565b815260408051606080820183526000602080840182815284860183815233808752898401515183528851825260019485905543909455865192830193909352519481019490945251908301529060800160405160208183030381529060405260029080519060200190620001189291906200014c565b50505050620002f8565b81620001485760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015a90620002bb565b90600052602060002090601f0160209004810192826200017e5760008555620001c9565b82601f106200019957805160ff1916838001178555620001c9565b82800160010185558215620001c9579182015b82811115620001c9578251825591602001919060010190620001ac565b50620001d7929150620001db565b5090565b5b80821115620001d75760008155600101620001dc565b60008183036040808212156200020757600080fd5b80518082016001600160401b0380821183831017156200023757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200025157600080fd5b8351945060208501915084821081831117156200027e57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620002b657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002d057607f821691505b60208210811415620002f257634e487b7160e01b600052602260045260246000fd5b50919050565b61294680620003086000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a3e43b0116100de5780633a3e43b0146101725780635471c5a81461018557806379b8ead7146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806329bdceb9146101395780632c10a1591461014c5780633a31ddbd1461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b61011361014736600461230f565b6102a1565b61011361015a36600461230f565b61053b565b61011361016d36600461230f565b6106c6565b610113610180366004612344565b61087d565b61011361019336600461230f565b610aef565b6101136101a6366004612344565b610c4a565b6101136101b936600461230f565b610ebc565b3480156101ca57600080fd5b50600154610126565b6101136101e136600461230f565b61101f565b6101136101f436600461230f565b6111b6565b61011361020736600461230f565b611310565b61011361021a36600461230f565b61154c565b61011361022d36600461230f565b6116a7565b34801561023e57600080fd5b506102476118c7565b604051610130929190612360565b61011361026336600461230f565b611964565b61011361027636600461230f565b611b86565b61011361028936600461230f565b611ce0565b61011361029c36600461230f565b611e3a565b6102b1600960005414602661205e565b6102cb813515806102c457506001548235145b602761205e565b6000808055600280546102dd906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610309906123bd565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e9190612446565b90506103866040518060200160405280600081525090565b6103978260c001514310602861205e565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516103c89291906124e4565b60405180910390a16103dc3415602461205e565b60408201516103f7906001600160a01b03163314602561205e565b610402601e43612521565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e0840152600b6000554360015590516105109183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906105349291906121cf565b5050505050565b61054b600160005414600961205e565b6105658135158061055e57506001548235145b600a61205e565b600080805560028054610577906123bd565b80601f01602080910402602001604051908101604052809291908181526020018280546105a3906123bd565b80156105f05780601f106105c5576101008083540402835291602001916105f0565b820191906000526020600020905b8154815290600101906020018083116105d357829003601f168201915b50505050508060200190518101906106089190612539565b905061061b81604001514310600b61205e565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161064c9291906125a8565b60405180910390a161066581602001513414600861205e565b61066d612253565b815181516001600160a01b0390911690526020808301805183518301528251336040909101528183018051600190525143920191909152516106af9080612521565b6020820151604001526106c181612083565b505050565b6106d6600f60005414604b61205e565b6106f0813515806106e957506001548235145b604c61205e565b600080805560028054610702906123bd565b80601f016020809104026020016040519081016040528092919081815260200182805461072e906123bd565b801561077b5780601f106107505761010080835404028352916020019161077b565b820191906000526020600020905b81548152906001019060200180831161075e57829003601f168201915b5050505050806020019051810190610793919061266c565b90506107a8816101000151431015604d61205e565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b33836040516107d99291906125a8565b60405180910390a16107ed3415604961205e565b8051610821906001600160a01b031633146108175760408201516001600160a01b0316331461081a565b60015b604a61205e565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610862573d6000803e3d6000fd5b5060008080556001819055610879906002906122a5565b5050565b61088d600f60005414604661205e565b6108a7813515806108a057506001548235145b604761205e565b6000808055600280546108b9906123bd565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906123bd565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b505050505080602001905181019061094a919061266c565b90506109626040518060200160405280600081525090565b6109748261010001514310604861205e565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d99733846040516109a5929190612689565b60405180910390a16109b93415604361205e565b81516109d1906001600160a01b03163314604461205e565b60408051610a1d916109f791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114604561205e565b610a28601e43612521565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e08087015191850191909152868301359084015283516101008401526011600055436001559051610510918391016126ba565b610aff600d60005414604061205e565b610b1981351580610b1257506001548235145b604161205e565b600080805560028054610b2b906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610b57906123bd565b8015610ba45780601f10610b7957610100808354040283529160200191610ba4565b820191906000526020600020905b815481529060010190602001808311610b8757829003601f168201915b5050505050806020019051810190610bbc919061266c565b9050610bd1816101000151431015604261205e565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610c029291906125a8565b60405180910390a1610c163415603e61205e565b8051610821906001600160a01b03163314610c405760408201516001600160a01b03163314610c43565b60015b603f61205e565b610c5a600d60005414603b61205e565b610c7481351580610c6d57506001548235145b603c61205e565b600080805560028054610c86906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb2906123bd565b8015610cff5780601f10610cd457610100808354040283529160200191610cff565b820191906000526020600020905b815481529060010190602001808311610ce257829003601f168201915b5050505050806020019051810190610d17919061266c565b9050610d2f6040518060200160405280600081525090565b610d418261010001514310603d61205e565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610d72929190612689565b60405180910390a1610d863415603861205e565b8151610d9e906001600160a01b03163314603961205e565b60408051610dea91610dc491602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114603a61205e565b610df5601e43612521565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152600f600055436001559051610510918391016126ba565b610ecc600160005414600d61205e565b610ee681351580610edf57506001548235145b600e61205e565b600080805560028054610ef8906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610f24906123bd565b8015610f715780601f10610f4657610100808354040283529160200191610f71565b820191906000526020600020905b815481529060010190602001808311610f5457829003601f168201915b5050505050806020019051810190610f899190612539565b9050610f9d8160400151431015600f61205e565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610fce9291906125a8565b60405180910390a1610fe23415600c61205e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610862573d6000803e3d6000fd5b61102f600b60005414603561205e565b6110498135158061104257506001548235145b603661205e565b60008080556002805461105b906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054611087906123bd565b80156110d45780601f106110a9576101008083540402835291602001916110d4565b820191906000526020600020905b8154815290600101906020018083116110b757829003601f168201915b50505050508060200190518101906110ec9190612727565b90506111008160e00151431015603761205e565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a55033836040516111319291906125a8565b60405180910390a16111453415603361205e565b8051611179906001600160a01b0316331461116f5760408201516001600160a01b03163314611172565b60015b603461205e565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610862573d6000803e3d6000fd5b6111c6600560005414601761205e565b6111e0813515806111d957506001548235145b601861205e565b6000808055600280546111f2906123bd565b80601f016020809104026020016040519081016040528092919081815260200182805461121e906123bd565b801561126b5780601f106112405761010080835404028352916020019161126b565b820191906000526020600020905b81548152906001019060200180831161124e57829003601f168201915b505050505080602001905181019061128391906127d3565b90506112978160800151431015601961205e565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516112c89291906125a8565b60405180910390a16112dc3415601561205e565b8051610821906001600160a01b031633146113065760408201516001600160a01b03163314611309565b60015b601661205e565b611320600760005414601c61205e565b61133a8135158061133357506001548235145b601d61205e565b60008080556002805461134c906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054611378906123bd565b80156113c55780601f1061139a576101008083540402835291602001916113c5565b820191906000526020600020905b8154815290600101906020018083116113a857829003601f168201915b50505050508060200190518101906113dd919061285d565b90506113f56040518060200160405280600081525090565b6114068260a001514310601e61205e565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516114379291906124e4565b60405180910390a161144b3415601a61205e565b8151611463906001600160a01b03163314601b61205e565b61146e601e43612521565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e082015261010001610510565b61155c601160005414605561205e565b6115768135158061156f57506001548235145b605661205e565b600080805560028054611588906123bd565b80601f01602080910402602001604051908101604052809291908181526020018280546115b4906123bd565b80156116015780601f106115d657610100808354040283529160200191611601565b820191906000526020600020905b8154815290600101906020018083116115e457829003601f168201915b5050505050806020019051810190611619919061266c565b905061162e816101000151431015605761205e565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed235338360405161165f9291906125a8565b60405180910390a16116733415605361205e565b8051611179906001600160a01b0316331461169d5760408201516001600160a01b031633146116a0565b60015b605461205e565b6116b7600560005414601261205e565b6116d1813515806116ca57506001548235145b601361205e565b6000808055600280546116e3906123bd565b80601f016020809104026020016040519081016040528092919081815260200182805461170f906123bd565b801561175c5780601f106117315761010080835404028352916020019161175c565b820191906000526020600020905b81548152906001019060200180831161173f57829003601f168201915b505050505080602001905181019061177491906127d3565b905061178c6040518060200160405280600081525090565b61179d82608001514310601461205e565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516117ce9291906124e4565b60405180910390a16117e23415601061205e565b81516117fa906001600160a01b03163314601161205e565b611805601e43612521565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528b5160a0808d019182526007600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e001610510565b6000606060005460028080546118dc906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054611908906123bd565b80156119555780601f1061192a57610100808354040283529160200191611955565b820191906000526020600020905b81548152906001019060200180831161193857829003601f168201915b50505050509050915091509091565b611974600b60005414603061205e565b61198e8135158061198757506001548235145b603161205e565b6000808055600280546119a0906123bd565b80601f01602080910402602001604051908101604052809291908181526020018280546119cc906123bd565b8015611a195780601f106119ee57610100808354040283529160200191611a19565b820191906000526020600020905b8154815290600101906020018083116119fc57829003601f168201915b5050505050806020019051810190611a319190612727565b9050611a496040518060200160405280600081525090565b611a5a8260e001514310603261205e565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611a8b9291906124e4565b60405180910390a1611a9f3415602e61205e565b6040820151611aba906001600160a01b03163314602f61205e565b611ac5601e43612521565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600d600055436001559051610510918391016126ba565b611b96600760005414602161205e565b611bb081351580611ba957506001548235145b602261205e565b600080805560028054611bc2906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054611bee906123bd565b8015611c3b5780601f10611c1057610100808354040283529160200191611c3b565b820191906000526020600020905b815481529060010190602001808311611c1e57829003601f168201915b5050505050806020019051810190611c53919061285d565b9050611c678160a00151431015602361205e565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611c989291906125a8565b60405180910390a1611cac3415601f61205e565b8051610821906001600160a01b03163314611cd65760408201516001600160a01b03163314611cd9565b60015b602061205e565b611cf0600960005414602b61205e565b611d0a81351580611d0357506001548235145b602c61205e565b600080805560028054611d1c906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054611d48906123bd565b8015611d955780601f10611d6a57610100808354040283529160200191611d95565b820191906000526020600020905b815481529060010190602001808311611d7857829003601f168201915b5050505050806020019051810190611dad9190612446565b9050611dc18160c00151431015602d61205e565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611df29291906125a8565b60405180910390a1611e063415602961205e565b8051611179906001600160a01b03163314611e305760408201516001600160a01b03163314611e33565b60015b602a61205e565b611e4a601160005414605061205e565b611e6481351580611e5d57506001548235145b605161205e565b600080805560028054611e76906123bd565b80601f0160208091040260200160405190810160405280929190818152602001828054611ea2906123bd565b8015611eef5780601f10611ec457610100808354040283529160200191611eef565b820191906000526020600020905b815481529060010190602001808311611ed257829003601f168201915b5050505050806020019051810190611f07919061266c565b9050611f26604051806040016040528060008152602001600081525090565b611f388261010001514310605261205e565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee43384604051611f699291906124e4565b60405180910390a1611f7d3415604e61205e565b8151611f95906001600160a01b03163314604f61205e565b8160a001518260e001511415611fae5760018152611ffb565b81608001518260c00151611fc29190612521565b6020820181905260e08301511415611fdd5760028152611ffb565b8160a0015181602001511415611ff65760008152611ffb565b600181525b612003612253565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092528351818401805191909152805143920191909152606085015190519091015261205881612083565b50505050565b816108795760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151516001141561216a57601e8260200151602001516120b59190612521565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b51808901999099529551888c0152935190941691860191909152519184019190915251828401528451808303909301835260c09091019093528051919261205892600292909101906121cf565b60208201515160021461218257815160400151612186565b8151515b6001600160a01b03166108fc83600001516020015160026121a791906128f1565b6040518115909202916000818181858888f19350505050158015610862573d6000803e3d6000fd5b8280546121db906123bd565b90600052602060002090601f0160209004810192826121fd5760008555612243565b82601f1061221657805160ff1916838001178555612243565b82800160010185558215612243579182015b82811115612243578251825591602001919060010190612228565b5061224f9291506122e2565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016122a060405180606001604052806000815260200160008152602001600081525090565b905290565b5080546122b1906123bd565b6000825580601f106122c1575050565b601f0160209004906000526020600020908101906122df91906122e2565b50565b5b8082111561224f57600081556001016122e3565b60006040828403121561230957600080fd5b50919050565b60006040828403121561232157600080fd5b61232b83836122f7565b9392505050565b60006060828403121561230957600080fd5b60006060828403121561235657600080fd5b61232b8383612332565b82815260006020604081840152835180604085015260005b8181101561239457858101830151858201606001528201612378565b818111156123a6576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806123d157607f821691505b6020821081141561230957634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561242457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461244157600080fd5b919050565b600060e0828403121561245857600080fd5b60405160e0810181811067ffffffffffffffff8211171561248957634e487b7160e01b600052604160045260246000fd5b6040526124958361242a565b8152602083015160208201526124ad6040840161242a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b03831681526060810161232b602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156125345761253461250b565b500190565b60006060828403121561254b57600080fd5b6040516060810181811067ffffffffffffffff8211171561257c57634e487b7160e01b600052604160045260246000fd5b6040526125888361242a565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146125d657600080fd5b80604085015250509392505050565b600061012082840312156125f857600080fd5b6126006123f2565b905061260b8261242a565b8152602082015160208201526126236040830161242a565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b6000610120828403121561267f57600080fd5b61232b83836125e5565b6001600160a01b03831681526080810161232b60208301848035825260208082013590830152604090810135910152565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b600061010080838503121561273b57600080fd5b6040519081019067ffffffffffffffff8211818310171561276c57634e487b7160e01b600052604160045260246000fd5b816040526127798461242a565b8152602084015160208201526127916040850161242a565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060a082840312156127e557600080fd5b60405160a0810181811067ffffffffffffffff8211171561281657634e487b7160e01b600052604160045260246000fd5b6040526128228361242a565b81526020830151602082015261283a6040840161242a565b604082015260608301516060820152608083015160808201528091505092915050565b600060c0828403121561286f57600080fd5b60405160c0810181811067ffffffffffffffff821117156128a057634e487b7160e01b600052604160045260246000fd5b6040526128ac8361242a565b8152602083015160208201526128c46040840161242a565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600081600019048311821515161561290b5761290b61250b565b50029056fea26469706673582212205f6eb42274d4730265cbae8b4190540012645f957d82c6ed2347a6541bd2082664736f6c634300080c0033`,
  BytecodeLen: 11342,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:92:61:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:180:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:99:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:116:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:117:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:122:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:140:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:145:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:153:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:156:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:159:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:162:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:170:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
