import sanityClient from '$lib/sanityClient';
import { blogQuery } from '$lib/queries';
import type { BlogQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data: BlogQueryResult = await sanityClient.fetch(blogQuery);
	// If there are no posts this will return an empty array.
	let { posts } = data;
	if (posts) {
		return {
			posts
		};
	}
	// TODO: handle error status in front end.
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
