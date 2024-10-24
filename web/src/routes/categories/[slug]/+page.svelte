<script lang="ts">
	import { format } from 'date-fns';
	import type { PageData } from './$types';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { category } = data;
</script>

<div>
	{#if category}
		<h1>Category: {category.title}</h1>
		<ul>
			{#if category.posts}
				{#each category.posts as post}
					<li>
						<a href="/blog/{post.slug}">{post.title}</a>
						{#if post.publishedAt}
							{format(new Date(post.publishedAt), 'eeee, do MMMM yyyy')}
						{/if}
					</li>
				{/each}
			{/if}
		</ul>
		<p><a href="/categories">All categories</a></p>
	{/if}
</div>
