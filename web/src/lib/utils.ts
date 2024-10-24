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

export function getExcerpt(input: string, maxLength: number = 210): string {
	const sentences = input.match(/[^.!?]+[.!?]+/g);
	if (!sentences) return '';
	let result = '';
	for (const sentence of sentences) {
		if (result.length + sentence.length <= maxLength) {
			result += sentence;
		} else {
			break;
		}
	}
	return result.trim();
}
