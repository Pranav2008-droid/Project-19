var cam;
var redoffset = 0.0;
var greenoffset = 0.01;
var blueoffset = 0.02;
function setup(){
    createCanvas(windowWidth, windowHeight)
    cam = createCapture(VIDEO)
    cam.hide();
}

function draw(){
    image(cam,0,0,width,height);
    tint(noise(redoffset) * 255, noise(blueoffset) * 255, noise(greenoffset) * 255);
    //increase the offsets
    redoffset += 0.01;
    greenoffset += 0.03;
    blueoffset += 0.03;
    if (mouseIsPressed){drawMovedSprites();}else{drawIdleSprites();}
}
function drawIdleSprites(){
    fill(0, 255, 0, 255);
       //draw the body
       rect(150, 122, 100, 200);
       //draw the head
       ellipse(200, 72.5, 100);
       //make the stroke weight high
       strokeWeight(5);
       //draw the line from left shoulders to left elbow
       line(150, 122, 120, 200);
       //draw the line from left elbow to left wrist
       line(120, 200, 115, 275);
       //draw the left wrist
       circle(115, 275 - 20 /2, 20)
       //draw the line from right shoulder to right elbow
       line(250,122,250 + 30, 122 / 0.61);
       //draw the line from right elbow to right wrist
       line(250 + 30, 122 / 0.61, 250 + 30 - 5, 122 / 0.61 + 75);
       //draw the right wrist
       circle( 250 + 30 - 5,  122 / 0.61 + 75 - 20 /2, 20);
       //draw the left leg
       line(150, 122 + 200, 150, + 122 + 200 + 150);
       //draw the right leg
       line(150 + 100, 122 + 200, 150 + 100, + 122 + 200 + 150);
       //draw the right ankle
       ellipse( 150 + 100,  + 122 + 200 + 150 , 40, 20);
       //draw the left ankles
       ellipse(150, 122 + 200 + 150 , 40, 20);
       //draw eyes
       ellipse(175, 60, 10, 10);
       ellipse(225, 60, 10, 10);
}

function drawMovedSprites(){
    fill(noise(redoffset) * 255, noise(blueoffset) * 255, noise(greenoffset) * 255);

           //draw the body
           rect(150, 122, 100, 200);
           //draw the head
           ellipse(200, 72.5, 100);
           //make the stroke weight high
           strokeWeight(5);
           //draw the line from left shoulders to left elbow
           line(150, 122, 75, 122);
           //draw the line from left elbow to left wrist
           line(75, 122, 75, 50);
           //draw the left wrist
           circle(75, 50 - 20 /2, 20)
           //draw the line from right shoulder to right elbow
           line(250,122,250 + 30, 122 / 0.61);
           //draw the line from right elbow to right wrist
           line(250 + 30, 122 / 0.61, 250 + 30 - 5, 122 / 0.61 + 75);
           //draw the right wrist
           circle( 250 + 30 - 5,  122 / 0.61 + 75 - 20 /2, 20);
           //draw the left leg
           line(150, 122 + 200, 150, + 122 + 200 + 150);
           //draw the right leg
           line(150 + 100, 122 + 200, 150 + 100, + 122 + 200 + 150);
           //draw the right ankle
           ellipse( 150 + 100,  + 122 + 200 + 150 , 40, 20);
           //draw the left ankles
           ellipse(150, 122 + 200 + 150 , 40, 20);
           //draw the text
           text("hello My name is Twigleg \n I am a robot created by my master \nPranav Ramesh \n whatever your name is!!",400,50);

       //draw eyes
       ellipse(175, 60, 10, 10);
       ellipse(225, 60, 10, 10);
           
}