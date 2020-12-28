const MyEngine = Matter.Engine;
const MyWorld= Matter.World;
const MyBodies = Matter.Bodies;
const MyBody=Matter.Body;
const Constraint = Matter.Constraint;

var score=0;

function preload(){

}

function setup(){
    createCanvas(1500,800);

    engine = MyEngine.create();
    world = engine.world;

    // OBJECTS
    cube11=[];
    for(var i = 900 ; i < 1300 ; i += 63){
        cube11.push(new ObjectClass(i,535,50,60));
    }

    cube12=[];
    for(var j = 935 ; j < 1300 ; j += 63){
        cube12.push(new ObjectClass(j,465,50,60));
    }

    cube13=[];
    for(var k = 965 ; k < 1250 ; k += 63){
        cube13.push(new ObjectClass(k,395,50,60));
    }

    cube14=[];
    for(var l = 995 ; l < 1200 ; l += 63){
        cube14.push(new ObjectClass(l,325,50,60));
    }

    cube15=[];
    for(var m = 1025 ; m < 1200 ; m += 63){
        cube15.push(new ObjectClass(m,255,50,60));
    }

    cube16=[];
    for(var n = 1055 ; n < 1150 ; n += 63){
        cube16.push(new ObjectClass(n,185,50,60));
    }

    cube17=[];
    for(var o = 1085 ; o < 1100 ; o += 63){
        cube17.push(new ObjectClass(o,115,50,60));
    }

    //GROUND
    ground = new Ground(1085,580,500,10);
    floor = new Ground(width/2,750,width,100);
    lSide = new Ground(width+25,height/2,50,height);
    rSide = new Ground(-25,height/2,50,height)
    uSide = new Ground(width/2,-25,width,50)

    //STRIKER
    striker = new Striker(300,300,80);

    string = new Line( striker.body, {x : 300 , y : 300});

    // color = (random(0,255),random(0,255) , random(0,255))

}

function draw(){
    background(random(0,255),random(0,255) , random(0,255));
    // background(100);
    MyEngine.update(engine);

    noStroke();
    textSize(35)
    fill(random(0,255),random(0,255) , random(0,255));
    // fill("black");
    text("Score : " + score, width - 300, 50)

    keyPressed();

    getBackgroundImg();

    //DISPLAY CUBES
    for (var i = 0 ; i < cube11.length ; i++){
        cube11[i].display();
        cube11[i].score();
    }

    for (var j = 0 ; j < cube12.length ; j++){
        cube12[j].display();
        cube12[j].score();
    }

    for (var k = 0 ; k < cube13.length ; k++){
        cube13[k].display();
        cube13[k].score();
    }

    for (var l = 0 ; l < cube14.length ; l++){
        cube14[l].display();
        cube14[l].score();
    }

    for (var m = 0 ; m < cube15.length ; m++){
        cube15[m].display();
        cube15[m].score();
    }

    for (var n = 0 ; n < cube16.length ; n++){
        cube16[n].display();
        cube16[n].score();
    }

    for (var o = 0 ; o < cube17.length ; o++){
        cube17[o].display();
        cube17[o].score();
    }

    //DISPLAY GROUND
    ground.display();

    floor.display();

    //DISPLAY STRIKER
    striker.display();

    //DISPLAY LINE
    string.display();

}

function mouseDragged(){
    Matter.Body.setPosition(striker.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
    string.fly();
}

function keyPressed(){
    if(keyWentDown("SPACE")){
        MyBody.setPosition(striker.body,{ x : 300 , y : 300});
        string.attach(striker.body);
        MyBody.setAngle(striker.body , 0);
        MyBody.setAngularVelocity(striker.body , 0)
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    // console.log(hour);

    if(hour>=06 && hour<=19){
        // background("red");
        console.log("Working");
    }
    else{
       
    }
}
