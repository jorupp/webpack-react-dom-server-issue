import { renderToStringWithData } from '@apollo/client/react/ssr';
import { renderToString } from 'react-dom/server';

console.log(renderToStringWithData(React.createElement('li')));
console.log(renderToString(React.createElement('li')));
