// Kiko(Qi Chen)
//Feeling Lazy Today?
//02.12.2020
//a poser generator that makes the poster for you just by inputing a text
//using deepai API https://deepai.org/machine-learning-model/text2img




//setting up the API

deepai.setApiKey('a3e18daf-f66b-49c4-867e-ad3c529d1fc8');
async function getImage(textInput) {
    var resp = await deepai.callStandardApi("text2img", {
            text: textInput,
    });
   
   return resp.output_url;      
}

var myText; //input text

var inputLength = 200;
var inputX = 10 ; //x postiton of input
var inputY = 100//y postiton of input;



var img, imgX, imgY;

var mode = 0;


async function setup(){
    // set up canvas
    var canvas = createCanvas(360,500);
     // Move the canvas so it’s inside our <div id="canvasDiv">.
    canvas.parent('canvasDiv');
    background(250);
 
    

  

    var myText = document.getElementById("input").value;
    
  
    
    // image postion
    imgX = 0;
    imgY = 0;

}

function draw(){
   //background(255);
//    if (img && myText) makePoster();
    
}




function displayImage() {
    mode = 0;
    //image(img, inputX + inputLength+20,inputY,500, 500,inputX + inputLength + 20,inputY,500,500 );
    style0();
    mode++;
}

async function getImageForInput() {
    //background(255);
    fill(20);
    text("Loading", width/2-8, height/2);
    
    myText = document.getElementById("input").value;
    var image_url = await getImage(myText);
    img = loadImage(image_url, displayImage);
     
  
}

function style0() {
    image(img,imgX,imgY,360,500 );  
    //style the text
    fill(255);
    textSize(80);
    //rectMode(CORNER);
    //textWidth(360);
    textAlign(LEFT,BASELINE);
    textStyle(BOLD);

    text(myText, imgX, imgY,360);
    // caption
    textSize(14);
    textAlign(LEFT,TOP);
    text("Made by you and A.I.", imgX, imgY+470);
    
}

function shuffleStyle(){
    background(255);
    switch(mode) {
        case 0:
            style0();
            break;
        case 1:
            style1();
            break;
        case 2:
            style2();
            break;
    }
    
    mode++;
    if ( mode > 2) {
        mode=0
    }
  
    
}

function style1(){
    image(img,imgX,imgY,360,500 );
    //style the text
    
    for (let i = 0; i < 16; i++) {
   push();
    fill(255);
    textSize(50);
    textAlign(LEFT,BASELINE);
    textStyle(NORMAL);
    translate(random(imgX-100,imgX+360), random(imgY-200,imgY+500));
    rotate(random(0,PI/4));
    text(myText, 0, 0,360);
   pop(); 
  
  }
    
    // caption
    textSize(14);
    fill(255,0,0);
    textAlign(LEFT,TOP);
    text("Made by you and A.I", imgX, imgY+470);
    
}

function style2(){
    image(img,imgX,imgY,360,500 );  
    //style the text
    fill(0,255,0);
    textSize(60);
    //rectMode(CORNER);
    //textWidth(360);
    textAlign(CENTER,CENTER);
    textStyle(BOLD);
  
    text(myText, imgX+360/2-15, imgY+100,50);
    // caption
    textSize(14);
    textAlign(LEFT,TOP);
    text("Made you you and A.I.", imgX, imgY+470);
    
}

function savePoster(){
    save(myText);
}
 

 
