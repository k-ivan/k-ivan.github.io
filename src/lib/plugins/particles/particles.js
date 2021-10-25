import './pixiSSR.js';
import {
  Renderer,
  Loader,
  Ticker,
  ParticleContainer
} from 'pixi.js';
import Particle from './particle.js';

export default class Particles {
  constructor(canvas, imagePath, options) {
    this.canvas = canvas;
    this.imagePath = imagePath;
    this.options = Object.assign({}, {
      backgroundAlpha: 0,
      particleSize: 2,
      crossOrigin: false
    }, options);

    this.renderer = new Renderer({
      width: 1117,
      height: 492,
      backgroundAlpha: this.options.backgroundAlpha,
      view: this.canvas
    });

    this.particles = [];
    this.cols = 0;
    this.rows = 0;

    this.addObjects();
  }
  createHiddenCanvas(image, width, height) {
    this.hiddenCanvas = document.createElement('canvas');
    this.hiddenCanvasCtx = this.hiddenCanvas.getContext('2d');
    this.hiddenCanvas.style.cssText = `
      position:absolute;
      z-index: -1;
      left: -9999px;
      top: -9999px;
      opacity: 0;
      visibility: hidden;
    `;
    this.hiddenCanvas.width = width;
    this.hiddenCanvas.height = height;
    document.body.append(this.hiddenCanvas);
    this.hiddenCanvasCtx.drawImage(image, 0, 0);
    this.hiddenImageData = this.hiddenCanvasCtx.getImageData(0, 0, width, height);

    this.data = []
  }
  hasTransparentPixels(x, y, size) {
    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        var pixelIndex = ((x + i) + (y + i) * this.hiddenImageData.width) * 4;
        var alpha = this.hiddenImageData.data[pixelIndex + 3];
        if (alpha > 0) return true;
      }
    }
    return false;
  }
  addObjects() {
    new Loader().add('image', this.imagePath, {
      crossOrigin: this.options.crossOrigin
    }).load((loader, resource) => {
      if (!this.renderer) return;

      this.canvas.dispatchEvent(new CustomEvent('pixiload'));

      const { naturalWidth, naturalHeight } = resource.image.data;
      this.cols = Math.floor(naturalWidth / this.options.particleSize);
      this.rows = Math.floor(naturalHeight / this.options.particleSize);
      this.container = new ParticleContainer(this.cols * this.rows);

      this.createHiddenCanvas(resource.image.data, naturalWidth, naturalHeight);

      for(let i = 0; i < this.cols; i++) {
        for(let j = 0; j < this.rows; j++) {
          const x = i * this.options.particleSize;
          const y = j * this.options.particleSize;

          if (this.hasTransparentPixels(x, y, this.options.particleSize)) {
            const p = new Particle(
              x,
              y,
              resource.image.texture,
              this.options.particleSize
            );
            this.particles.push(p);
            this.container.addChild(p.sprite)
          }

        }
      }

      this.ticker = new Ticker()
      this.ticker
        .add(() => this.animate())
        .start();
    });
  }
  animate() {
    this.renderer.render(this.container);
    this.mouse = this.renderer.plugins.interaction.mouse.global;
    this.particles.forEach(p => {
      p.update(this.mouse);
    })
  }
  destroy() {
    this.hiddenCanvas?.remove();
    if (this.ticker) {
      this.ticker.stop()
      this.ticker.destroy();
    }
    this.container?.destroy();
    this.renderer?.destroy();
    this.particles.length = 0;
    Object.keys(this).forEach(property => {
      delete this[property];
    })
  }
}