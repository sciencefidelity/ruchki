<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { Page } from '$lib/types';

	export let page: Page;
</script>

{#if page.body}
	<PortableText value={page.body} components={{}} />
{/if}
