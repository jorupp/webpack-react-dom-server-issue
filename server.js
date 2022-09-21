import { renderToStringWithData } from '@apollo/client/react/ssr';
import { renderToString } from 'react-dom/server';
const simple = require('react-dom/server').renderToString;

console.log(renderToStringWithData(React.createElement('li')));
console.log(renderToString(React.createElement('li')));
console.log(simple(React.createElement('li')));
