import type { BlockContent } from '$lib/sanity.types';

export const buildUrl = (type: string, slug: string): string => {
	return `${subdir(type)}/${slug}`;
};

export const capitalize = (str: string): string => {
	return str
		.split(/[\s-]/g)
		.map((e) => e.replace(e[0], e[0].toUpperCase()))
		.join(' ');
};

export const kebabCase = (str: string): string => {
	return str
		.toLowerCase()
		.split(' ')
		.join('-')
		.replace(/[^a-z0-9-]/g, '');
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

export const toPlainText = (blocks: BlockContent = []): string => {
	return blocks
		.map((block) => {
			if (block._type !== 'block' || !block.children) {
				return '';
			}
			return block.children.map((child: any) => child.text).join('');
		})
		.join('\n\n');
};
