<script lang="ts">
	import PortableText from '$lib/PortableText.svelte';
	import type { PageData } from './$types';
	import PostsGrid from '$lib/PostsGrid.svelte';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { author } = $derived(data);
</script>

<div>
	{#if author}
		<div class="pt mx-auto mb-16 max-w-2xl font-serif text-xl leading-8 text-gray-800">
			<h2 class="mb-4 font-sans text-4xl font-bold">Bio</h2>
			{#if author.body}
				<PortableText body={author.body} />
			{/if}
			<h3 class="mt-4 text-xl text-gray-800 text-rose-500 underline hover:underline">
				<a href="/authors">All authors</a>
			</h3>
		</div>
		<PostsGrid posts={author.posts.slice(0, 6)} />
	{/if}
</div>
