array_1 =["cup","paper","teddybear","ice cream"];
var timer_counter=0;
var timer_check="";
var drawn_sketch="";
var sketch="";
var answer_holder="";
var score=0;

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
} 
function updateCanvas(){
    background("white");
    random_number=Math.floor((Math.random()*array_1.length)+1);
    console.log(array_1[random_number]);
    sketch=array_1[random_number];
    document.getElementById("sketch_to_be_drawn").innerHTML="Sketch to be Drawn: "+sketch;
}
function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML="Timer: "+timer_counter;
    console.log(timer_counter);
    if (timer_counter>400){
        timer_counter=0;
        timer_check="completed";
    }
    if(timer_check=="completed"|| answer_holder=="set"){
      timer_check="";
      answer_holder="";
      updateCanvas();
    }
}
function draw(){
 check_sketch();
 if(drawn_sketch==sketch){
     answer_holder="set";
     score++;
     document.getElementById("score").innerHTML="score: "+score;

 }
}