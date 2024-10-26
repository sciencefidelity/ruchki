<script lang="ts">
	import type { PageData } from './$types';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { authors } = $derived(data);
</script>

<div>
	{#if authors}
		<ul>
			{#each authors as author}
				<li>
					<a href="/authors/{author.slug}">{author.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
