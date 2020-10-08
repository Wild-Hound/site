var app;

function initPixi() {
  app = new PIXI.Application({
    width: document.getElementById("can").offsetWidth,
    height: document.getElementById("can").offsetHeight,
  });
  var image = new PIXI.Sprite.from("../images/back.jfif");
  image.width = window.innerWidth;
  image.height = window.innerHeight;
  app.stage.addChild(image);

  displacementSprite = new PIXI.Sprite.from("../images/sprite.jpg");
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];
  document.getElementById("can").appendChild(app.view);

  animate();

  window.addEventListener("resize", function () {
    var x = document.querySelectorAll("canvas");
    x[1].setAttribute("width", document.getElementById("can").offsetWidth);
    x[1].setAttribute("height", document.getElementById("can").offsetHeight);
    image.width = document.getElementById("can").offsetWidth;
    image.height = document.getElementById("can").offsetHeight;
  });
}

function animate() {
  displacementSprite.x += 3;
  displacementSprite.y += 3;
  requestAnimationFrame(animate);
}

initPixi();
