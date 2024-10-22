<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	const { posts } = data;
</script>

{#if posts}
	<Blog {posts} />
{/if}
