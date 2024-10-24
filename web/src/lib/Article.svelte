<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { Page } from '$lib/types';

	type Props = { page: Page };

	const { page }: Props = $props();
</script>

{#if page.body}
	<PortableText value={page.body} components={{}} />
{/if}
