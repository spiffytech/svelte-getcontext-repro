import Wrapper from './Wrapper.svelte';
import Nested from './Nested.svelte';

export default function() {
    return new Wrapper({
        target: document.body,
        props: {
            component: Nested
        }
    });
}
