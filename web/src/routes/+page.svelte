<script lang="ts">
	import { page } from '$app/stores';
	import Latest from '$lib/Latest.svelte';
</script>

<Latest posts={$page.data.posts} />
