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
let bgColor:any = 'black';
let squareY:number = 0;
let squareSpeed:number = 1

function draw() {
    background(bgColor);

    let bubble1 = new Bubble(mouseX, mouseY, 100);
    let bubble2 = new Bubble(50, 300, 50);
    let rectangle1 = new Rectangle(mouseX, squareY, 100,50);

    bubble1.show();
    bubble2.show();
    rectangle1.show(mouseX, "red");
    rectangle1.show(200, "white");
}

class Rectangle{
    public x:any;
    public y:number;
    public width: number;
    public height: number;

    public constructor(x:any, y:number, width:number, height:number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public move(){
  
        if (squareY > 550){
            squareSpeed = -3
        }
        
        if (squareY < 0){
            squareSpeed = + 3
        } 
          
        squareY = squareY + squareSpeed;
    }


    public show(x:any, color:string){
        rectMode(CENTER);
        fill(color);
        this.move();
        return rect(x, this.y, this.width, this.height);
         
    }
}

//still trying to solve problem with typescript and classes
class Bubble{
    
    public x: any;
    public y: any;
    public radius: number;

    public constructor(x: any, y: any, radius:number){

        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    //making my bubbles 
    public move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-10, 10);
    }

    public show(){
        
         noStroke()
        if(mouseX<300){
            fill('pink')
        }
        else{
            fill('lightgreen');
        } 

        ellipseMode(CENTER);
/*         while(this.x<550){
            circle(this.x, this.y, this.radius);
            this.x + 50;
            break;
        } */

        this.move();
        return circle(this.x, this.y, this.radius);
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

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


