<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet };

	const { children }: Props = $props();
</script>

<p class=" mb-4 font-serif text-xl leading-8 text-gray-800">
	{@render children()}
</p>
