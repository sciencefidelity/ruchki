<script lang="ts">
	import type { PageData } from '../$types';
	import Article from '$lib/Article.svelte';

	export let data: PageData;

	const { page } = data;
</script>

<div>
	{#if page.title && page.body}
		<h1>{page.title}</h1>
		<Article {page} />
	{/if}
</div>
