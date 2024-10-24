<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet };

	const { children }: Props = $props();
</script>

<blockquote class="mb-4 ml-8 font-serif text-xl italic leading-8">
	{@render children()}
</blockquote>
