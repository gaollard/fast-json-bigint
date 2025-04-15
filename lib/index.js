const { parse } = require('../build/Release/json_parse');
const originParse = JSON.parse.bind(JSON)

module.exports = { 
  parse: function (content, ...rest) {
    // console.log(originParse(content))
    return originParse(parse(content), ...rest);
  }
}