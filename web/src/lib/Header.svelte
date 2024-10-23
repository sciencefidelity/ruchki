<script lang="ts">
	export let title: string;
	export let subtitle: string | null;
</script>

<header class="flex-none bg-rose-500">
	<div class="container mx-auto">
		<slot />
		<div class="mt-20 pb-32 text-center text-white">
			<h1 class="h-12 text-5xl font-bold">{title}</h1>
			<p class="h-10 text-2xl leading-10">{subtitle}</p>
		</div>
	</div>
</header>
