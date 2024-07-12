const { parse } = require('../lib/index');
const bigJson = require('json-bigint')

function loop(message, cb) {
  const s = Date.now();
  for (let i = 0; i < 10; i++) {
    cb()
  }
  console.log(message.padStart(20), Date.now() - s + 'ms')
}

module.exports = {
  run (data) {
    loop("JSON.parse: ", () => {
      JSON.parse(data);
    })
    
    loop("fast-bigint-json: ",() => {
      parse( data);
    })
    
    loop(`json-bigint: `, () => {
      bigJson.parse(data);
    })
  }
}