<script lang="ts">
	import type { Post } from '$lib/interfaces';
	import { toPlainText } from '$lib/utils';
	import { format } from 'date-fns';

	export let posts: Post[];
	const bg = ['bg-pink-600', 'bg-amber-300', 'bg-cyan-500', 'bg-sky-600'];
</script>

<section>
	<h2 class="mb-7 text-3xl font-bold">Latest Posts</h2>
	<div class="posts-cards gap-v grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post, idx}
			<article class={`posts-card ${idx === 0 ? 'post-card-large' : ''}`}>
				<a href="/blog/{post.slug}" class="mb-6">
					<!-- <img /> -->
					<div class="image h-50 mb-6 rounded-sm {idx < 4 ? bg[idx] : bg[idx - 4]}"></div>
				</a>
				<a href="/blog/{post.slug}">
					<header>
						<!-- <ul class="mb-1.5 text-xs font-medium uppercase text-pink-500"> -->
						<!-- 	{#each post.categories as category} -->
						<!-- 		<li class="horizontal-list inline">{category.title}</li> -->
						<!-- 	{/each} -->
						<!-- </ul> -->
						<div class="mb-1.5 text-xs font-medium uppercase text-pink-500">
							{post.categories[0].title}
						</div>
						<h2 class="post-card-title mb-3 text-2xl font-bold leading-5">
							{post.title}
						</h2>
					</header>
					<div>
						<p class="excerpt serif mb-5 text-slate-500">
							{toPlainText(post.body).substring(0, 210)}
							<!-- <a href="/blog/${post.slug}" class="serif text-slate-600 underline"> -->
							<!-- 	read&nbsp;more -->
							<!-- </a> -->
						</p>
					</div>
				</a>
				<footer class="flex gap-3">
					<a href="/authors/${post.author.slug}">
						<!-- <img /> -->
						<div class="avatar rounded-full bg-stone-500"></div>
					</a>
					<div class="flex flex-col">
						<span class="text-sm font-medium">
							<a href={`/authors/${post.author.slug}`}>{post.author.name}</a>
						</span>
						<span class="text-xs text-slate-500">
							<time datetime={format(new Date(post.publishedAt), 'yyyy-MM-dd')}>
								{format(new Date(post.publishedAt), 'MMM do, yyyy')}
							</time>
							<span class="mx-0.5 inline-block">&bull;</span>
							{Math.ceil(toPlainText(post.body).split(/\W+/).length / 275)}
							min read
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
