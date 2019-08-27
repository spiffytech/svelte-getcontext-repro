const Wrapper = require('./Wrapper.svelte');
const Nested = require('./Nested.svelte');
const { render, cleanup } = require('@testing-library/svelte');
const { waitForElement } = require('@testing-library/dom');

beforeEach(cleanup);

describe('Nested', () => {
  it('Should render the context', async () => {
    const { getByText } = render(Wrapper, {
      props: { component: Nested }
    });
    await waitForElement(() => getByText('foo'));
    expect(getByText('foo'));
  });
});
