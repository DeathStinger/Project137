status="";
function preload() {
}
function setup() {
    canvas = createCanvas(480,380)
    canvas.center();
}
function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects"
    document.getElementById("object_input").innerHTML ="Type in an object you want to locate";
    }
    function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
       
    }
function draw() {
   image(img,0,0,480,380);
}