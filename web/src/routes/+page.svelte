<script lang="ts">
	import type { PageData } from './$types';
	import Latest from '$lib/Latest.svelte';

	type Props = {
		data: PageData;
	};

	const { data }: Props = $props();
	const { posts } = $derived(data);
</script>

{#if posts}
	<Latest {posts} />
{/if}
