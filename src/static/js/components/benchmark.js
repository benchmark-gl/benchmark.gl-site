// import benchmarks from 'benchmark.gl-benchmarks';
import mockBench from './mock-bench';
import progress from './progress';
import {addClass} from '../lib/dommy';

const isBenchmarking = document.getElementById('benchmark') ? true : false;
const progressShroud = document.getElementById('progress-shroud');
const startBenchmark = document.getElementById('start-benchmark');

// if (isBenchmarking) {
//   benchmarks.run(function(res){
//   //  console.log(res);
//     if (res.remaining > 0) {
//       //benchmark still running
//       //update progress bar
//     } else {
//       //benchmark complete
//       //show thank you
//     }
//   });
//   // setTimeout(function() {
//   //   //benchmarks running

//   // }, 2000);
// }
startBenchmark.onclick = kickoff;

function kickoff() {
  mockBench(function(res){
    if (res.remaining > -1) {
      let percentDone = (res.completed/8) * 100;
      progress(progressShroud, percentDone);
      if (res.remaining === 0) {
        complete();
      }
    }
  });

  function complete() {
    const bmvid = document.getElementById('benchmark-vid');
    const success = document.getElementById('benchmark-vid');
    bmvid.pause();
    addClass(bmvid, 'none');
  }
}
