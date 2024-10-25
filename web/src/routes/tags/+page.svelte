<script lang="ts">
	import kebabCase from 'lodash.kebabcase';
	import type { PageData } from './$types';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const tags = $derived(
		data.posts
			? [
					...new Set(
						data.posts
							.map((e) => e.keywords.split(', '))
							.flat(1)
							.sort()
					)
				]
			: []
	);
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
