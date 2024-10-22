<script lang="ts">
	import { kebabCase } from '$lib/utils';
	import type { PageData } from '../$types';

	export let data: PageData;

	const tags = [
		...new Set(
			data.posts
				.map((e) => e.keywords.split(', '))
				.flat(1)
				.sort()
		)
	];
</script>

<div>
	<h1>All Tags</h1>
	<ul>
		{#each tags as tag}
			<li>
				<a href="/tags/{kebabCase(tag)}">{tag}</a>
			</li>
		{/each}
	</ul>
</div>
