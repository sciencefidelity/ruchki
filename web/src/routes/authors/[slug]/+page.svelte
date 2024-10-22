<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { format } from 'date-fns';
	import type { PageData } from '../$types';

	export let data: PageData;

	const { author } = data;
	$: console.log(data);
</script>

<div>
	{#if author}
		<h1>{author.title}</h1>
		<h2>Bio</h2>
		<PortableText value={author.body} components={{}} />
		<h2>Posts</h2>
		<ul>
			{#each author.posts as post}
				<li>
					<a href="/blog/{post.slug}">{post.title}</a>
					{format(new Date(post.publishedAt), 'eeee, do MMMM yyyy')}
				</li>
			{/each}
		</ul>
		<p><a href="/authors">All authors</a></p>
	{/if}
</div>
