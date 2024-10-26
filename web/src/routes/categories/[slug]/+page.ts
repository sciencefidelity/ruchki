import sanityClient from '$lib/sanityClient';
import { categoryQuery } from '$lib/queries';
import type { CategoryQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const data: CategoryQueryResult = await sanityClient.fetch(categoryQuery, { slug: params.slug });
	const { category } = data;
	const { title } = category;
	if (category) {
		return {
			category,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
