<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet };

	const { children }: Props = $props();
</script>

<li class="mb-2">
	{@render children()}
</li>
