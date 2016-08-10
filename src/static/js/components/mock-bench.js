export default function run(cb) {
  const INTERVAL = 500;
  var results = {
      gpu: 'foo',
      completed: 0,
      remaining: 8,
      benchmark: {},
      platform: 'Benchmark.platform'
  };
  let foo = setInterval(function() {
    results.completed++;
    results.remaining--;
    if (results.remaining > -1) {
      cb(results);
    } else {
      clearInterval(foo);
    }
  }, INTERVAL);
}
