import sanityClient from '$lib/sanityClient';
import { indexQuery } from '$lib/queries';
import type { Home, Post } from '$lib/interfaces';

export async function load() {
	const data: { home: Home; posts: Post[] } = await sanityClient.fetch(indexQuery);
	let { home, posts } = data;
	if (posts) {
		return {
			home,
			posts
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
