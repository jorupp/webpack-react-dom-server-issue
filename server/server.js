const renderToStringWithData = require('@apollo/client/react/ssr').renderToStringWithData;
const getDataFromTree = require('@apollo/client/react/ssr').getDataFromTree;
const renderToString = require('react-dom/server').renderToString;

console.log(renderToStringWithData(React.createElement('li')));
console.log(getDataFromTree(React.createElement('li')));
console.log(renderToString(React.createElement('li')));
