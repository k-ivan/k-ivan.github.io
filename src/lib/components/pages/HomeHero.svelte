<script>
  import CanvasText from "$lib/components/CanvasText.svelte";
</script>

<div class="hero">
	<div class="hero__container container">
		<div class="hero__greeting">
			<CanvasText/>
		</div>

		<div class="hero__center">
			<div class="hero__o">
				<div class="hero__orbit">
					<div class="hero__skill is-svelte"></div>
					<div class="hero__skill is-vue"></div>
					<div class="hero__skill is-php"></div>
					<div class="hero__skill is-js"></div>
					<div class="hero__skill is-html"></div>
					<div class="hero__skill is-css"></div>
					<div class="hero__skill is-webpack"></div>
					<div class="hero__skill is-sass"></div>
				</div>
			</div>
		</div>
	</div>

	 <div class="shape-divider">
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
		</svg>
	</div>
</div>

<style lang="postcss">
.hero {
  --hero-background-hsl: 213deg, 78%, 94%;
	--hero-orbit-border-size: 1px;
	--hero-orbit-border-color: rgba(0 0 0 / 10%);

  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  overflow: hidden;
  background-color: hsl(var(--hero-background-hsl));
}
@media (min-width: 480px) {
  .hero {
    padding-top: 200px;
    padding-bottom: 200px;
  }
}
.hero__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (min-width: 480px) {
  .hero__container {
    flex-direction: row;
  }
}
.hero__greeting {
  width: 100%;
  flex: 2;
}
.hero__center {
  width: 90%;
  flex: 1;
}
.hero__o {
  position: relative;
  padding-top: 100%;
}
.hero__orbit {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 50%;
  border: var(--hero-orbit-border-size) solid var(--hero-orbit-border-color);
  transform: rotate(
    calc(var(--scroll-y) * 0.3deg)
  );
  &::before {
    content: '';
    position: absolute;
    inset: 20%;
    margin: auto;
    border-radius: 50%;
    border: var(--hero-orbit-border-size) solid var(--hero-orbit-border-color);
  }
}
.hero__skill {
  position: absolute;
  display: flex;
  align-items: center;
  width: 10%;
  height: 10%;
  background-color: hsl(var(--hero-background-hsl));
  border-radius: 50%;
  box-shadow: 0 0 0 1vmin hsl(var(--hero-background-hsl));
  transform: rotate(
    calc(var(--scroll-y) * -0.5deg)
  );
  &.is-html {
    top: 15%;
    left: calc(50% - 5%);
    background-image: url('/logos/html.svg');
  }
  &.is-css {
    top: 50%;
    left: 15%;
    background-image: url('/logos/css.svg');
  }
  &.is-js {
    top: 55%;
    left: 73%;
    background-image: url('/logos/javascript.svg');
  }
  &.is-php {
    top: 15%;
    left: 5%;
    background-image: url('/logos/php.svg');
  }
  &.is-vue {
    top: 74%;
    left: 85%;
    background-image: url('/logos/vue.svg');
  }
  &.is-svelte {
    top: 93%;
    left: 55%;
    background-image: url('/logos/svelte.svg');
  }
  &.is-webpack {
    top: 15%;
    left: 85%;
    background-image: url('/logos/webpack.svg');
  }
  &.is-sass {
    top: 74%;
    left: 4%;
    background-image: url('/logos/sass.svg');
  }
}

.hero__greeting {
  position: relative;
  max-width: 1000px;
  margin: auto;
}
.shape-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  & svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;
    fill: #FFFFFF;
  }
}
</style>