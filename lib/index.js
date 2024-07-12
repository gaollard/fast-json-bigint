const { parse } = require('../build/Release/json_parse');

// module.exports = { parse }

const originParse = JSON.parse.bind(JSON)

module.exports = { 
  parse: function (content, ...rest) {
    return originParse(parse(content), ...rest);
  }
}