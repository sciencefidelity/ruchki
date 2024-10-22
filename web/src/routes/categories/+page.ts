import sanityClient from '$lib/sanityClient';
import { categoriesQuery } from '$lib/queries';
import type { CategoriesQueryResult } from '$lib/types';

export async function load() {
	const data: CategoriesQueryResult = await sanityClient.fetch(categoriesQuery);
	let { categories } = data;
	if (categories) {
		return {
			categories
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
