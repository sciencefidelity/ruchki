<script lang="ts">
	import { buildUrl } from '$lib/utils';
	import type { MarkComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		portableText: MarkComponentProps<{
			_key: string;
			_type: string;
			blank: boolean | null;
			href: string | null;
			item: {
				_type: string;
				slug: string;
			} | null;
		}>;
	};

	const { children, portableText }: Props = $props();
	let { value } = $derived(portableText);
	const href = $derived(value.href || '');
	const rel = $derived(href.startsWith('/') ? undefined : 'noreferrer');
</script>

{#if value.item == null}
	<a {href} {rel} class="text-rose-500 underline" target="_blank">
		{@render children()}
	</a>
{:else}
	<a href={buildUrl(value.item._type, value.item.slug)} class="text-rose-500 underline">
		{@render children()}
	</a>
{/if}
