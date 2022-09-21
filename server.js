const renderToStringWithData = require('@apollo/client/react/ssr').renderToStringWithData;
const renderToString = require('react-dom/server').renderToString;

console.log(renderToStringWithData(React.createElement('li')));
console.log(renderToString(React.createElement('li')));
