<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import type { Menu } from '$lib/types';

	export let menu: Menu;
	export let siteName: string | null;
	export let subtitle: string | null;
</script>

<header class="bg-rose-500">
	<div class="container">
		<Navbar {siteName} items={menu.items} />
		<div class="mt-20 pb-32 text-center text-white">
			{#if siteName}
				<h1 class="text-5xl font-bold">{siteName}</h1>
			{/if}
			{#if subtitle}
				<p class="text-2xl leading-10">{subtitle}</p>
			{/if}
		</div>
	</div>
</header>
