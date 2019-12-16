/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(500, 550);
    frameRate(60);
    noCursor();
    fullscreen();

}

/**
 * Built in draw function in P5
 * This is a good place to call public funcions of the object
 * you created in the setup function above
 */
let bgColor = 'black';
let squareY = 0;

function draw() {
    background(bgColor);

    fill('red');
    rectMode(CENTER);
    rect(mouseX, squareY, 100, 50);
    
    let circle1 = new Circle(200, 50, 20, 20);
    let circle2 = new Circle(50, 300, 50, 50);
    //circle1.fill();
    //circle1.fillColor();
    circle1.draw();
    circle2.draw();
/* 
    ellipse(circleX, mouseY, 60, 60);
    circleX = circleX + 1;*/
    squareY = squareY + 1; 
}
/* 
 abstract class Color{
    
    public r: number;
    public g: number;
    public b: number;

    public constructor(){
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

     public fillColor(){
        return fill(this.r, this.g, this.b);
    }    
}  */
//still trying to solve problem with typescript and classes
class Circle{
    
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    public constructor(x: number, y: number, width:number, height:number){
        //super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //this.fillColor();
    }

     public colorRandomizer(){

        const r = random(255);
        const g = random(255);
        const b = random(255);

        return fill(r, g, b);
    }  

    public draw(){
        this.colorRandomizer();
        ellipseMode(CENTER);
        return ellipse(this.x, this.y, this.width, this.height);
    }  
}


function mousePressed(){
    if (bgColor === 'black'){
        bgColor = 'blue';
    }

    else{
        bgColor = 'black';
    }
    
}
/* class Bubble{
    private radius: number;
} */

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


