var player, playerimg,playerimgatt, zombhea=100,zombimg,zombie,fireimg,fireball, cooldown = 0, coolin,map,mapimg,playerhea=20, kingdomimg, xp=0, newP = 0,change=0,vilimg;
var kingdom, forest, vil1, vil2, vil3, vil4, vil5, flame=0,light,zombielef,comimg, vilr1, vilr2, vilr3, vilr4, vilr5,gameState=0,health,textremover=0;
var vilrimg,trick=0,dunimg,dun1,dun2,dun3,dun4,dun5,t1=0,t2=0,t3=0,t4=0,t5=0,monsters,golem,dragon1,dragon2,h1,h2,h3,h4,h5;
var golimg, himg1,ghea,h1hea;
function preload() {
    playerimg=loadImage("ninja2.png");
    playerimgatt=loadImage("ninja.png");
    backgroundimg=loadImage("l.jpg");
    zombimg=loadImage("zombie.gif");
    fireimg=loadImage("download3.png");
    mapimg=loadImage("map.png");
    kingdomimg=loadImage("kingdom.png");
    vilimg=loadImage("village.png"); 
    zombieleft=loadImage("zombie left.webp");
    comimg=loadImage("comet.png");
    vilrimg=loadImage("villager1.png");
    dunimg=loadImage("rsz_dungeon.png");
    golimg=loadImage("golem.png");
    himg1=loadImage("download2.png");
    //406 88
}
function setup() {
    createCanvas(displayWidth,displayHeight-200);
    zombie=createSprite(1700,640,200,200);
    zombie.addImage(zombimg)
    zombie.scale=2;
    zombie.velocityX=3;
    player = createSprite(200,670,400,400);
    player.addImage(playerimg);
    player.scale=1/2;
    map=createSprite(300,300,200,200);
    kingdom=createSprite(278,130,20,20);
    kingdom.visible=false
    forest=createSprite(285,466,20,20);
    forest.visible=false
    map.addImage(mapimg);
    map.visible=false
    vil1=createSprite(467,463,20,20);
    vil1.visible=false
    vil2=createSprite(129,349,20,20);
    vil2.visible=false
    vil3=createSprite(227,389,20,20);
    vil3.visible=false
    vil4=createSprite(145,522,20,20);
    vil4.visible=false
    vil5=createSprite(406,88,20,20);
    vil5.visible=false

    vilr1=createSprite(1700,640,200,200);
    vilr1.visible=false
    vilr2=createSprite(1700,640,200,200);
    vilr2.visible=false
    vilr3=createSprite(1700,640,200,200);
    vilr3.visible=false
    vilr4=createSprite(1700,640,200,200);
    vilr4.visible=false
    vilr5=createSprite(1700,640,200,200);
    vilr5.visible=false
    vilr1.addImage(vilrimg);
    vilr2.addImage(vilrimg);
    vilr3.addImage(vilrimg);
    vilr4.addImage(vilrimg);
    vilr5.addImage(vilrimg);

    dun1=createSprite(450,145,20,20);
    dun1.visible=false
    dun2=createSprite(472,242,20,20);
    dun2.visible=false
    dun3=createSprite(338,492,20,20);
    dun3.visible=false
    dun4=createSprite(200,240,20,20);
    dun4.visible=false
    dun5=createSprite(232,219,20,20);
    dun5.visible=false
}
function draw() {
    console.log(mouseX);
    console.log(mouseY);
    console.log(monsters);
    if (player.y<670) {
    player.y = player.y + 5
    }
    coolin=cooldown;
    cooldown=cooldown+0.05;
    flame=flame+0.005;
    
    if (change===0) {
    background(backgroundimg);
    }
    if (change===1) {
        background(kingdomimg);
    }
    if (change===2) {
        background(vilimg);
    }
    if (change===3) {
        background(dunimg)
        trick=0
    }
    if (cooldown>100 && cooldown<150) {
       text("cooldown Ready",200,200);0
    }
    if (mousePressedOver(kingdom)) {
       change=1;
       trick=0;
       monsters=0;
    }
    if (mousePressedOver(forest)) {
        change=0;
        trick=0;
        monsters=0;
    }
    if (mousePressedOver(vil1) || mousePressedOver(vil2) || mousePressedOver(vil3) || mousePressedOver(vil4) || mousePressedOver(vil5)) {
        change=2;
        monsters=0;
    }
    if (mousePressedOver(dun1) || mousePressedOver(dun2) || mousePressedOver(dun3) || mousePressedOver(dun4) || mousePressedOver(dun5)) {
        change=3;
        trick=0;
    }
    if (trick===0) {
        golem.destroy();
        h1.destroy();
    }
    if (mousePressedOver(vil1)) {
        trick=1;
    }
    if (trick===1) {
        vilr1.visible=true;
    } else {
        vilr1.visible=false;
    }
    if (mousePressedOver(vil2)) {
        trick=2;
    }
    if (trick===2) {
        vilr2.visible=true;
    } else {
        vilr2.visible=false;
    }
    if (trick===3) {
        vilr3.visible=true;
    } else {
        vilr3.visible=false;
    }
    if (mousePressedOver(vil4)) {
        trick=4;
    }
    if (trick===4) {
        vilr4.visible=true;
    } else {
        vilr4.visible=false;
    }
    if (mousePressedOver(vil5)) {
        trick=5;
    }
    if (mousePressedOver(vil3)) {
        trick=3;
    }
    if (mousePressedOver(vilr1)) {
        t1=1;
    }
    if (mousePressedOver(vilr2)) {
        t2=2;
    }
    if (mousePressedOver(vilr3)) {
        t3=3;
    }
    if (mousePressedOver(vilr4)) {
        t4=4;
    }
    if (mousePressedOver(vilr5)) {
        t5=5;
    }
    if (trick===5) {
        vilr5.visible=true;
    } else {
        vilr5.visible=false;
    }
    if(zombie.x<=0){
        zombie.velocityX=zombie.velocityX*-1;
        zombie.addImage(zombieleft);
    }
    if(zombie.x>=1800){
        zombie.velocityX=zombie.velocityX*-1;
        zombie.addImage(zombimg);
    }
    if (zombie.isTouching(player)) {
        playerhea=playerhea-0.5;
    }
    if (frameCount % 50  === 0 && playerhea<=19 && playerhea>0) {
        playerhea=playerhea+1;
    }
    if(playerhea===0){
        player.x=200;
        cooldown=0;
        zombie.x=1700;
        playerhea=20;
    }
    if (keyDown("p") && xp===100) {
        newP=1;
    }
    if (keyDown("up")) {
        player.y=player.y-70
    }
    if (keyDown("right")) {
        player.x=player.x+70
    }
    if (keyDown("left")) {
        player.x=player.x-70
    }
    if (zombhea<=0 && xp===0) {
      zombie.destroy();
      xp=xp+10;
      textremover=1;
    }
    if (keyDown("m")) {
        map.visible=true
        kingdom.visible=true
        forest.visible=true
        vil1.visible=true
        vil2.visible=true
        vil3.visible=true
        vil4.visible=true
        vil5.visible=true
        if (t1===1) {
            dun1.visible=true
        }
        if (t2===2) {
            dun2.visible=true
        }
        if (t3===3) {
            dun3.visible=true
        }
        if (t4===4) {
            dun4.visible=true
        }
        if (t5===5) {
            dun5.visible=true
        }
    }
    if (keyDown("h")) {
        map.visible=false
        kingdom.visible=false
        forest.visible=false
        vil1.visible=false
        vil2.visible=false
        vil3.visible=false
        vil4.visible=false
        vil5.visible=false
        dun1.visible=false
        dun2.visible=false
        dun3.visible=false
        dun4.visible=false
        dun5.visible=false
    }

    if (mousePressedOver(dun1)) {
        monsters=1;
    }
    if (monsters===1) {
        golem=createSprite(1700,640,400,400);
        golem.addImage(golimg);
        golem.scale=3
        ghea=200;
        h1=createSprite(1300,640,200,200);
        h1.addImage(himg1);
        h1hea=130;
        text("golem hea: "+Math.round(ghea),200,100);
        text("minion hea: "+Math.round(h1hea),600,100);
    }
    if (mousePressedOver(dun2)) {
        monsters=2;
    }
    if (monsters===2) {
    }
    if (mousePressedOver(dun3)) {
        monsters=3;
    }
    if (monsters===3) {
    }
    if (mousePressedOver(dun4)) {
        monsters=4;
    }
    if (monsters===4) {
    }
    if (mousePressedOver(dun5)) {
        monsters=5;
    }
    if (monsters===5) {
    }

    if (keyDown("e") && cooldown>=100) {
      cooldown=0;
      player.addImage(playerimgatt);
      fireball = createSprite(player.x,player.y,10,10);
      fireball.addImage(fireimg);
      fireball.velocityX=10;
      gameState=1;
    }
    if (gameState===1 && fireball.isTouching(zombie)) {
        zombhea=zombhea-30;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(zombie)) {
       zombhea=zombhea-50;
       light.destroy();
    }
    if (keyWentUp("e")) { 
        player.addImage(playerimg);
    }
    if (keyWentUp("space")) {
        player.addImage(playerimg);
    }
    
    // if (keyWentUp("m")) {
    //     map.visible=false
    //     kingdom.visible=false
    //     forest.visible=false
    //     vil1.visible=false
    //     vil2.visible=false
    //     vil3.visible=false
    //     vil4.visible=false
    //     vil5.visible=false
    // }
    text("coolin: "+Math.round(coolin),100,100);
    if (textremover===0) {
    text("zomhea: "+Math.round(zombhea),200,100);
    }
    text("health: "+Math.round(playerhea),300,100);
    text("XP: "+Math.round(xp),400,100);
    if (newP===1) {
        text("charging: "+Math.round(flame),500,100);
        if (keyDown("l") && flame>=100) {
            light = createSprite(player.x,player.y,10,10);
            light.addImage(comimg);
            light.velocityX=10;
            gameState=2;
            flame=0
        }
    }
    if (keyDown("space")) {
        player.addImage(playerimgatt);
        if (player.isTouching(zombie)) {
        zombhea=zombhea-10;
        }
        if (monsters===1 && player.isTouching(h1)) {
          h1hea=h1hea-10
        }
      }
    drawSprites();
}
//function mousePressed() {
//    window.alert("Mouse Pressed!!")
//}