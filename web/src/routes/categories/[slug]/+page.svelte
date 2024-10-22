<script lang="ts">
	import { format } from 'date-fns';
	import type { PageData } from '../$types';

	export let data: PageData;

	const { category } = data;
	console.log(data);
</script>

<div>
	<h1>Category: {category.title}</h1>
	<ul>
		{#each category.posts as post}
			<li>
				<a href="/blog/{post.slug}">{post.title}</a>
				{format(new Date(post.publishedAt), 'eeee, do MMMM yyyy')}
			</li>
		{/each}
	</ul>
	<p><a href="/categories">All categories</a></p>
</div>
