import {
  Sprite,
  Texture,
  Rectangle
} from 'pixi.js';

export default class Particle {
  constructor(x, y, texture, size) {
    this.x = x;
    this.y = y;

    this.sprite = new Sprite(new Texture(texture));
    this.sprite.texture.frame = new Rectangle(x, y, size, size);
    this.sprite.x = x;
    this.sprite.y = y;

    this.speedX = 0;
    this.speedY = 0;
    this.radius = 70;
    this.friction = 0.9;
    this.gravity = 0.01;
    this.maxGravity = this.gravity + Math.random() * 0.03;
  }
  update(mouse) {
    const distanceX = mouse.x - this.sprite.x;
    const distanceY = mouse.y - this.sprite.y;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const normalX = distanceX / distance;
    const normalY = distanceY / distance;

    if (distance < this.radius) {
      this.gravity *= this.friction;
      this.speedX -= normalX;
      this.speedY -= normalY;
    } else {
      this.gravity += 0.1 * (this.maxGravity - this.gravity);
    }

    const oDistX = this.x - this.sprite.x;
    const oDistY = this.y - this.sprite.y;
    this.speedX += oDistX * this.gravity;
    this.speedY += oDistY * this.gravity;

    this.speedX *= this.friction;
    this.speedY *= this.friction;

    this.sprite.x += this.speedX;
    this.sprite.y += this.speedY;
  }
}