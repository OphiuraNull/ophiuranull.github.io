var menub = new lib.menuback();
var room1 = new lib.bedroom();
var dash = new lib.dashboard();
var room2 = new lib.hallway();
var room3 = new lib.kitchen();
var room4 = new lib.office();
var npc = new lib.npc();
var npc2 = new lib.npc2();
var credits = new lib.credits();
var h1 = new lib.hot1();
var h2 = new lib.hot2();
var h3 = new lib.hot3();
var h4 = new lib.hot4();
var h5 = new lib.hot5();
var h6 = new lib.hot6();
var enviro4Tbl = new lib.officeTable();
var enviro1 = new createjs.Container();
var enviro2 = new createjs.Container();
var enviro3 = new createjs.Container();
var enviro4 = new createjs.Container();
var moving = false;
var controls = false;
var search = false;
var enviro = 1;
var npc1spoke = false;
var npc2spoke = false;

//inventory screen
var invo1 = new lib.hot6();
invo1.gotoAndStop(0);
invo1.visible = false;

invo1.x=491;
invo1.y=561;
invo1.scaleX=47/103;
invo1.scaleY=invo1.scaleX;

var invo2 = new lib.moth();
invo2.visible = false;

invo2.x=600;
invo2.y=558;
invo2.scaleX=105/253;
invo2.scaleY=invo2.scaleX;

var invo3 = new lib.wine();
invo3.gotoAndStop(0);
invo3.visible = false;

invo3.x=752;
invo3.y=560;
invo3.scaleX=80/200;
invo3.scaleY=invo3.scaleX;

var invo4 = new lib.cheese();
invo4.gotoAndStop(0);
invo4.visible = false;

invo4.x=828;
invo4.y=557;
invo4.scaleX=41/120;
invo4.scaleY=invo4.scaleX;

//main audio
createjs.Sound.registerSound("audio/e1.wav", "intro");
createjs.Sound.registerSound("audio/h1.wav", "h1");
createjs.Sound.registerSound("audio/h1_pc.wav", "h1_pc");
createjs.Sound.registerSound("audio/h2.wav", "h2");
createjs.Sound.registerSound("audio/h2_pc.wav", "h2_pc");
createjs.Sound.registerSound("audio/h3.wav", "h3");
createjs.Sound.registerSound("audio/h3_pc.wav", "h3_pc");
createjs.Sound.registerSound("audio/h4.wav", "h4");
createjs.Sound.registerSound("audio/h4_pc.wav", "h4_pc");
createjs.Sound.registerSound("audio/h5.wav", "h5");
createjs.Sound.registerSound("audio/h5_pc.wav", "h5_pc");
createjs.Sound.registerSound("audio/h6.wav", "h6");
createjs.Sound.registerSound("audio/h6_pc.wav", "h6_pc");
createjs.Sound.registerSound("audio/h2.wav", "h2");
createjs.Sound.registerSound("audio/pc_c.wav", "pc_c");
createjs.Sound.registerSound("audio/theme.mp3", "theme");

//npc1 audio
createjs.Sound.registerSound("audio/npc1/e2_1.wav", "e2_1");

createjs.Sound.registerSound("audio/npc1/e2_2_1.wav", "e2_2_1");
createjs.Sound.registerSound("audio/npc1/e2_2_2.wav", "e2_2_2");
createjs.Sound.registerSound("audio/npc1/e2_2_3.wav", "e2_2_3");
createjs.Sound.registerSound("audio/npc1/e2_2_4.wav", "e2_2_4");
createjs.Sound.registerSound("audio/npc1/e2_2_5.wav", "e2_2_5");
createjs.Sound.registerSound("audio/npc1/e2_2_6.wav", "e2_2_6");
createjs.Sound.registerSound("audio/npc1/e2_2_7.wav", "e2_2_7");

createjs.Sound.registerSound("audio/npc1/e2_3.wav", "e2_3");
createjs.Sound.registerSound("audio/npc1/e2_4.wav", "e2_4");

createjs.Sound.registerSound("audio/npc1/e2_5_1.wav", "e2_5_1");
createjs.Sound.registerSound("audio/npc1/e2_5_2.wav", "e2_5_2");

//npc2 audio
createjs.Sound.registerSound("audio/npc2/e3_1.wav", "e3_1");

createjs.Sound.registerSound("audio/npc2/e3_2_1.wav", "e3_2_1");
createjs.Sound.registerSound("audio/npc2/e3_2_2.wav", "e3_2_2");
createjs.Sound.registerSound("audio/npc2/e3_2_3.wav", "e3_2_3");
createjs.Sound.registerSound("audio/npc2/e3_2_4.wav", "e3_2_4");
createjs.Sound.registerSound("audio/npc2/e3_2_5.wav", "e3_2_5");
createjs.Sound.registerSound("audio/npc2/e3_2_6.wav", "e3_2_6");
createjs.Sound.registerSound("audio/npc2/e3_2_7.wav", "e3_2_7");
createjs.Sound.registerSound("audio/npc2/e3_2_8.wav", "e3_2_8");
createjs.Sound.registerSound("audio/npc2/e3_2_9.wav", "e3_2_9");

createjs.Sound.registerSound("audio/npc2/e3_3.wav", "e3_3");
createjs.Sound.registerSound("audio/npc2/e3_4.wav", "e3_4");

createjs.Sound.registerSound("audio/npc2/e3_5_1.wav", "e3_5_1");
createjs.Sound.registerSound("audio/npc2/e3_5_2.wav", "e3_5_2");
createjs.Sound.registerSound("audio/npc2/e3_5_3.wav", "e3_5_3");
createjs.Sound.registerSound("audio/npc2/e3_5_4.wav", "e3_5_4");
createjs.Sound.registerSound("audio/npc2/e3_5_5.wav", "e3_5_5");
createjs.Sound.registerSound("audio/npc2/e3_5_6.wav", "e3_5_6");
createjs.Sound.registerSound("audio/npc2/e3_5_7.wav", "e3_5_7");
createjs.Sound.registerSound("audio/npc2/e3_5_8.wav", "e3_5_8");

credits.x = -3;
credits.y = credits.x;

enviro1.addChild(room1);
enviro1.addChild(h1);

h1.gotoAndStop(0);
h1.scaleX = 0.3;
h1.scaleY = 0.3;
h1.x = 640;
h1.y = 220;

enviro2.addChild(room2);
enviro2.addChild(h2);
enviro2.addChild(npc);

npc.gotoAndStop(0);
npc.x=730;
npc.y=272;
npc.scaleX=295/654;
npc.scaleY=npc.scaleX;

h2.gotoAndStop(0);
h2.x=355;
h2.y=292;
h2.scaleX=55/250;
h2.scaleY=h2.scaleX;

enviro3.addChild(room3);
enviro3.addChild(h3);
enviro3.addChild(h4);
enviro3.addChild(npc2);

h3.gotoAndStop(0);
h3.x=270;
h3.y=45;
h3.scaleX=76/165;
h3.scaleY=h3.scaleX;

h4.gotoAndStop(0);
h4.x=692;
h4.y=384;
h4.scaleX=60/128;
h4.scaleY=h4.scaleX;

npc2.gotoAndStop(0);
npc2.x=593;
npc2.y=190;
npc2.scaleX=316/574;
npc2.scaleY=npc2.scaleX;

enviro4.addChild(room4);
enviro4.addChild(h5);
enviro4.addChild(h6);
enviro4.addChild(enviro4Tbl);

h5.gotoAndStop(0);
h5.x=374;
h5.y=18;
h5.scaleX=209/317;
h5.scaleY=h5.scaleX;

h6.gotoAndStop(0);
h6.x=812;
h6.y=399;
h6.scaleX=150/275;
h6.scaleY=h6.scaleX;

enviro4Tbl.x=429.20;
enviro4Tbl.y=384.55;

var pc = new lib.mainchar();

pc.x = 488;
pc.y = 450;

pc.scaleX = 0.85;
pc.scaleY = 0.85;

dash.y=450; 


stage.addChildAt(menub, 0);

var intromusic = createjs.Sound.play("theme");

this.beginbtn.addEventListener("click", buttonClicked.bind(this));
function buttonClicked()
{
	this.beginbtn.visible = false;
	console.log("loading");
	createjs.Sound.removeSound("theme");
	stage.removeChild(menub);
	stage.addChild(pc);
	pc.gotoAndPlay("talkstart");
	stage.addChild(dash);
	dash.location.text = "1 - Bedroom";
	stage.addChild(invo1);
	stage.addChild(invo2);
	stage.addChild(invo3);
	stage.addChild(invo4);
	stage.addChildAt(enviro1,0);
	
	var soundIntro = createjs.Sound.play("intro"); 
	soundIntro.on("complete", introComplete);
	dash.dialogue.text = "Hmmm, now that was a satisfactory night’s sleep. Now to go through the laborious ordeal of preparing breakfast. I feel like some wine and cheese would do me well today, if I can find any in this mess I call home.";
	
}

function introComplete(){
	controls = true;
	pc.gotoAndStop("still");
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
}

window.addEventListener("keydown", ADown);
window.addEventListener("keyup", AUp);

var flipped = false;

function ADown(event){
	if (controls){
		if ((event.keyCode == 37 && pc.scaleX>0)||(event.keyCode == 39 && pc.scaleX<0)){
			pc.scaleX *= -1;
			
		}	
		if(event.keyCode == 37 || event.keyCode == 39){ 
			createjs.Ticker.addEventListener("tick", move);
			if(!moving){	
				pc.gotoAndPlay("walkstart");
				moving = true;
			}	
			
		}
		
	}
}

function AUp(event){
	if (controls){
		if(event.keyCode == 37 || event.keyCode == 39){ 
			createjs.Ticker.removeEventListener("tick", move);
			pc.gotoAndStop("still");
			moving = false;
		}
	}	
}

function move(){
	
	var dist = 8;	
	if(pc.scaleX<0){		
		dist *= -1;
	}
	//enviro swaps
	if((pc.x>=25 && pc.scaleX<0)||(pc.x<=875 && pc.scaleX>0)){
		pc.x += dist;
	}
	else if (pc.x>875 && enviro==1){
		stage.removeChild(enviro1);
		stage.addChildAt(enviro2,0);
		enviro = 2;
		dash.location.text = "2 - Hallway";
		pc.x = 40;
	}
	else if (pc.x<25 && enviro==2){
		stage.removeChild(enviro2);
		stage.addChildAt(enviro1,0);
		enviro = 1;
		dash.location.text = "1 - Bedroom";
		pc.x = 860;
	}
	else if (pc.x>875 && enviro==2){
		stage.removeChild(enviro2);
		stage.addChildAt(enviro3,0);
		enviro = 3;
		dash.location.text = "3 - Kitchen";
		pc.x = 40;
	}
	else if (pc.x<25 && enviro==3){
		stage.removeChild(enviro3);
		stage.addChildAt(enviro2,0);
		enviro = 2;
		dash.location.text = "2 - Hallway";
		pc.x = 860;
	}
	else if (pc.x>875 && enviro==3){
		stage.removeChild(enviro3);
		stage.addChildAt(enviro4,0);
		enviro = 4;
		dash.location.text = "4 - Study";
		pc.x = 40;
	}
	else if (pc.x<25 && enviro==4){
		stage.removeChild(enviro4);
		stage.addChildAt(enviro3,0);
		enviro = 3;
		dash.location.text = "3 - Kitchen";
		pc.x = 860;
	}
}
//npc1 dialogue
npc.addEventListener("click", npcClicked);
function npcClicked(){
	if (controls){
		controls = false;	
		search = true;
		if (!npc1spoke){
			npc1spoke = true;	
			npcDialogue1();
		}
		else if (invo1.visible)
			npcDialogue2();
		else if (!invo4.visible){
			dash.dialogue.text = "I need to get him his disgusting cream.";
			controls = true;
		}
		else
		controls = true;	
	}
}
//npc dialogue 1
function npcDialogue1(){
	pc.gotoAndPlay("talkstart");
	var sounde2_1 = createjs.Sound.play("e2_1");
	sounde2_1.on("complete", e2_1Complete);
	dash.dialogue.text = "Good morrow to you, Myconius, my fungal friend. Would you perchance know the location of my favoured variety of cheese? I notice the air here is redolent with its powerful aroma.";	
	
}

function e2_1Complete(){
	pc.gotoAndStop("still");
	npc.gotoAndPlay("talkstart");
	var sounde2_2_1 = createjs.Sound.play("e2_2_1");
	sounde2_2_1.on("complete", e2_2_1Complete);
	dash.dialogue.text = "Hmm. Snithersnatch. Hmmm. Can’t say I trust you further than I can throw you. Hmmm.";
}

function e2_2_1Complete(){
	npc.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde2_2_2 = createjs.Sound.play("e2_2_2");
	sounde2_2_2.on("complete", e2_2_2Complete);
	dash.dialogue.text = "Yes yes, I have the entire rest of the day to listen to you blather on. Have you seen the cheese that teases me so with its intoxicating odour?";
}

function e2_2_2Complete(){
	pc.gotoAndStop("still");
	npc.gotoAndPlay("talkstart");
	var sounde2_2_3 = createjs.Sound.play("e2_2_3");
	sounde2_2_3.on("complete", e2_2_3Complete);
	dash.dialogue.text = "Hmmm. About 4 feet, I reckon. Taking your aerodynamic shape into account, of course. Hmm. So don’t get too close.";
}

function e2_2_3Complete(){
	npc.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde2_2_4 = createjs.Sound.play("e2_2_4");
	sounde2_2_4.on("complete", e2_2_4Complete);
	dash.dialogue.text = "…What?";
	
}

function e2_2_4Complete(){
	pc.gotoAndStop("still");
	npc.gotoAndPlay("talkstart");
	var sounde2_2_5 = createjs.Sound.play("e2_2_5");
	sounde2_2_5.on("complete", e2_2_5Complete);
	dash.dialogue.text = "How far I can throw you. Hmmm.";
	
}

function e2_2_5Complete(){
	npc.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde2_2_6 = createjs.Sound.play("e2_2_6");
	sounde2_2_6.on("complete", e2_2_6Complete);
	dash.dialogue.text = "Well I don’t really see how that’s relevan-";
	
}

function e2_2_6Complete(){
	pc.gotoAndStop("still");
	npc.gotoAndPlay("talkstart");
	var sounde2_2_7 = createjs.Sound.play("e2_2_7");
	sounde2_2_7.on("complete", e2_2_7Complete);
	dash.dialogue.text = "The cheese yes? Hmm. It’s a beautiful blue I’ve been yeasting inside myself for two weeks now. I'd say it’s finished ripening today. Hmmm. Tell you what, you find me some pro-fungal cream to rub on my itchy feet and I’ll part with the cheese. Hmmm.";
	
}

function e2_2_7Complete(){
	npc.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde2_3 = createjs.Sound.play("e2_3");
	sounde2_3.on("complete", e2_3Complete);
	dash.dialogue.text = "Very well, I’ll do as you bid. Just… don’t expect me to rub it on you. I’m afraid I’d never be able to tolerate being in the same room as my hands ever again.";
	
}	

function e2_3Complete(){
	pc.gotoAndStop("still");
	controls = true;
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	dash.npc1goal.text = "Myconius needs pro-fungal cream.";
	if (invo1.visible){
		controls = false;
		npcDialogue2();
	}	
}	
	
//npc dialogue 2

function npcDialogue2(){
	pc.gotoAndPlay("talkstart");
	var sounde2_4 = createjs.Sound.play("e2_4");
	sounde2_4.on("complete", e2_4Complete);
	dash.dialogue.text = "Here you are Myconius, the cream. As agreed upon. I do hope you manage to recall that now?";
	
}

function e2_4Complete(){
	invo1.visible = false;	
	pc.gotoAndStop("still");
	npc.gotoAndPlay("talkstart");
	var sounde2_5_1 = createjs.Sound.play("e2_5_1");
	sounde2_5_1.on("complete", e2_5_1Complete);
	dash.dialogue.text = "Hmmm. Hmmmm? Yes! This will do very nicely. Here, take your cheese and be off with you.";
	invo4.visible = true;
}	

function e2_5_1Complete(){
	npc.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde2_5_2 = createjs.Sound.play("e2_5_2");
	sounde2_5_2.on("complete", e2_5_2Complete);
	dash.dialogue.text ="*sniff* Ah yes, such a pungent and complex bouquet. Just like I used to enjoy at the Country Club beneath old Pompeii.";
	
}	

function e2_5_2Complete(){
	pc.gotoAndStop("still");
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	dash.npc1goal.text = "I got Myconius his cream.";
	if (invo3.visible)
		celebration();
	else
		controls = true;
}	

//npc2 dialogue

npc2.addEventListener("click", npc2Clicked);
function npc2Clicked(){
	if (controls){
		controls = false;	
		search = true;
		if (!npc2spoke){
			npc2spoke = true;	
			npc2Dialogue1();
		}
		else if (invo2.visible)
			npc2Dialogue2();
		else if (!invo3.visible){
			dash.dialogue.text = "I need to get him something soft.";
			controls = true;
		}
		else
		controls = true;	
	}
}

//npc2 dialogue 1
function npc2Dialogue1(){
	pc.gotoAndPlay("talkstart");
	var sounde3_1 = createjs.Sound.play("e3_1");
	sounde3_1.on("complete", e3_1Complete);
	dash.dialogue.text = "Greetings Turvy, I didn’t expect to find you still up at this hour. A bit early- or, er… late for you, isn’t it?";	
	
}

function e3_1Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_2_1 = createjs.Sound.play("e3_2_1");
	sounde3_2_1.on("complete", e3_2_1Complete);
	dash.dialogue.text = "Ah, hello Mr. Snithy! No, not up, rather upside down I’d say! Hehe!";
}

function e3_2_1Complete(){
	npc2.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde3_2_2 = createjs.Sound.play("e3_2_2");
	sounde3_2_2.on("complete", e3_2_2Complete);
	dash.dialogue.text = "Yes…? And the purpose of that awful excuse for wordplay was?";
}

function e3_2_2Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_2_3 = createjs.Sound.play("e3_2_3");
	sounde3_2_3.on("complete", e3_2_3Complete);
	dash.dialogue.text = "Oh, eh… sorry Mister. Just thought I’d make a little joke, s’all.";
}

function e3_2_3Complete(){
	npc2.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde3_2_4 = createjs.Sound.play("e3_2_4");
	sounde3_2_4.on("complete", e3_2_4Complete);
	dash.dialogue.text = "And the reason you’re still up is…?";
}

function e3_2_4Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_2_5 = createjs.Sound.play("e3_2_5");
	sounde3_2_5.on("complete", e3_2_5Complete);
	dash.dialogue.text = "Well you know I always sleep with my teddy bear right? Well recently poor old Ted fell apart from being cuddled too much, so I’ve been using this bottle of wine as a replacement Ted, but it just isn’t the same, Mr Snithy. I want something soft and cuddly.";
}

function e3_2_5Complete(){
	npc2.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde3_2_6 = createjs.Sound.play("e3_2_6");
	sounde3_2_6.on("complete", e3_2_6Complete);
	dash.dialogue.text = "Is that my vintage Merlot? I demand you give it back this instant.";
}

function e3_2_6Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_2_7 = createjs.Sound.play("e3_2_7");
	sounde3_2_7.on("complete", e3_2_7Complete);
	dash.dialogue.text = "No! Then I’d be even worse off in terms of cuddle partners, Mister! You can’t do this to me…";
}

function e3_2_7Complete(){
	npc2.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde3_2_8 = createjs.Sound.play("e3_2_8");
	sounde3_2_8.on("complete", e3_2_8Complete);
	dash.dialogue.text = "Fine, if I find you something softer would you relinquish the Merlot?";
}

function e3_2_8Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_2_9 = createjs.Sound.play("e3_2_9");
	sounde3_2_9.on("complete", e3_2_9Complete);
	dash.dialogue.text = "Y… yes mister.";
}

function e3_2_9Complete(){
	npc2.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde3_3 = createjs.Sound.play("e3_3");
	sounde3_3.on("complete", e3_3Complete);
	dash.dialogue.text = "Then it’s decided. Now be a good bat and don’t make me get the broom, yes?";
}


function e3_3Complete(){
	pc.gotoAndStop("still");
	dash.npc2goal.text = "Turvy wants something soft."
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	controls = true;
	if (invo2.visible){
		controls = false;
		npc2Dialogue2();
	}	
}

//npc2 dialogue 2

function npc2Dialogue2(){
	pc.gotoAndPlay("talkstart");
	var sounde3_4 = createjs.Sound.play("e3_4");
	sounde3_4.on("complete", e3_4Complete);
	dash.dialogue.text = "Here, Turvy.  I found something soft for you.";	
	
}

function e3_4Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_5_1 = createjs.Sound.play("e3_5_1");
	sounde3_5_1.on("complete", e3_5_1Complete);
	dash.dialogue.text = "This is… a dead moth.";
}

function e3_5_1Complete(){
	npc2.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde3_5_2 = createjs.Sound.play("e3_5_2");
	sounde3_5_2.on("complete", e3_5_2Complete);
	dash.dialogue.text = "Yes. And it is indeed softer than that bottle of wine. Look how its frayed wings reach out for a gentle hug.";
}

function e3_5_2Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_5_3 = createjs.Sound.play("e3_5_3");
	sounde3_5_3.on("complete", e3_5_3Complete);
	dash.dialogue.text = "But… I was expecting at least a plush or something.";
}

function e3_5_3Complete(){
	npc2.gotoAndStop(0);
	pc.gotoAndPlay("talkstart");
	var sounde3_5_4 = createjs.Sound.play("e3_5_4");
	sounde3_5_4.on("complete", e3_5_4Complete);
	dash.dialogue.text = "Sadly, life is a game of compromises, my dear boy. Perhaps this will teach you to take better care of your toys.";
}

function e3_5_4Complete(){
	pc.gotoAndStop("still");
	npc2.gotoAndPlay("talkstart");
	var sounde3_5_5 = createjs.Sound.play("e3_5_5");
	sounde3_5_5.on("complete", e3_5_5Complete);
	dash.dialogue.text = "Fine, I guess it’ll do for now. I’ll just pretend it’s a super soft magical moth then! Here’s your wine back, Mister.";
}

function e3_5_5Complete(){
	invo2.visible = false;
	invo3.visible = true;
	npc2.gotoAndStop("sleep");
	pc.gotoAndPlay("talkstart");
	var sounde3_5_6 = createjs.Sound.play("e3_5_6");
	sounde3_5_6.on("complete", e3_5_6Complete);
	dash.dialogue.text = "Yes, excellent, I’d thank you if you weren’t essentially holding one of my prized wines hostage because of your own ineptitude.";
}

function e3_5_6Complete(){
	pc.gotoAndStop("still");
	var sounde3_5_7 = createjs.Sound.play("e3_5_7");
	sounde3_5_7.on("complete", e3_5_7Complete);
	dash.dialogue.text = "Snore…";
}

function e3_5_7Complete(){
	pc.gotoAndPlay("talkstart");
	var sounde3_5_8 = createjs.Sound.play("e3_5_8");
	sounde3_5_8.on("complete", e3_5_8Complete);
	dash.dialogue.text = "…It appears he’s already nodded off then.";
}

function e3_5_8Complete(){
	pc.gotoAndStop("still");
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	dash.npc2goal.text = "Turvy has been placated.";
	if (invo4.visible)
		celebration();
	else
		controls = true;
}

//celebration
function celebration(){
	pc.gotoAndPlay("talkstart");
	var soundpc_c = createjs.Sound.play("pc_c");
	soundpc_c.on("complete", pc_cComplete);
	dash.dialogue.text = "Ah, finally. A delectable cheese plate. A heady, aromatic red wine. *sip* This is truly… satisfying.";
}

function pc_cComplete(){
	pc.gotoAndStop("still");	
	var endmusic = createjs.Sound.play("theme");
	stage.removeChildAt(0);
	stage.removeChild(dash);
	stage.addChild(credits);
}

//hotspot clicks

h1.addEventListener("click", h1Clicked);
function h1Clicked(){
	if (controls && search){
		console.log("h1 clicked");	
		if ((pc.x > h1.x + 170 - 125)&&(pc.x < h1.x + 170 +125)){
			
			controls = false;
			h1.gotoAndPlay(0);
			var soundh1 = createjs.Sound.play("h1");
			soundh1.on("complete", h1Complete);
			h1.removeEventListener("click", h1Clicked);
			
		}
		else{
			dash.dialogue.text = "I should go closer.";	
			
		}
	}
}

function h1Complete(){
	h1.gotoAndStop("stop");	
	pc.gotoAndPlay("talkstart");
	var soundh1S = createjs.Sound.play("h1_pc");
	soundh1S.on("complete", h1SComplete);
	dash.dialogue.text = "A desiccated moth among my unmentionables. Amusing.";	
}

function h1SComplete(){
	pc.gotoAndStop("still");
	invo2.visible = true;
	controls = true;
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	
}

h2.addEventListener("click", h2Clicked);
function h2Clicked(){
	if (controls && search){
		console.log("h2 clicked");	
		if ((pc.x > h2.x -60)&&(pc.x < h2.x + 160)){
			
			controls = false;
			h2.gotoAndPlay(0);
			var soundh2 = createjs.Sound.play("h2");
			soundh2.on("complete", h2Complete);
			//h2.removeEventListener("click", h2Clicked);
			
		}
		else{
			dash.dialogue.text = "I should go closer.";	
			
		}
	}
}

function h2Complete(){
	h2.gotoAndStop("stop");	
	pc.gotoAndPlay("talkstart");
	var soundh2S = createjs.Sound.play("h2_pc");
	soundh2S.on("complete", h2SComplete);
	dash.dialogue.text = "So that’s where my edam has gone. Come out, little friend, I could use a little -chomp- snack.";	
}

function h2SComplete(){
	pc.gotoAndStop("still");
	controls = true;
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	
}

h3.addEventListener("click", h3Clicked);
function h3Clicked(){
	if (controls && search){
		console.log("h3 clicked");	
		if ((pc.x > h3.x -40 -80)&&(pc.x < h3.x -40 +80)){
			
			controls = false;
			h3.gotoAndPlay(0);
			var soundh3 = createjs.Sound.play("h3");
			soundh3.on("complete", h3Complete);
			//h3.removeEventListener("click", h3Clicked);
			
		}
		else{
			dash.dialogue.text = "I should go closer.";	
			
		}
	}
}

function h3Complete(){
	h3.gotoAndStop("stop");	
	pc.gotoAndPlay("talkstart");
	var soundh3S = createjs.Sound.play("h3_pc");
	soundh3S.on("complete", h3SComplete);
	dash.dialogue.text = "An empty bottle of anti-fungal poison. Quite ineffectual in the case of my unfortunate houseguest, sadly.";	
}

function h3SComplete(){
	pc.gotoAndStop("still");
	controls = true;
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	
}

h4.addEventListener("click", h4Clicked);
function h4Clicked(){
	if (controls && search){
		console.log("h4 clicked");	
		if ((pc.x > h4.x -180)&&(pc.x < h4.x +180)){
			
			controls = false;
			h4.gotoAndPlay(0);
			var soundh4 = createjs.Sound.play("h4");
			soundh4.on("complete", h4Complete);
			//h4.removeEventListener("click", h4Clicked);
			
		}
		else{
			dash.dialogue.text = "I should go closer.";	
			
		}
	}
}

function h4Complete(){
	h4.gotoAndStop("stop");	
	pc.gotoAndPlay("talkstart");
	var soundh4S = createjs.Sound.play("h4_pc");
	soundh4S.on("complete", h4SComplete);
	dash.dialogue.text = "An empty skin of a teddy bear. All the stuffing seems to have spilt out the back from excessive squeezing. It reminds me of one of my own shed skins.";	
}

function h4SComplete(){
	pc.gotoAndStop("still");
	controls = true;
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	
}

h5.addEventListener("click", h5Clicked);
function h5Clicked(){
	if (controls && search){
		console.log("h5 clicked");	
		if ((pc.x > h5.x +75 -180)&&(pc.x < h5.x +75 +180)){
			
			controls = false;
			h5.gotoAndPlay(0);
			var soundh5 = createjs.Sound.play("h5");
			soundh5.on("complete", h5Complete);
			//h5.removeEventListener("click", h5Clicked);
			
		}
		else{
			dash.dialogue.text = "I should go closer.";	
			
		}
	}
}

function h5Complete(){
	h5.gotoAndStop("stop");	
	pc.gotoAndPlay("talkstart");
	var soundh5S = createjs.Sound.play("h5_pc");
	soundh5S.on("complete", h5SComplete);
	dash.dialogue.text = "Ah, the pleasant air of a new morning beckons me to a lazy day spent reading in the garden.";	
}

function h5SComplete(){
	pc.gotoAndStop("still");
	controls = true;
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	
}

h6.addEventListener("click", h6Clicked);
function h6Clicked(){
	if (controls && search){
		console.log("h6 clicked");	
		if ((pc.x > h6.x -200)&&(pc.x < h6.x +200)){
			
			controls = false;
			h6.gotoAndPlay(0);
			var soundh6 = createjs.Sound.play("h6");
			soundh6.on("complete", h6Complete);
			h6.removeEventListener("click", h6Clicked);
			
		}
		else{
			dash.dialogue.text = "I should go closer.";	
			
		}
	}
}

function h6Complete(){
	h6.gotoAndStop("stop");	
	pc.gotoAndPlay("talkstart");
	var soundh6S = createjs.Sound.play("h6_pc");
	soundh6S.on("complete", h6SComplete);
	dash.dialogue.text = "A jar of spoilt mayonnaise. I can barely see the white through the rainbow of fungus infesting it. I should’ve thrown this away weeks ago.";	
}

function h6SComplete(){
	pc.gotoAndStop("still");
	h6.visible = false;
	invo1.visible = true;
	controls = true;
	dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
	
}




