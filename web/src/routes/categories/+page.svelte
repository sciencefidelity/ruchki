<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { categories } = data;
</script>

<div>
	<h1>All Categories</h1>
	{#if categories}
		<ul>
			{#each categories as category}
				<li>
					<a href="/categories/{category.slug}">{category.title}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
