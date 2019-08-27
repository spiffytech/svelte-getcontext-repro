<script>
  import {setContext} from 'svelte';

  export let component = null;

  const props = $$props;
  setContext('foo', 'foo');
</script>

<svelte:component this={component} {...props} />
