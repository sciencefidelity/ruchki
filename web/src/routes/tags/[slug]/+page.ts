export async function load({ params }: { params: { slug: string } }) {
	let tag = params.slug;
	if (tag) {
		return {
			tag
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
