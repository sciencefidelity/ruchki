<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Footer from '$lib/Footer.svelte';
	import GlobalStyles from '$lib/GlobalStyles.svelte';
	import Header from '$lib/Header.svelte';
	import Navbar from '$lib/Navbar.svelte';

	type Props = {
		children: Snippet;
		data: LayoutData;
	};

	const { children, data }: Props = $props();
	const { site, home, menu } = data;
	let title = null;
</script>

<GlobalStyles>
	{#if site && home && menu}
		{@const siteName = site.siteName || 'Untitled'}
		<div class="flex min-h-screen flex-col antialiased">
			<Header title={title ? title : siteName} subtitle={home.title}>
				<Navbar {siteName} items={menu.items} />
			</Header>
			<main class="container mx-auto mb-20 mt-16 grow px-4">
				{@render children()}
			</main>
			<Footer {siteName} />
		</div>
	{/if}
</GlobalStyles>
