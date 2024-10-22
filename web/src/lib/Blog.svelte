<script lang="ts">
	import { format } from 'date-fns';
	import type { PostPreview } from '$lib/types';

	export let posts: PostPreview[] | null;
</script>

<ul>
	{#if posts}
		{#each posts as { slug, publishedAt, title }}
			<li>
				{#if slug && title}
					<a href={`/blog/${slug}`}>{title}</a>
				{/if}
				{#if publishedAt}
					{format(new Date(publishedAt), 'eeee, do MMMM yyyy')}
				{/if}
			</li>
		{/each}
	{/if}
</ul>
