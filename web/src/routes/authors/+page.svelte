<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;

	const { authors } = data;
</script>

<div>
	<h1>All Authors</h1>
	<ul>
		{#each authors as author}
			<li>
				<a href="/authors/{author.slug}">{author.name}</a>
			</li>
		{/each}
	</ul>
</div>
