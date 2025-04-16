const workerpool = require('workerpool');
const pool = workerpool.pool(__dirname + '/worker.js');
const { parse } = require('../lib');

const data = `{"name": 2003482851550431266}`

parse(data)

pool
  .exec('parse', [data])
  .then(function (result) {
    console.log('result', result); // outputs 7
  })
  .catch(function (err) {
    console.error(err);
  })
  .then(function () {
    pool.terminate(); // terminate all workers when done
  });