<script>
	import '../app.css';
</script>

<slot />

<style global>
	:root {
		--color-000: hsl(0, 50%, 50%);
		--color-030: hsl(30, 50%, 50%);
		--color-060: hsl(60, 50%, 50%);
		--color-090: hsl(90, 50%, 50%);
		--color-120: hsl(120, 50%, 50%);
		--color-150: hsl(150, 50%, 50%);
		--color-180: hsl(180, 50%, 50%);
		--color-210: hsl(210, 50%, 50%);
		--color-240: hsl(240, 50%, 50%);
		--color-270: hsl(270, 50%, 50%);
		--color-300: hsl(300, 50%, 50%);
		--color-330: hsl(330, 50%, 50%);
	}

	:global(html) {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(.serif) {
		font-family: Georgia, Times, serif;
	}
</style>
