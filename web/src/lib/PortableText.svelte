<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { BlockContent } from './sanity.types';
	import Blockquote from '$lib/portableTextComponents/Blockquote.svelte';
	import Link from '$lib/portableTextComponents/Link.svelte';
	import OrderedList from '$lib/portableTextComponents/OrderedList.svelte';
	import OrderedListItem from '$lib/portableTextComponents/OrderedListItem.svelte';
	import Paragraph from '$lib/portableTextComponents/Paragraph.svelte';

	type Props = {
		body: BlockContent;
	};

	const { body }: Props = $props();
	const components = {
		marks: {
			link: Link,
			internalLink: Link
		},
		block: {
			normal: Paragraph,
			blockquote: Blockquote
		},
		list: {
			number: OrderedList
		},
		listItem: {
			normal: OrderedListItem
		}
	};
</script>

<PortableText value={body} {components} />
