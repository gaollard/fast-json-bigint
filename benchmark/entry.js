const fs = require('fs');
const { run } = require('./util');

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

{
    let data1 = fs.readFileSync('./benchmark/data-big.json', 'utf8');
    let data2 = JSON.stringify({
        data: data1
    })
    console.log(Buffer.from(data2).length + ' byte '  + 'big data test ----------------')
    run(data2);
    console.log()
}