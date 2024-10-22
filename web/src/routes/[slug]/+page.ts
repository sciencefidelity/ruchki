import sanityClient from '$lib/sanityClient';
import { pageQuery } from '$lib/queries';
import type { PageQueryResult } from '$lib/types';

export async function load({ params }: { params: { slug: string } }) {
	const data: PageQueryResult = await sanityClient.fetch(pageQuery, { slug: params.slug });
	if (data) {
		return {
			page: data.page
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
