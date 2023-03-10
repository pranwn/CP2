var bg 
var ropeImg, headImg, arm1Img, arm2Img, leg1Img, leg2Img,shirtImg,spacesImg
var aImg, pImg,p2Img, lImg, eImg
var rope, head,arm1, arm2, leg1, leg2, shirt, spaces
var a,p,p2,l,e
var aButton,bButton,cButton,dButton,eButton,fButton,gButton,hButton,iButton
var jButton,kButton,lButton,mButton,nButton,oButton,pButton,qButton,rButton
var sButton,tButton,uButton,vButton,wButton,xButton,yButton,zButton
var chance = 0; 
// secret word: apple
// hints: at the top of screen using html button
//      - it is a fruit
//      - what keeps the doctor away if you eat one a day 
// create html buttons inplace of the letters 
//have all sprites in place and use if statements to make them apprear if guessed 
// wrong(1. rope, 2. head, 3. shirt, 4. arm1, 5. arm2, 6.leg1 , 7.leg2) 
//or correct word(show the letters that they guessed right(a,p,l,e))
//at the end show sweet alert saying whether you lost all 7 of your chances and lost
//or you found the word and won(create variable chances)
//maybe add music

function preload(){
    bg = loadImage("bg2.png")
    ropeImg = loadImage("rope.png")
    headImg = loadImage("head.png")
    arm1Img = loadImage("arm1.png")
    arm2Img = loadImage("arm2.png")
    leg1Img = loadImage("leg1.png")
    leg2Img = loadImage("leg2.png")
    shirtImg = loadImage("shirt.png")
    alphabetImg = loadImage("alphabet.png")
    spacesImg = loadImage("spaces.png")
    aImg = loadImage("a.png")
    pImg = loadImage("p.png")
    p2Img = loadImage("p2.png")
    lImg = loadImage("l.png")
    eImg = loadImage("e.png")
}

function setup(){
    createCanvas(1430,700)
    rope = createSprite(160,210)
    rope.addImage("rope", ropeImg)
    rope.scale = 0.3

    head = createSprite(160,240)
    head.addImage("head", headImg)
    head.scale = 0.2
    head.visible = false;

    arm1 = createSprite(85,350)
    arm1.addImage("arm1", arm1Img)
    arm1.scale = 0.15
    arm1.visible = false;

    shirt = createSprite(160,340)
    shirt.addImage("shirt", shirtImg)
    shirt.scale = 0.25
    shirt.visible = false;

    arm2 = createSprite(210,355)
    arm2.addImage("arm2", arm2Img)
    arm2.scale = 0.2
    arm2.visible = false;

    leg1 = createSprite(130,450)
    leg1.addImage("leg1", leg1Img)
    leg1.scale = 0.09
    leg1.visible = false;

    leg2 = createSprite(210,450)
    leg2.addImage("leg2", leg2Img)
    leg2.scale = 0.09
    leg2.visible = false;

    spaces = createSprite(800,300)
    spaces.addImage("spaces", spacesImg)
    spaces.scale = 0.4

    a = createSprite(670,275)
    a.addImage("a", aImg)
    a.scale = 0.04
    a.visible = false;

    p = createSprite(735,275)
    p.addImage("p", pImg)
    p.scale = 0.019
    p.visible = false;

    p2 = createSprite(800,275)
    p2.addImage("p2", p2Img)
    p2.scale = 0.019
    p2.visible = false;

    l = createSprite(865,275)
    l.addImage("l", lImg)
    l.scale = 0.018
    l.visible = false;

    e = createSprite(930,275)
    e.addImage("e", eImg)
    e.scale = 0.0185
    e.visible = false;

    //buttons
    aButton = createButton('A')
    aButton.position(600,310)
    aButton.class("button")

    bButton = createButton('B')
    bButton.position(660,310)
    bButton.class("button")

    cButton = createButton('C')
    cButton.position(720,310)
    cButton.class("button")

    dButton = createButton('D')
    dButton.position(780,310)
    dButton.class("button")

    eButton = createButton('E')
    eButton.position(840,310)
    eButton.class("button")

    fButton = createButton('F')
    fButton.position(900,310)
    fButton.class("button")

    gButton = createButton('G')
    gButton.position(960,310)
    gButton.class("button")

    hButton = createButton('H')
    hButton.position(550,360)
    hButton.class("button")
     

    //hint buttons
    hint = createElement("h3")
    hint.position(1250,50)
    hint.class("hintText")

    hint1 = createButton("HINT!")
    hint1.position(1100,60)
    hint1.class("hintbutton")

    hint_2 = createElement("h3")
    hint_2.position(1250,105)
    hint_2.class("hintText")

    hint2 = createButton("HINT!")
    hint2.position(1100,115)
    hint2.class("hintbutton")

}



function draw(){
    background(bg)
    aButton.mousePressed(()=>{a.visible = true})
    bButton.mousePressed(()=>{chance += 1})
    hint1.mousePressed(()=>{hint.html("It is a fruit.")})
    hint2.mousePressed(()=>{hint_2.html("What keeps the doctor away if you eat one a day?")})
    if(chance == 1){
        head.visible = true;
    }
    drawSprites()
}
