const { parse } = require('../build/Release/json_parse');
const originParse = JSON.parse.bind(JSON)

module.exports = { 
  parse: function (content, ...rest) {
    if (content === null || content === 'null') return null;
    if (content === undefined) return originParse(content, ...rest);
    if (typeof content === 'number') return originParse(content, ...rest);
    if (typeof content === 'string') return originParse(parse(content), ...rest);
    return originParse(content, ...rest);
  }
}