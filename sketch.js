var spacebgImg
var spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var issImg
var hasdocked = false;
function preload(){
  spacebgImg = loadImage("spacebg.jpg")
  spacecraft1Img = loadImage("spacecraft1.png")
  spacecraft2Img = loadImage("spacecraft2.png")
  spacecraft3Img = loadImage("spacecraft3.png")
  spacecraft4Img = loadImage("spacecraft4.png")
  issImg = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(spacebgImg);  
  drawSprites();

}