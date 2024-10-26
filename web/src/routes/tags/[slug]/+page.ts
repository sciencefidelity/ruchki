import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let tag = params.slug;
	let title = `tag: ${tag}`;
	if (tag) {
		return {
			tag,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
