// domain/.netlify/functions/1-hello
const items = require("../assets/data");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
