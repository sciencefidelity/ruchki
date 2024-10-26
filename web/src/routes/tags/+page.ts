import sanityClient from '$lib/sanityClient';
import { tagsQuery } from '$lib/queries';
import type { TagsQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data: TagsQueryResult = await sanityClient.fetch(tagsQuery);
	const { posts } = data;
	const title = 'All Tags';
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
