function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(440,400);
    video.hide();
    //Posenet
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,440,400);
}
var NoseX;
var NoseY;
var lEyeX;
var lEyeY;
var rEyeX;
var rEyeY;
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
function modelLoaded(){
    console.log("Loaded");
}
function TakeSnapshot(){
    save("FilteredImage.png");
}

