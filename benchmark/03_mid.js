const fs = require('fs');
const { parse } = require('../lib/index');
const bigJson = require('json-bigint')

let data1 = fs.readFileSync('./benchmark/mid-data.json', 'utf8');

const data = data1;

{
    const s = Date.now();
    JSON.parse(data);
    console.log(Date.now() - s)
}

{
    const s = Date.now();
    parse(data);
    console.log(Date.now() - s)
}


{
    const s = Date.now();
    bigJson.parse(data);
    console.log(Date.now() - s)
}