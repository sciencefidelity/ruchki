<script lang="ts">
	import type { PageData } from './$types';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { tag } = data;
</script>

<div>
	<h1>Tag: {tag}</h1>
	<p><a href="/tags">All tags</a></p>
</div>
