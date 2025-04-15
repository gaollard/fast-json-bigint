const workerpool = require('workerpool');
const pool = workerpool.pool(__dirname + '/worker.js');

pool
  .exec('parse', [`{"name":2}`])
  .then(function (result) {
    console.log('result', result); // outputs 7
  })
  .catch(function (err) {
    console.error(err);
  })
  .then(function () {
    pool.terminate(); // terminate all workers when done
  });