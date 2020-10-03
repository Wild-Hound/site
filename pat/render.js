var app;

function initPixi() {
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  var image = new PIXI.Sprite.from("Capture.jpg");
  image.width = window.innerWidth;
  image.height = window.innerHeight;
  app.stage.addChild(image);

  displacementSprite = new PIXI.Sprite.from("sprite.jpg");
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];
  document.body.appendChild(app.view);
  animate();
}

function animate() {
  displacementSprite.x += 8;
  displacementSprite.y += 3;
  requestAnimationFrame(animate);
}

initPixi();
