<script lang="ts">
	import { format } from 'date-fns';
	import PortableText from '$lib/PortableText.svelte';
	import type { PageData } from './$types';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { author } = data;
</script>

<div>
	{#if author}
		<h1>{author.name}</h1>
		<h2>Bio</h2>
		{#if author.body}
			<PortableText body={author.body} />
		{/if}
		<h2>Posts</h2>
		<ul>
			{#each author.posts as post}
				<li>
					<a href="/blog/{post.slug}">{post.title}</a>
					{#if post.publishedAt}
						{format(new Date(post.publishedAt), 'eeee, do MMMM yyyy')}
					{/if}
				</li>
			{/each}
		</ul>
		<p><a href="/authors">All authors</a></p>
	{/if}
</div>
