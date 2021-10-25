<script>
  import { browser } from '$app/env';
  import { isMobile } from '$lib/utils';
  import { onMount, onDestroy } from "svelte";

  let canvasRef = null;
  let particleInstance = null;
  let canvasLoaded = false;

  async function initCanvas() {
    const Particles = await import('$lib/plugins/particles/particles');
    if (Particles) {
      particleInstance = new Particles.default(canvasRef, '/text1.png');
    }
  }

  onMount(() => {
    !isMobile() && initCanvas();
  });
  onDestroy(() => {
    particleInstance?.destroy();
    particleInstance = null;
  })
</script>


{#if browser && !isMobile()}
  <div class="canvas-text">
    <canvas
      bind:this="{canvasRef}"
      on:pixiload="{() => canvasLoaded = true}"
      class:shown="{canvasLoaded}"
    />
  </div>
{/if}
<!-- <h1 class="canvas-title">
  Hello, my name's Ivan.<br>
  I'm a Frontend Web Developer.
</h1> -->

<style lang="postcss">
  .canvas-text {
    position: relative;
    height: auto;
    padding-top: 44%;
    & canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.shown {
        opacity: 1;
      }
    }
  }
  .canvas-title {
    font-size: 4.51vmin;
    font-weight: 900;
    margin: 20vmin auto;
    line-height: 1.25;
    text-align: center;
    /* visibility: hidden; */
    /* animation: fadeIn 2s ease .3s forwards; */
  }
</style>