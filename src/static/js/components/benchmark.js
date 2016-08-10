// import benchmarks from 'benchmark.gl-benchmarks';
import mockBench from './mock-bench';
import progress from './progress';
import {addClass, removeClass} from '../lib/dommy';
import cuid from 'cuid';

const isBenchmarking = document.getElementById('benchmark') ? true : false;
const progressShroud = document.getElementById('progress-shroud');
const startBenchmarkButton = document.getElementById('start-benchmark');
const introModal = document.getElementById('benchmark-intro');
const successModal = document.getElementById('benchmark-success');

const MODAL_ANIMATION_DURATION = 400;

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
startBenchmarkButton.onclick = function() {
  addClass(introModal, 'modal--out');
  setTimeout(function() {
    kickoff();
    introModal.parentNode.removeChild(introModal);
  }, MODAL_ANIMATION_DURATION);
};
// startBenchmarkButton.addEventListener('transitionend', function() {
//   console.log('asdfasf')
// });

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
    removeClass(successModal, 'modal--out');
    const cuidContainer = document.getElementById('cuid');
    console.log(cuid());
    cuidContainer.innerHTML = cuid();
    // const bmvid = document.getElementById('benchmark-vid');
    // const success = document.getElementById('benchmark-vid');
    // bmvid.pause();
    // addClass(bmvid, 'none');
  }
}
