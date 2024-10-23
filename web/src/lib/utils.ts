import type { BlockContent } from '$lib/sanity.types';

export function toPlainText(blocks: BlockContent = []) {
	return blocks
		.map((block) => {
			if (block._type !== 'block' || !block.children) {
				return '';
			}
			return block.children.map((child: any) => child.text).join('');
		})
		.join('\n\n');
}
