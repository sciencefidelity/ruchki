<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { Page } from '$lib/types';

	const { page }: { page: Page } = $props();
</script>

{#if page.body}
	<PortableText value={page.body} components={{}} />
{/if}
