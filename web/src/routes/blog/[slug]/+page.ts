import sanityClient from '$lib/sanityClient';
import { postQuery } from '$lib/queries';
import type { PostQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const data: PostQueryResult = await sanityClient.fetch(postQuery, { slug });
	const { post } = data;
	const { title } = post;
	if (post) {
		return {
			post,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
