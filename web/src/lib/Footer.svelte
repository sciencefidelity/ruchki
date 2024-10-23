<script lang="ts">
	export let siteName: string;

	const year = new Date().getFullYear();
</script>

<footer class="flex-none bg-zinc-700">
	<div class="container mx-auto grid grid-cols-3 pb-40 pt-10 text-sm text-gray-100">
		<p>
			<a href="/">{siteName}</a>
			&copy; {year}
		</p>
		<p class="text-center">Data & privacy &bull; Contact</p>
		<p class="text-right">
			Powered by
			<a href="https://svelte.dev" target="_blank" rel="noreferrer">Svelte</a>
			and
			<a href="https://sanity.io" target="_blank" rel="noreferrer">Sanity</a>
		</p>
	</div>
</footer>
