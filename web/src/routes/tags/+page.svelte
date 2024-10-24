<script lang="ts">
	import kebabCase from 'lodash.kebabCase';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const tags = data.posts
		? [
				...new Set(
					data.posts
						.map((e) => e.keywords.split(', '))
						.flat(1)
						.sort()
				)
			]
		: [];
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
