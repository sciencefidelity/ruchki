<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ListComponentProps } from '@portabletext/svelte';

	type Props = { children: Snippet; portableText: ListComponentProps };

	const { children, portableText }: Props = $props();
	let value = $state(portableText.value);
</script>

<ol class="ml-4 list-outside list-decimal font-serif text-xl leading-8">
	{@render children()}
</ol>
