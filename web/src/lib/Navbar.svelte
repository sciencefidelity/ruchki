<script lang="ts">
	import type { MenuItem } from '$lib/types';

	type Props = {
		siteName: string;
		items: MenuItem[] | null;
	};

	const { siteName, items }: Props = $props();
</script>

<nav class="container mx-auto h-14 py-3 leading-8 text-white">
	<ul class="flex gap-7">
		<li>
			{#if siteName}
				<a href="/" class="font-medium opacity-80 hover:opacity-100">
					{siteName}
				</a>
			{/if}
		</li>
		{#if items}
			{#each items as item}
				<li>
					<a href="/{item.slug}" class="font-medium opacity-80 hover:opacity-100">
						{item.title}
					</a>
				</li>
			{/each}
		{/if}
	</ul>
</nav>
