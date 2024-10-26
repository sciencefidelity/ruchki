import sanityClient from '$lib/sanityClient';
import { pageQuery } from '$lib/queries';
import type { PageQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const data: PageQueryResult = await sanityClient.fetch(pageQuery, { slug });
	const { page } = data;
	const { title } = page;
	if (page) {
		return {
			page,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
