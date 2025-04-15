const workerpool = require('workerpool');
const pool = workerpool.pool(__dirname + '/worker.js');


const data = JSON.stringify({
    name: 'frank',
    v1: 20.512312312123123123,
    v2: -20.512311,
    v3: 20.00,
    v4: -20.01,
    data: {
        list: [
            {
                name: 'frank',
                v1: 20.512312312123123123,
                v2: -20.512311,
                v3: 20.00,
                v4: -20.01,
            }
        ]
    }
  })
  
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