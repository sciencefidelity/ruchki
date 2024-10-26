import sanityClient from '$lib/sanityClient';
import { categoriesQuery } from '$lib/queries';
import type { CategoriesQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data: CategoriesQueryResult = await sanityClient.fetch(categoriesQuery);
	let { categories } = data;
	let title = 'All Categories';
	if (categories) {
		return {
			categories,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
