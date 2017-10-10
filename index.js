const { readFileSync } = require('fs');
const prettyFormat = require('pretty-format');
const { JSDOM } = require('jsdom');

const { window: { document } } = new JSDOM();

const markup = readFileSync(__dirname + '/something.html');

const rootElement = document.createElement('div');

rootElement.innerHTML = markup;

console.log(prettyFormat(rootElement, { plugins: prettyFormat.plugins }));
