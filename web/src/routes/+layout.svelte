<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import GlobalStyles from '$lib/GlobalStyles.svelte';
	import Header from '$lib/Header.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const { site, home, menu } = data;
	const title = null;
</script>

<GlobalStyles>
	{#if site && home && menu}
		{@const siteName = site.siteName || 'Untitled'}
		<div class="flex min-h-screen flex-col">
			<Header title={title ? title : siteName} subtitle={home.title}>
				<Navbar {siteName} items={menu.items} />
			</Header>
			<main class="container mx-auto mb-20 mt-10 grow">
				<slot />
			</main>
			<Footer {siteName} />
		</div>
	{/if}
</GlobalStyles>
