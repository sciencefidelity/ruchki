<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';

	export let siteName: string;
	export let subtitle: string;
</script>

<header class="bg-rose-500">
	<div class="container">
		<Navbar {siteName} />
		<div class="mt-20 pb-32 text-center text-white">
			<h1 class="text-5xl font-bold">{siteName}</h1>
			<p class="text-2xl leading-10">{subtitle}</p>
		</div>
	</div>
</header>
