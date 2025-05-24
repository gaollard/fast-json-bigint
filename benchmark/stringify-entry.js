const fs = require('fs');

const bigJson = require('json-bigint')({
    storeAsString: true
})

function loop(message, cb) {
  const s = Date.now();
  for (let i = 0; i < 10; i++) {
    cb()
  }
  console.log(message.padStart(30), Date.now() - s + 'ms')
}

function run (data) {
    const msg = '';
    data = JSON.parse(data);

    loop(msg + "JSON.stringify: ", () => {
        JSON.stringify(data);
    })

    loop(msg + "bigint-json stringify: ",() => {
        bigJson.stringify( data);
    })
}

{
    
    let data1 = fs.readFileSync('./benchmark/data-xs.json', 'utf8');
    console.log(Buffer.from(data1).length + ' byte ' + 'xs data test ----------------')
    run(data1);
    console.log()
}

{
    let data1 = fs.readFileSync('./benchmark/data-small.json', 'utf8');
    console.log(Buffer.from(data1).length + ' byte ' + 'small data test ----------------')
    run(data1);
    console.log()
}

{
    let data1 = fs.readFileSync('./benchmark/data-mid.json', 'utf8');
    console.log(Buffer.from(data1).length + ' byte ' + 'mid data test ----------------')
    run(data1);
    console.log()
}

{
    let data1 = fs.readFileSync('./benchmark/data-big.json', 'utf8');
    console.log(Buffer.from(data1).length + ' byte '  + 'big data test ----------------')
    run(data1);
    console.log()
}