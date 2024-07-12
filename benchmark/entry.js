const fs = require('fs');
const { run } = require('./util');

{
    console.log('small data test ----------------')
    let data1 = fs.readFileSync('./benchmark/data-small.json', 'utf8');
    run(data1);
    console.log()
}

{
    console.log('mid data test ----------------')
    let data1 = fs.readFileSync('./benchmark/data-mid.json', 'utf8');
    run(data1);
    console.log()
}

{
    console.log('big data test ----------------')
    let data1 = fs.readFileSync('./benchmark/data-big.json', 'utf8');
    run(data1);
    console.log()
}