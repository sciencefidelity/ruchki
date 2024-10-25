<script lang="ts">
	import kebabCase from 'lodash.kebabcase';
	import type { PageData } from './$types';
	import PortableText from '$lib/PortableText.svelte';
	import PostMeta from '$lib/PostMeta.svelte';
	import { toPlainText } from '$lib/utils';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { post } = $derived(data);
	const tags = $derived(post?.keywords?.split(', ') || []);
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
			<div class="mx-auto mb-12 max-w-2xl">
				<PortableText body={post.body} />
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
			<nav class="grid grid-cols-2 justify-between gap-8">
				{#if post.next}
					<div class="w-full">
						<p class="text-xs uppercase leading-6 text-pink-500">← Next post</p>
						<p>
							<a href="/blog/{post.next.slug}" class="hover:text-rose-500">{post.next.title}</a>
						</p>
					</div>
				{:else}
					<p>&nbsp;</p>
				{/if}
				{#if post.previous}
					<div class="text-right">
						<p class="text-xs uppercase leading-6 text-pink-500">Previous post →</p>
						<p>
							<a href="/blog/{post.previous.slug}" class="hover:text-rose-500"
								>{post.previous.title}</a
							>
						</p>
					</div>
				{:else}
					<p>&nbsp;</p>
				{/if}
			</nav>
		</footer>
	{/if}
</div>
