let posX
let posY

let diameter = 150

let imgThink, imgYes, currentImg

let tx = 0
let ty = 1000

function preload(){
    imgThink = loadImage("think.png")
    imgYes = loadImage("yes.png")
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER)

  colorMode(HSB, width, 100, 100)
  posX = width/2
  posY = height/2


  noStroke()

  currentImg = imgThink

}

function draw() {

  background(220)
  circle(posX, posY, diameter)
  let velX = map(noise(tx), 0, 1, -3, 3)
  let velY = map(noise(ty), 0, 1, -3, 3)
  tx += 0.01
  ty += 0.01

  posX += velX
  posY += velY

  posX = constrain(posX, diameter/2, width - diameter/2)
  posY = constrain(posY, diameter/2, height - diameter/2)

  



 fill(posX, 100, 100)

 image(currentImg, posX, posY, diameter, diameter)

 
}

