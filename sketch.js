// Kiko(Qi Chen)
//Feeling Lazy Today?
//02.12.2020
//a poser generator that makes the poster for you just by inputing a text
//using deepai API https://deepai.org/machine-learning-model/text2img

//PImage to_save = get( 20, 30, 100, 200 ); // Grab an image of a 100x200 rectangle at (20,30).
//to_save.save("saved_name.png");


//setting up the API
deepai.setApiKey('a3e18daf-f66b-49c4-867e-ad3c529d1fc8');
async function getImage(textInput) {
    var resp = await deepai.callStandardApi("text2img", {
            text: textInput,
    });
   
   return resp.output_url;      
}

var myText; //input text
var input;
var inputLength = 200;
var inputX = 10 ; //x postiton of input
var inputY = 100//y postiton of input;

var button;
var shuffleButton;

var img, imgX, imgY;

var mode = 0;
var saveImage;


async function setup(){
    // set up canvas
    createCanvas(1000,850);
    background(255);
    //intro
    push();
     fill(0);
     textSize(30);
     textStyle(BOLD);
     textAlign(LEFT,TOP);
     text("Feeling Lazy Today? \nJust type something and let your AI friend do the rest",10,10);
     textSize(12);
     fill(10);
     textStyle(NORMAL);
     text("This website allows you to make a poster just by inputing some text, with the help of AI generated pictures, using DeepAI API.\n\nProject by Kiko Chen \nSpecial thanks to Igor Davydychev & Eevi Rutanen",10,700,200);
    pop();
    

    // text input
    input = createInput("what's in your mind?");
    input.position(inputX,inputY);
    input.size(inputLength);
    
    // button
    button = createButton("make a poster");
    button.position(10,inputY+30);
    button.mousePressed(getImageForInput);
    // shuffle button
    shuffleButton = createButton("shuffle style");
    shuffleButton.position(10,inputY+60);
    shuffleButton.mousePressed(shuffleStyle);
    
    // image postion
    imgX = inputX + inputLength + 20;
    imgY = inputY;

   
    
    //save
    saveImage = createGraphics(360,500);
}

function draw(){
   //background(255);
//    if (img && myText) makePoster();
    
}

function savePicture(){
   
        var p = get(imgX, imgY, 360, 500);
        saveImage.image(p,0,0);
        save(saveImage, myText+".png");
    
}


function displayImage() {
    mode = 0;
    //image(img, inputX + inputLength+20,inputY,500, 500,inputX + inputLength + 20,inputY,500,500 );
    style0();
    mode++;
}

async function getImageForInput() {
    //background(255);
    fill(0);
    text("Loading", imgX, imgY+10);
    var inputValue = input.value();
    myText = inputValue;
    var image_url = await getImage(myText);
    img = loadImage(image_url, displayImage);
     
    // download button
    button = createButton("download");
    button.position(imgX,imgY+500+10);
    button.mousePressed(savePicture);
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
    text("Made by you and AI", imgX, imgY+470);
    
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
    //intro
    push();
     fill(0);
     textSize(30);
     textStyle(BOLD);
     textAlign(LEFT,TOP);
     text("Feeling Lazy Today? \nJust type something and let your AI friend do the rest",10,10);
     textSize(12);
     fill(10);
     textStyle(NORMAL);
     text("This website allows you to make a poster just by inputing some text, with the help of AI generated pictures, using DeepAI API.\n\nProject by Kiko Chen \nSpecial thanks to Igor Davydychev & Eevi Rutanen",10,700,200);
    pop();
    
}

function style1(){
    image(img,imgX,imgY,360,500 );
    //style the text
    
    for (let i = 0; i < 16; i++) {
   push();
    fill(255);
    textSize(60);
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
    text("Made by you and AI", imgX, imgY+470);
    
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
    text("Made by you and AI", imgX, imgY+470);
    
}
 

 