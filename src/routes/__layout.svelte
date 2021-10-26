<script>
	import { fade } from 'svelte/transition';
	import navigationState from '$lib/store/navigationState';
	import NavigationProgress from '$lib/components/NavigationProgress.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import '../app.css';

	function handleStartNavigation() {
		$navigationState = 'loading';
	}

	function handleEndNavigation() {
		$navigationState = 'loaded';
	}
</script>

<svelte:window
	on:sveltekit:navigation-start={handleStartNavigation}
	on:sveltekit:navigation-end={handleEndNavigation}
/>

{#if $navigationState === 'loading'}
	<div class="progress-bar" out:fade="{{ delay: 300 }}">
		<NavigationProgress/>
	</div>
{/if}
<div class="layout">
	<Header />
	<main>
		<slot />
	</main>
	<Footer/>
</div>

<style>
.layout {
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 1fr auto;
	min-height: 100vh;
}
.progress-bar {
	position: relative;
	z-index: 99999;
}
</style>