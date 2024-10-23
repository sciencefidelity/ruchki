<script lang="ts">
	import type { PostPreview } from '$lib/types';
	import { toPlainText } from '$lib/utils';
	import { format } from 'date-fns';

	export let posts: PostPreview[];

	const bg = ['bg-pink-600', 'bg-amber-300', 'bg-cyan-500', 'bg-sky-600'];
</script>

<section>
	{#if posts.length == 0}
		No posts yet.
	{/if}
	<div class="posts-cards gap-v grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as { author, body, categories, publishedAt, slug, title }, idx}
			{@const plainText = body ? toPlainText(body) : ''}
			<article class="posts-card {idx === 0 ? 'post-card-large' : ''}">
				<a href="/blog/{slug}" class="mb-6" aria-label={title}>
					<div class="image h-50 mb-6 rounded-sm {idx < 4 ? bg[idx] : bg[idx - 4]}"></div>
				</a>
				<a href="/blog/{slug}">
					<header>
						{#if categories}
							<div class="mb-1.5 text-xs font-medium uppercase text-pink-500">
								{categories[0].title}
							</div>
						{/if}
						{#if title}
							<h2 class="post-card-title mb-3 text-2xl font-bold leading-5">
								{title}
							</h2>
						{/if}
					</header>
					<div>
						{#if body}
							<p class="excerpt serif mb-5 text-slate-500">
								{plainText.substring(0, 210)}
							</p>
						{/if}
					</div>
				</a>
				<footer class="flex gap-3">
					{#if author}
						<a href="/authors/${author.slug}" aria-label={title}>
							<div class="avatar rounded-full bg-stone-500"></div>
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

<style>
	.post-card-large {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column: 1 / span 3;
		grid-gap: 4vmin;
		min-height: 280px;
		border-top: 0;
	}
</style>
