import Wrapper from './Wrapper.svelte';
import Nested from './Nested.svelte';

const wrapper = new Wrapper({
    target: document.body,
    props: {
        component: Nested
    }
});

window.wrapper = wrapper;

export default wrapper;
