<script lang="ts">
	import { format } from 'date-fns';
	import { toPlainText } from '$lib/utils';
	import type { PostPreview } from '$lib/types';
	import { getExcerpt } from '$lib/utils';

	type Props = { posts: PostPreview[] };

	const { posts }: Props = $props();
	const bg = ['bg-pink-600', 'bg-amber-300', 'bg-cyan-500', 'bg-sky-600'];
</script>

<section>
	{#if posts.length == 0}
		No posts yet.
	{/if}
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as { author, body, categories, publishedAt, slug, title }, idx}
			{@const plainText = body ? toPlainText(body) : ''}
			<article class="flex flex-col">
				<header>
					<a href="/blog/{slug}" class="mb-6" aria-label={title}>
						<div class="h-50 mb-6 aspect-video rounded-sm {bg[idx % 4]}"></div>
					</a>
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
				</header>
				<div>
					{#if body}
						<p class="serif mb-5 text-slate-500">
							{getExcerpt(plainText, 280)}..
							<a href="/blog/{slug}" class="text-sky-600 underline">read more</a>
						</p>
					{/if}
				</div>
				<footer class="flex gap-3">
					{#if author}
						<a href="/authors/{author.slug}" aria-label={title}>
							<div class="aspect-square h-9 rounded-full bg-stone-500"></div>
						</a>
					{/if}
					<div class="flex flex-col">
						{#if author}
							<span class="text-sm font-medium">
								<a href="/authors/{author.slug}">{author.name}</a>
							</span>
						{/if}
						<span class="text-xs text-slate-500">
							{#if publishedAt}
								{@const formattedDate = format(new Date(publishedAt), 'yyyy-MM-dd')}
								<time datetime={formattedDate}>{formattedDate}</time>
							{/if}
							{#if body}
								<span class="mx-0.5 inline-block">&bull;</span>
								{Math.ceil(plainText.split(/\W+/).length / 275)}
								min read
							{/if}
						</span>
					</div>
				</footer>
			</article>
		{/each}
	</div>
</section>
