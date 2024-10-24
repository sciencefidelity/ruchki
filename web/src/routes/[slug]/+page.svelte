<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$lib/Article.svelte';

	const { data }: { data: PageData } = $props();

	const { page } = data;
</script>

<div>
	{#if page}
		<h1>{page.title}</h1>
		<Article {page} />
	{/if}
</div>
