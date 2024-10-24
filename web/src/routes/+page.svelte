<script lang="ts">
	import type { PageData } from './$types';
	import Latest from '$lib/Latest.svelte';

	const { data }: { data: PageData } = $props();
</script>

{#if data.posts}
	<Latest posts={data.posts} />
{/if}
