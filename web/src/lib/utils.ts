import { type BlockContent } from '$lib/sanity.types';
import Link from '$lib/portableTextComponents/Link.svelte';

export const buildUrl = (type: string, slug: string): string => {
	return `${subdir(type)}/${slug}`;
};

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

export const portableTextComponents = {
	marks: {
		link: Link,
		internalLink: Link
	}
};

export const subdir = (type: string): string => {
	switch (type) {
		case 'author':
			return '/authors';
		case 'category':
			return '/categories';
		case 'post':
			return '/blog';
		default:
			return '';
	}
};

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
