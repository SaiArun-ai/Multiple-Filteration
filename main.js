var MORL;
function preload(){
    Moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    Lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(620,325);
    video = createCapture(VIDEO);
    video.size(440,400);
    video.hide();
    //Posenet
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,440,400);
    if(MORL == "Lipstick"){
        image(Lipstick,NoseX ,NoseY+20,40,40);
    }else if (MORL == "Moustache"){
        image(Moustache,NoseX - 25,NoseY - 5,40,40);
    }    
}
var NoseX;
var NoseY;
var lEyeX;
var lEyeY;
var rEyeX;
var rEyeY;
function Select(){
    if(document.getElementById("AorB").value  == "A"){
        MORL = "Lipstick";        
        document.getElementById("Filter").style = "display:contents;";
        document.getElementById("Interact").style = "display:none;";
    }else if(document.getElementById("AorB").value  == "B"){
        MORL = "Moustache";
        document.getElementById("Filter").style = "display:contents;";
        document.getElementById("Interact").style = "display:none;";
    }else{
        document.getElementById("Error").innerHTML = "Type A or B in capital letters(A for lipstick and B for moustache)";
        document.getElementById("Error").style = "color:red;";
    }
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        lEyeX = results[0].pose.leftEye.x;
        lEyeY = results[0].pose.leftEye.y;
        rEyeX = results[0].pose.rightEye.x;
        rEyeY = results[0].pose.rightEye.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        console.log("leftEyeX = " + results[0].pose.leftEye.x);
        console.log("leftEyeY = " + results[0].pose.leftEye.y);
    }
}
function Back(){
    MORL = "";
    document.getElementById("Filter").style = "display:none;";
        document.getElementById("Interact").style = "display:contents;";
}
function modelLoaded(){
    console.log("Loaded");
}
function TakeSnapshot(){
    save("FilteredImage.png");
}

