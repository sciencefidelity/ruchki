import sanityClient from '$lib/sanityClient';
import { tagsQuery } from '$lib/queries';
import type { TagsQueryResult } from '$lib/types';

export async function load() {
	const data: TagsQueryResult = await sanityClient.fetch(tagsQuery);
	let { posts } = data;
	if (posts) {
		return {
			posts
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
