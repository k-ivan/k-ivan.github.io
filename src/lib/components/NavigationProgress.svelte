<script>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { linear } from 'svelte/easing';
  import navigationState from '$lib/store/navigationState';

  export let position = 'top';
  export let duration = 300;

  const progress = tweened(0, {
    duration,
    easing: linear
  });

  const ProgressBar = {
    interval: null,
    numRandom(count = 0.1) {
      return Math.random() * count
    },
    inc(progress) {
      this.resetInterval();
      let num = 0;

      const step = function() {
        num += this.numRandom();
        if(num < 0.99) {
          progress.set(num);
        } else {
          clearInterval(this.interval);
        }
      }.bind(this);

      step();
      this.interval = setInterval(step, 500);
    },
    done(progress) {
      this.resetInterval();
      progress.set(1);
    },
    resetInterval() {
      if (this.interval) clearInterval(this.interval);
    }
  }

  const unsubscribe = navigationState.subscribe((state) => {
    if (state === 'loaded') {
      ProgressBar.done(progress);
    }
  });

  onMount(() => {
    ProgressBar.inc(progress);
  });
  onDestroy(() => {
    ProgressBar.resetInterval();
    unsubscribe();
  });
</script>

<div
  class="navigation-progress"
  class:navigation-progress--bottom="{ position === 'bottom' }"
  style="{`--progress: ${$progress}`}"
>
  <div class="navigation-progress__inner"></div>
</div>

<style lang="postcss">
.navigation-progress {
  position: fixed;
  z-index: 99999;
  top: 0px;
  right: 100%;
  width: 100%;
  height: 3px;
  will-change: transform;
  background: royalblue;
  transform: translate3d(calc(var(--progress) * 100%), 0, 0);
}
.navigation-progress--bottom {
  top: auto;
  bottom: 0;
  & .navigation-progress__inner {
    transform: rotate(-5deg) translate(0px, 5px);
  }
}
.navigation-progress__inner {
  position: absolute;
  right: 0;
  display: block;
  width: 100px;
  height: 100%;
  transform: rotate(5deg) translate(0px, -5px);
  opacity: 1;
  box-shadow: 0 0 15px royalblue, 0 0 10px 3px royalblue;
}

</style>