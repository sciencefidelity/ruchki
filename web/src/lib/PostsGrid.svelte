<script lang="ts">
	import { toPlainText } from '$lib/utils';
	import type { PostPreview } from '$lib/types';
	import { getExcerpt } from '$lib/utils';
	import PostMeta from './PostMeta.svelte';

	type Props = { posts: PostPreview[] };

	const { posts }: Props = $props();
	const bg = ['bg-pink-600', 'bg-amber-300', 'bg-cyan-500', 'bg-sky-600'];
</script>

<section>
	{#if posts.length == 0}
		No posts yet.
	{/if}
	<div class="grid grid-cols-1 grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as { _id, author, body, categories, publishedAt, slug, title }, idx (_id)}
			{@const plainText = body ? toPlainText(body) : ''}
			<article class="flex flex-col gap-6">
				<header>
					<a href="/blog/{slug}" class="mb-6" aria-label={title}>
						<div class="aspect-video {bg[idx % 4]}"></div>
					</a>
				</header>
				<div>
					{#if categories}
						<a href="/categories/{categories[0].slug}">
							<div class="mb-1.5 text-xs font-medium uppercase text-pink-500">
								{categories[0].title}
							</div>
						</a>
					{/if}
					{#if title}
						<a href="/blog/{slug}">
							<h2 class="mb-3 text-2xl font-bold leading-8">
								{title}
							</h2>
						</a>
					{/if}
					{#if body}
						<p class="font-serif text-slate-500">
							{getExcerpt(plainText, 280)}..
							<a href="/blog/{slug}" class="text-sky-600 underline">read&nbsp;more</a>
						</p>
					{/if}
				</div>
				<footer>
					<PostMeta {author} {publishedAt} {plainText} />
				</footer>
			</article>
		{/each}
	</div>
</section>
