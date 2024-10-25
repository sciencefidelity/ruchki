<script lang="ts">
	import type { PageData } from './$types';
	import PortableText from '$lib/PortableText.svelte';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { page } = $derived(data);
</script>

<div class="pt mx-auto mb-7 max-w-2xl font-serif text-xl leading-8 text-gray-800">
	{#if page && page.body}
		<PortableText body={page.body} />
	{/if}
</div>
