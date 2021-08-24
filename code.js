var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["24363d6b-734b-4249-877a-be22f63d1c16"],"propsByKey":{"24363d6b-734b-4249-877a-be22f63d1c16":{"name":"bowlingball_1","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"kNu9n6Wypw77GAtmUcFk._03x8oyEflC","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/24363d6b-734b-4249-877a-be22f63d1c16.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;

var ball = createSprite(80,120,20,20);
ball.shapeColor="red";


var boundary1 = createSprite(50, 200, 5, 200);
var boundary2 = createSprite(85, 100, 70, 5);
var boundary3 = createSprite(120, 182, 5, 170);
var boundary4 = createSprite(120, 300, 140, 5);
var boundary5 = createSprite(135, 265, 30, 5);
var boundary6 = createSprite(150, 205, 5, 125);
var boundary7 = createSprite(190, 280, 5, 40);
var boundary8 = createSprite(263, 260, 150, 5);
var boundary9 = createSprite(230, 140, 170, 5);
var boundary10 = createSprite(315, 119, 5, 40);
var boundary11 = createSprite(340, 200, 5, 120);
var boundary12 = createSprite(355, 140, 30, 5);
var boundary13 = createSprite(370, 220, 5, 160);
var boundary14 = createSprite(385, 300, 30, 5);
var boundary15 = createSprite(395, 200, 5, 200);
var boundary16 = createSprite(355, 100, 90,5);
boundary15.shapeColor="red";

//create enemy for game
var enemy1 = createSprite(170,160,20,20);
enemy1.setAnimation("bowlingball_1");
var enemy2 = createSprite(320,190,20,20);
enemy2.setAnimation("bowlingball_1");
var enemy3 = createSprite(170,220,20,20);
enemy3.setAnimation("bowlingball_1");
var enemy4 = createSprite(320,250,20,20);
enemy4.setAnimation("bowlingball_1");

enemy1.velocityX=5;
enemy2.velocityX=5;
enemy3.velocityX=5;
enemy4.velocityX=5;



function draw() {
  background("white");
  textSize(20);
  text("Lives : "+life,210,40);
  fill("blue");
  rect(50,100,70,200);
  fill("yellow");
  rect(370,100,30,200);
  
  if(ball.isTouching(enemy1)|| ball.isTouching(enemy2)||ball.isTouching(enemy3)||ball.isTouching(enemy4)){
playSound("assets/category_alerts/playful_quirky_positive_game_cue_1.mp3")
 life=life +1;
 ball.x=80;
 ball.y=120;


  }
  
  if(ball.isTouching(boundary15)||ball.isTouching(boundary16)){
    
    textSize(20);
    fill("red");
    text("You Win",200,200);
    playSound("assets/category_achievements/lighthearted_bonus_objective_2.mp3");
    enemy1.velocityX=0;
    enemy2.velocityX=0;
    enemy3.velocityX=0;
    enemy4.velocityX=0;

  }
  
  if(ball.isTouching(enemy1)||ball.isTouching(enemy2)|| ball.isTouching(enemy3)|| ball.isTouching(enemy4))
  
  
  __
  if(keyDown("UP_ARROW")){
    ball.y=ball.y-5 ;
  }
  
    if(keyDown("DOWN_ARROW")){
    ball.y=ball.y+5 ;
  }
  
    if(keyDown("LEFT_ARROW")){
    ball.x=ball.x-5 ;
  }
  
    if(keyDown("RIGHT_ARROW")){
    ball.x=ball.x+5 ;
  }
  
  ball.bounceOff(boundary1)||ball.bounceOff(boundary2)||ball.bounceOff(boundary3)||ball.bounceOff(boundary4)||ball.bounceOff(boundary5)||ball.bounceOff(boundary6)||ball.bounceOff(boundary7)||ball.bounceOff(boundary8)||ball.bounceOff(boundary9)||ball.bounceOff(boundary10)||ball.bounceOff(boundary11)||ball.bounceOff(boundary12)||ball.bounceOff(boundary13)||ball.bounceOff(boundary14)||ball.bounceOff(boundary15)||ball.bounceOff(boundary16);
  enemy1.bounceOff(boundary1)||enemy1.bounceOff(boundary2)||enemy1.bounceOff(boundary3)||enemy1.bounceOff(boundary4)||enemy1.bounceOff(boundary5)||enemy1.bounceOff(boundary6)||enemy1.bounceOff(boundary7)||enemy1.bounceOff(boundary8)||enemy1.bounceOff(boundary9)||enemy1.bounceOff(boundary10)||enemy1.bounceOff(boundary11)||enemy1.bounceOff(boundary12)||enemy1.bounceOff(boundary13)||enemy1.bounceOff(boundary14)||enemy1.bounceOff(boundary15)||enemy1.bounceOff(boundary16);
  enemy2.bounceOff(boundary1)||enemy2.bounceOff(boundary2)||enemy2.bounceOff(boundary3)||enemy2.bounceOff(boundary4)||enemy2.bounceOff(boundary5)||enemy2.bounceOff(boundary6)||enemy2.bounceOff(boundary7)||enemy2.bounceOff(boundary8)||enemy2.bounceOff(boundary9)||enemy2.bounceOff(boundary10)||enemy2.bounceOff(boundary11)||enemy2.bounceOff(boundary12)||enemy2.bounceOff(boundary13)||enemy2.bounceOff(boundary14)||enemy2.bounceOff(boundary15)||enemy2.bounceOff(boundary16);
  enemy3.bounceOff(boundary1)||enemy3.bounceOff(boundary2)||enemy3.bounceOff(boundary3)||enemy3.bounceOff(boundary4)||enemy3.bounceOff(boundary5)||enemy3.bounceOff(boundary6)||enemy3.bounceOff(boundary7)||enemy3.bounceOff(boundary8)||enemy3.bounceOff(boundary9)||enemy3.bounceOff(boundary10)||enemy3.bounceOff(boundary11)||enemy3.bounceOff(boundary12)||enemy3.bounceOff(boundary13)||enemy3.bounceOff(boundary14)||enemy3.bounceOff(boundary15)||enemy3.bounceOff(boundary16);
  enemy4.bounceOff(boundary1)||enemy4.bounceOff(boundary2)||enemy4.bounceOff(boundary3)||enemy4.bounceOff(boundary4)||enemy4.bounceOff(boundary5)||enemy4.bounceOff(boundary6)||enemy4.bounceOff(boundary7)||enemy4.bounceOff(boundary8)||enemy4.bounceOff(boundary9)||enemy4.bounceOff(boundary10)||enemy4.bounceOff(boundary11)||enemy4.bounceOff(boundary12)||enemy4.bounceOff(boundary13)||enemy4.bounceOff(boundary14)||enemy4.bounceOff(boundary15)||enemy4.bounceOff(boundary16);

  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
