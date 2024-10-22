<script lang="ts">
	import type { LayoutData } from './$types';
	import Footer from '$lib/Footer.svelte';
	import GlobalStyles from '$lib/GlobalStyles.svelte';
	import Header from '$lib/Header.svelte';

	export let data: LayoutData;
	const { site, home, menu } = data;
</script>

<GlobalStyles>
	{#if site && home && menu}
		<Header siteName={site.siteName} subtitle={home.title} {menu} />
	{/if}
	<main class="container mx-auto mb-20 mt-10">
		<slot></slot>
	</main>
	{#if site}
		<Footer siteName={site.siteName} />
	{/if}
</GlobalStyles>
