<script>
  import { onMount, onDestroy } from "svelte";

  let canvasRef = null;
  let particleInstance = null;
  let canvasLoaded = false;

  async function initCanvas() {
    const Particles = await import('$lib/plugins/particles/particles');
    if (Particles) {
      particleInstance = new Particles.default(canvasRef, '/greeting_text.png');
    }
  }

  onMount(() => {
    initCanvas();
  });
  onDestroy(() => {
    particleInstance?.destroy();
    particleInstance = null;
  })
</script>



<div class="canvas-text">
  <canvas
    bind:this="{canvasRef}"
    on:pixiload="{() => canvasLoaded = true}"
    class:shown="{canvasLoaded}"
  />
</div>

<h1 class="visually-hidden">
  Hello, my name's Ivan.<br>
  I'm a Frontend Web<br>Developer.
</h1>

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
</style>