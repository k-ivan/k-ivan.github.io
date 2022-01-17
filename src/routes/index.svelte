<script>
	import { browser } from '$app/env';
	import { onMount, onDestroy } from "svelte";
	import HomeHero from '$lib/components/pages/HomeHero.svelte';
	import { arraySplit2Parts } from '$lib/utils';

	const works = [
		{
			title: 'Visual Bookmarks',
			desc: 'Browser extension for working with bookmarks. It allows you to manage your bookmarks through a nice interface and has many settings for customization. Available for browsers: Microsoft Edge,Google Chrome, Opera',
			link: 'https://github.com/k-ivan/visual-bookmarks-chrome'
		},
		{
			title: 'Tabs Slider',
			desc: 'Easy to use tabs slider, written in pure JavaScript.',
			link: 'https://github.com/k-ivan/tabs-slider'
		},
		{
			title: 'Validate form plugin',
			desc: 'Lightweight and easy form validation plugin written in pure JavaScript',
			link: 'https://k-ivan.github.io/validator/'
		},
		{
			title: 'Material ripple effect',
			desc: 'Simple implementing the ripple effect from the Material Design',
			link: 'https://github.com/k-ivan/Material-ripple'
		},
		{
			title: 'WanderTab',
			desc: 'Inspiring start page. With weather, date, search, bookmarks, customizable services, light effects and a gallery of pictures.',
		},
		{
			title: 'Glory Modal',
			desc: 'Modal dialog plugin with multimodals support inspired by Bootstrap modal dialogs and written in pure JavaScript.',
			link: 'https://github.com/k-ivan/glory-modal'
		},
		{
			title: 'CSelect',
			desc: 'Custom select plugin allows you to replace the standard selected on their own, which can be styled as your heart desires. Default stylized standard select. Mechanic behavior as much as possible trying to match the standard selects.',
			link: 'https://github.com/Zveromag/cselect'
		}
	];

	const [worksColumn1, worksColumn2] = arraySplit2Parts(works);

	function handleScroll() {
		document.documentElement.style.setProperty(
			'--scroll-y', window.scrollY
		);
	}

	onMount(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);
	});
	onDestroy(() => {
		if (browser) {
			window.removeEventListener("scroll", handleScroll);
		}
	});
</script>

<svelte:head>
	<title>Ivan Kuzmichov - Home page</title>
</svelte:head>

<HomeHero/>
<section>
	<div class="container">
		<h2 class="text-center">Works</h2>
		<div class="works">
			<div class="works__col">
				{#each worksColumn1 as work}
					<div class="work">
						<a class="work__link" rel="external" href="{work.link}">
							{work.title}
						</a>
						<div class="work__desc">{work.desc}</div>
					</div>
				{/each}
			</div>
			<div class="works__col">
				{#each worksColumn2 as work}
					<div class="work">
						<a class="work__link" rel="external" href="{work.link}">
							{work.title}
						</a>
						<div class="work__desc">{work.desc}</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="all-works">
			<a rel="external" href="https://github.com/k-ivan?tab=repositories">See all</a>
		</div>
	</div>
</section>

<style lang="postcss">
	.works {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		grid-gap: 15px;
		margin-bottom: 40px;
	}
	@media (min-width: 480px) {
		.works {
			grid-template-columns: repeat(2, minmax(210px, 400px));
		}
	}
	.work {
		padding: 20px;
		border-radius: calc(var(--base-radius) * 2);
		box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
		&:not(:last-child) {
			margin-bottom: 15px;
		}
	}
	.work__link {
		display: inline-block;
		margin-bottom: 5px;
		font-weight: 600;
	}
	.all-works {
		text-align: center;
	}
</style>
