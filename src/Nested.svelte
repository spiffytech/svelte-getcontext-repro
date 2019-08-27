<script>
  import {getContext} from 'svelte';
  const foo = getContext('foo');
</script>

<p>The context is:</p>
<p>{foo}</p>
