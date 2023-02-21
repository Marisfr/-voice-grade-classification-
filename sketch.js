p5.disableFriendlyErrors = true;

var pScale = 10;
var symbols = [];

var video;
var r;
var g;
var b;
var brightness;
var gBrightness;

function setup() {
  createCanvas(870, 580);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/pScale, height/pScale);
  video.hide();

  var x = 0;
  for (var i = 0; i <= width / pScale; i++) {
   var streamSize = random(40, 90);
   var y = random(0, -100);
   var speed = random(0.1, 1);
   for (var j = 0; j <= streamSize; j++) {
     var symbol = new Symbol(x, y, speed);
     symbol.setToRandomSymbol();
     symbols.push(symbol);
     y--;
   }
   x++;
 }
 textSize(pScale);
}

function draw() {
  background(0, 230);
  video.loadPixels();
  symbols.forEach(function(symbol) {
    if (
      symbol.x * pScale > width ||
      symbol.x * pScale < 0 ||
      symbol.y * pScale > height ||
      symbol.y * pScale < 0) {
    } else {
      var index = (vide