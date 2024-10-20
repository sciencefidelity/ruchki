<script>
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import GlobalStyles from '$lib/GlobalStyles.svelte';
	import Header from '$lib/Header.svelte';

	const { site, home } = $page.data;
</script>

<GlobalStyles>
	<Header siteName={site.siteName} subtitle={home.title} />
	<main class="container mx-auto mb-20 mt-10">
		<slot></slot>
	</main>
	<Footer siteName={site.siteName} />
</GlobalStyles>
