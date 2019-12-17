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
    //circle1.fill();
    //circle1.fillColor();
    bubble1.show();
    bubble2.show();
    rectangle1.move();
    rectangle1.show();
    //rectangle1.move();
/* 
    ellipse(circleX, mouseY, 60, 60);
    circleX = circleX + 1;*/


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
            squareSpeed = -1
        }
        
        if (squareY < 0){
            squareSpeed = + 1
        }   
        squareY = squareY + squareSpeed;
    }


    public show(){
        rectMode(CENTER);
        fill('red');
        console.log(this.y);  
        return rect(this.x, this.y, this.width, this.height);
         
    }
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
class Bubble{
    
    public x: any;
    public y: any;
    public radius: number;

    public constructor(x: any, y: any, radius:number){
        //super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        //this.fillColor();
    }

/*      public colorRandomizer(){

        const r = random(255);
        const g = random(255);
        const b = random(255);

        return fill(r, g, b);
    }  */ 

/*     public setRandomizedColor(){
        randomSeed(99)
        for (let i = 0; i < 100; i++){
            let r:number = random(0,255);
            let g:number = random(0,255);
            let b:number = random(0,255);
            return fill(r,g,b);
        }
    } */

/*      public randomizeColorBubbles(){
        let colorOfBubbles = ["pink" , "skyblue" , "lightgreen"];
        return random(colorOfBubbles);
    } */ 

    public show(){
        //fill(this.randomizeColorBubbles());
        //this.setRandomizedColor();
        //this.colorRandomizer();
        //fill(this.randomizeColorBubbles());
        
         noStroke()
        if(mouseX<300){
            fill('pink')
        }
        else{
            fill('lightgreen');
        } 
        ellipseMode(CENTER);
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
/* class Bubble{
    private radius: number;
} */

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


