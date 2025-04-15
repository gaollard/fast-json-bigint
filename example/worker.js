const { parse } = require('../lib');
const workerpool = require('workerpool');

workerpool.worker({
    parse
})