const Wrapper = require('./Wrapper.svelte');
const Nested = require('./Nested.svelte');
require('jsdom-global')();

describe('Nested', () => {
  it('Should render the context', async () => {
    new Wrapper({
      target: document.body,
      props: {component: Nested},
    });

    console.log(document.body.innerHTML);
    expect(document.body.innerHTML.includes('foo')).toBeTruthy();
  });
});
