<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import kebabCase from 'lodash.kebabcase';
	import type { PageData } from './$types';
	import PostMeta from '$lib/PostMeta.svelte';
	import { portableTextComponents, toPlainText } from '$lib/utils';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { post } = data;
	const tags = post?.keywords?.split(', ') || [];

	let title = $state('Untitled');
	if (post?.title) {
		title = post.title;
	}
</script>

<div>
	{#if post}
		<header class="mx-auto mb-10 max-w-2xl">
			<ul class="mb-4 flex gap-3 text-xs uppercase text-pink-500">
				{#if post.categories}
					{#each post.categories as { _id, slug, title }, idx (_id)}
						<li class="">
							<a href="/categories/{slug}">{title}</a>
							{#if idx < post.categories.length - 1}
								<span class="pl-2 text-gray-600">•</span>
							{/if}
						</li>
					{/each}
				{/if}
			</ul>
			<PostMeta
				author={post.author}
				publishedAt={post.publishedAt}
				plainText={toPlainText(post.body ? post.body : undefined)}
			/>
		</header>

		{#if post.body}
			<div class="pt mx-auto mb-12 max-w-2xl font-serif text-xl leading-8 text-gray-800">
				<PortableText value={post.body} components={portableTextComponents} />
			</div>
		{/if}
		<footer class="mx-auto max-w-2xl">
			<ul class="mb-12 text-sm">
				{#each tags as tag, idx (tag)}
					<li class="inline pr-2">
						<a href="/tags/{kebabCase(tag)}">
							{tag}{#if idx < tags.length - 1},{/if}
						</a>
					</li>
				{/each}
			</ul>
			<nav class="flex justify-between">
				{#if post.next}
					<p><a href="/blog/{post.next.slug}">← {post.next.title}</a></p>
				{:else}
					<p>&nbsp;</p>
				{/if}
				{#if post.previous}
					<p><a href="/blog/{post.previous.slug}">{post.previous.title} →</a></p>
				{:else}
					<p>&nbsp;</p>
				{/if}
			</nav>
		</footer>
	{/if}
</div>

<style>
	:global(.pt p) {
		margin-bottom: 2rem;
	}
</style>
