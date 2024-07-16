const { parse } = require('../lib/index');
const bigJson = require('json-bigint')

function loop(message, cb) {
  const s = Date.now();
  for (let i = 0; i < 10; i++) {
    cb()
  }
  console.log(message.padStart(30), Date.now() - s + 'ms')
}

module.exports = {
  run (data) {
    const msg = '';
    loop(msg + "JSON.parse: ", () => {
      JSON.parse(data);
    })
    
    loop(msg + "fast-bigint-json: ",() => {
      parse( data);
    })
    
    loop(msg + `json-bigint: `, () => {
      bigJson.parse(data);
    })
  }
}