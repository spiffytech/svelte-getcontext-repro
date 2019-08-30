require('jsdom-global')();

const Wrapper = require('./public/Wrapper');
const Nested = require('./public/Nested');

new Wrapper({target: document.body, props: {component: Nested}});
console.log(document.body.innerHTML);
