import sanityClient from '$lib/sanityClient';
import { blogQuery } from '$lib/queries';
import type { BlogQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data: BlogQueryResult = await sanityClient.fetch(blogQuery);
	const { posts } = data;
	const title = 'Blog';
	if (posts) {
		return {
			posts,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
