import benchmarks from 'benchmark.gl-benchmarks';
import mockBench from './mock-bench';
import progress from './progress';
import {addClass, removeClass} from '../lib/dommy';
import cuid from 'cuid';
import request from 'superagent';

const isBenchmarking = document.getElementById('benchmark') ? true : false;
const progressShroud = document.getElementById('progress-shroud');
const startBenchmarkButton = document.getElementById('start-benchmark');
const introModal = document.getElementById('benchmark-intro');
const successModal = document.getElementById('benchmark-success');
const bmvid = document.getElementById('benchmark-vid');

const MODAL_ANIMATION_DURATION = 400;

startBenchmarkButton.onclick = function() {
  addClass(introModal, 'modal--out');
  setTimeout(function() {
    kickoff();
    introModal.parentNode.removeChild(introModal);
    removeClass(bmvid, 'logo-vid--hide');
  }, MODAL_ANIMATION_DURATION);
};

function kickoff() {
  console.log('running');
  let numberOfBenchmarks;
  // complete(dummy);

  benchmarks.run(function(res){
    if (numberOfBenchmarks === undefined) {
      numberOfBenchmarks = res.remainingBenchmarks + 1;
    }
    if (res.remainingBenchmarks > -1) {
      console.log(res);
      let percentDone = (res.completedBenchmarks/numberOfBenchmarks) * 100;
      progress(progressShroud, percentDone);
      if (res.remainingBenchmarks === 0) {
        console.log('done');
        complete(res);
      }
    }
  });
}

function complete(results) {
  removeClass(successModal, 'modal--out');
  const cuidContainer = document.getElementById('cuid');
  const cuidString = cuid();
  cuidContainer.innerHTML = cuidString;
  results.mechTurkId = cuidString;


  request
    .post(process.env.API_GATEWAY)
    .set('Content-Type', 'application/json')
    .send(results)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    });

  addClass(bmvid, 'logo-vid--hide');
}
