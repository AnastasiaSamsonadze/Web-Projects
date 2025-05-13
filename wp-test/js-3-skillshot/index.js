const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const mage = {
  x: 200,
  y: 400,
  width: 100,
  height: 100,
  img: new Image(),
};

const target = {
  x: 0,
  vx: 50,
  y: 50,
  width: 40,
  height: 60,
  rootedUntil: null,
  img: new Image(),
};

mage.img.src = "mage.png";
target.img.src = "target.png";

let mouseX = 250;
let mouseY = 400;
let projectiles = [];
let lastProjectileTime = 0;

canvas.addEventListener("mousemove", (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});

canvas.addEventListener("click", (e) => {
  const now = performance.now();
  if (now - lastProjectileTime >= 2000) {
    projectiles.push(getInitialProjectileData(e));
    lastProjectileTime = now;
  }
});

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(mage.img, mage.x, mage.y, mage.width, mage.height);
  ctx.drawImage(target.img, target.x, target.y, target.width, target.height);
  
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(250, 400);
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();

  projectiles.forEach((projectile) => {
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, projectile.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });
}

function update(dt) {
  if (!target.rootedUntil || performance.now() > target.rootedUntil) {
    target.x += target.vx * dt;
    if (target.x + target.width >= canvas.width || target.x <= 0) {
      target.vx = -target.vx;
    }
  }

  projectiles.forEach((projectile) => {
    projectile.x += projectile.vx * dt;
    projectile.y += projectile.vy * dt;

    if (checkCollision(projectile, target)) {
      console.log("Hit!");
      target.rootedUntil = performance.now() + 3000;

      projectiles = projectiles.filter((p) => p !== projectile);
    }
  });

  projectiles = projectiles.filter(
    (projectile) =>
      projectile.x + projectile.r > 0 &&
      projectile.x - projectile.r < canvas.width &&
      projectile.y + projectile.r > 0 &&
      projectile.y - projectile.r < canvas.height
  );
}

let last = performance.now();

function next() {
  const now = performance.now();
  const dt = (now - last) / 1000;
  update(dt);
  render();
  last = now;
  requestAnimationFrame(next);
}

next();

function getInitialProjectileData(e) {
  return {
    x: 250,
    y: 400,
    r: 15,
    vx:
      300 *
      Math.cos(Math.atan((400 - e.offsetY) / (250 - e.offsetX))) *
      (e.offsetX < 250 ? -1 : 1),
    vy:
      300 *
      Math.sin(Math.atan((400 - e.offsetY) / (250 - e.offsetX))) *
      (e.offsetX < 250 ? -1 : 1),
  };
}

function checkCollision(circle, rectangle) {
  const closestX = Math.max(
    rectangle.x,
    Math.min(circle.x, rectangle.x + rectangle.width)
  );
  const closestY = Math.max(
    rectangle.y,
    Math.min(circle.y, rectangle.y + rectangle.height)
  );
  const distanceX = circle.x - closestX;
  const distanceY = circle.y - closestY;
  return distanceX ** 2 + distanceY ** 2 <= circle.r ** 2;
}