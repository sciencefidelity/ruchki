<script lang="ts">
	import type { PageData } from '../$types';
	import Article from '$lib/Article.svelte';

	export let data: PageData;

	const { page } = data;
	$: console.log(data.page);
</script>

<div>
	{#if page.title && page.body}
		<h1>{page.title}</h1>
		<Article {page} />
	{/if}
</div>
