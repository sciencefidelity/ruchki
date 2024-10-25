<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import type { PageData } from '../$types';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { posts } = $derived(data);
</script>

{#if posts}
	<Blog {posts} />
{/if}
