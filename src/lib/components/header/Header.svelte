<script>
	import { page } from '$app/stores';

	$: isHome = $page.path === '/';
</script>

<header
	class="header"
	class:is-home="{isHome}"
>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src="/logo.svg" alt="ik logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li><a class:active="{$page.path === '/'}" sveltekit:prefetch href="/">Home</a></li>
			<!-- <li><a class:active="{$page.path === '/about'}" sveltekit:prefetch href="/about">About</a></li>
			<li><a class:active="{$page.path === '/todos'}" sveltekit:prefetch href="/todos">Todos</a></li> -->
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/k-ivan">
			<img src="/logos/github.svg" alt="Github">
		</a>
	</div>
</header>

<style lang="postcss">
	header {
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-underline-offset: 0.3em;
		transition: color 0.2s linear;
	}

	a.active,
	a:hover {
		text-decoration: underline;
	}
</style>
