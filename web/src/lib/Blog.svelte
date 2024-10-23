<script lang="ts">
	import { format } from 'date-fns';
	import type { PostPreview } from '$lib/types';

	export let posts: PostPreview[];
</script>

<ul>
	{#if posts.length == 0}
		No posts yet.
	{/if}
	{#each posts as { slug, publishedAt, title }}
		<li>
			<a href="/blog/{slug}">{title}</a>
			{#if publishedAt}
				{format(new Date(publishedAt), 'eeee, do MMMM yyyy')}
			{/if}
		</li>
	{/each}
</ul>
