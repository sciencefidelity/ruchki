<script lang="ts">
	import { format } from 'date-fns';
	import type { Author } from '$lib/types';

	type Props = {
		author: Author | null;
		publishedAt: string | null;
		plainText: string;
	};

	const { author, plainText, publishedAt }: Props = $props();
</script>

<div class="flex gap-3">
	{#if author}
		<a href="/authors/{author.slug}" aria-label={author.name}>
			<div class="aspect-square h-9 rounded-full bg-stone-500"></div>
		</a>
	{/if}
	<div class="flex flex-col gap-0.5">
		{#if author}
			<span class="text-sm font-medium">
				<a href="/authors/{author.slug}">{author.name}</a>
			</span>
		{/if}
		<span class="text-xs text-slate-500">
			{#if publishedAt}
				{@const formattedDate = format(new Date(publishedAt), 'MMM M, yyyy')}
				<time datetime={formattedDate}>{formattedDate}</time>
			{/if}
			<span class="mx-0.5 inline-block">&bull;</span>
			{Math.ceil(plainText.split(/\W+/).length / 275)}
			min read
		</span>
	</div>
</div>
