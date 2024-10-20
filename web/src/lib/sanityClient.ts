import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';
import { PUBLIC_SANITY_API_VERSION } from '$env/static/public';

export default createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID ?? '',
	dataset: PUBLIC_SANITY_DATASET ?? 'production',
	apiVersion: PUBLIC_SANITY_API_VERSION ?? '',
	useCdn: false
});
