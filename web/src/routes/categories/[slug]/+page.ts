import sanityClient from '$lib/sanityClient';
import { categoryQuery } from '$lib/queries';
import type { CategoryQueryResult } from '$lib/types';

export async function load({ params }: { params: { slug: string } }) {
	const data: CategoryQueryResult = await sanityClient.fetch(categoryQuery, { slug: params.slug });
	const { category } = data;
	if (category) {
		return {
			category
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
