<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import Footer from "./Footer.svelte";
	let logo = false;
	let red = false;

	function toggleLogo() {
		logo = !logo;
	}
	function toggleSpan() {
		red = !red;
	}
	$: button = logo ? "Hide logo" : "Show logo";
	$: span = red ? "Normal" : "Red";
</script>

<main>
	<span class="logo" />

	{#if logo}
		<span class:logo in:fly={{ y: 200, duration: 2000 }} out:fade />
	{/if}

	<h1 class="animate-bounce">Hello Typescript!</h1>

	<br />

	<div class:bg-red-400={red}>BG Color should change</div>

	<br />

	<button class="bg-red-100" on:click={toggleLogo}>{button}</button>
	<button on:click={toggleSpan}>Change BG Color: {span}</button>

	<br />

	<div class="absolute mt-20px bottom-0">absolute</div>
</main>

<Footer />
