<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import type { PageData } from '../$types';

	const { data }: { data: PageData } = $props();

	const { posts } = data;
</script>

{#if posts}
	<Blog {posts} />
{/if}
