<script lang="ts">
	import type { PageData } from './$types';
	import Latest from '$lib/Latest.svelte';

	export let data: PageData;
</script>

{#if data.posts}
	<Latest posts={data.posts} />
{/if}
