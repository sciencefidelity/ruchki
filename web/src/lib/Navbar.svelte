<script lang="ts">
	// import type { Menu } from '$lib/interfaces';

	export let siteName: string;
	// export let menu: Menu;
</script>

<nav class="inner mx-auto py-3 leading-8 text-white">
	<ul class="flex gap-7">
		<li>
			<a href="/" class="font-medium opacity-80 hover:opacity-100">
				{siteName}
			</a>
		</li>
		<!-- {#each menu.item as item} -->
		<!-- 	<li> -->
		<!-- 		<a href="/{item.slug}" class="font-medium opacity-80 hover:opacity-100"> -->
		<!-- 			{item.title} -->
		<!-- 		</a> -->
		<!-- 	</li> -->
		<!-- {/each} -->
	</ul>
</nav>
