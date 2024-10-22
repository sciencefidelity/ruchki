<script lang="ts">
	import { format } from 'date-fns';
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	import { kebabCase } from '$lib/utils';

	export let data: PageData;

	const { post } = data;
	const tags = post?.keywords?.split(', ') || [];
</script>

<div>
	{#if post}
		<h1>{post.title}</h1>
		{#if post.publishedAt}
			<p>published on: {format(new Date(post.publishedAt), 'eeee, do MMMM yyyy')}</p>
		{/if}

		<p>
			by:
			{#if post}
				<a href={`/authors/${post.author?.slug}`}>{post.author?.name}</a>
			{/if}
		</p>
		<ul>
			{#if post.categories}
				in: {#each post.categories as category}
					<li><a href={`/category/${category.slug}`}>{category.title}</a></li>
				{/each}
			{/if}
		</ul>
		<ul>
			tags: {#each tags as tag}
				<li><a href={`/tags/${kebabCase(tag)}`}>{tag}</a></li>
			{/each}
		</ul>
		{#if post.body}
			<PortableText value={post.body} components={{}} />
		{/if}
		{#if post.previous}
			<p><a href={`/blog/${post.previous.slug}`}>Previous post</a></p>
		{:else}
			<p>&nbsp;</p>
		{/if}
		{#if post.next}
			<p><a href={`/blog/${post.next.slug}`}>Next post</a></p>
		{:else}
			<p>&nbsp;</p>
		{/if}
	{/if}
</div>

<style>
	li {
		display: inline;
		&:not(:last-child)::after {
			content: ', ';
		}
	}
</style>
