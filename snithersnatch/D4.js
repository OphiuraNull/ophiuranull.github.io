(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"D4_atlas_", frames: [[0,178,133,64],[0,0,174,176]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["D4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch1 = function() {
	this.spriteSheet = ss["D4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.hot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhHFMQg+gMgfgVQgVgQgLgXQgLgYAFgXQADgOALgTIARggQAHgUABgdIgBgyQAAhBAegaQAXgUA2gEQBRgIAwATQAmAOAeAgQAdAdARApQAcBGgKBfQgGA5gYAaQgTAVgiAIQgYAGgmAAQhCgChAgKgAgKhFIiNgBQghAAgMgOQgMgNAEgXQAEgTAPgUQAKgNAVgTQAbgaASgLQAcgRAZAAQgIgLgVgCQgZAAgLgCQgTgEgKgTQgKgTAKgQQAIgNAXgGQAhgKAkAJQAjAKAXAaQAfAggEAnQgEAjgfAWQgcATgmAAQAPAEAXAAIAngBQAVACAPANQARAOgCASQgCALgIAJQgIAIgLAEQgNAEgWAAIgIAAg");
	this.shape.setTransform(0,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hot2, new cjs.Rectangle(-20.6,-68.7,41.2,68.7), null);


(lib.UpperLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["D4_atlas_"],1)).p("AABQOQBUAIBMgxQAD91gNhoQgIg2h4BPQhzBMgoBCQgRAdgHI6QgHH1ADLJQBKBBBXAJg");
	this.shape.setTransform(9.9,63.5,0.611,0.611);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["D4_atlas_"],1), null, new cjs.Matrix2D(0.998,0,0,1,-73.8,834.6)).s().p("AABQOQhXgJhKhBQgDrJAHn1QAHo6ARgdQAohCBzhMQB4hPAIA2QANBogDd1QhAAqhHAAIgZgBg");
	this.shape_1.setTransform(9.9,63.5,0.611,0.611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UpperLeg, new cjs.Rectangle(-1,-1,21.8,129), null);


(lib.tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#343C46").s().p("ACyOPQkSgyjHhFQkLhcjmiXQEeBNC/ASQEUAaCbhSQB5hAAwhrQAXgzANhMQAJg0AHhbQAGhSAPh1IAbjIQARiKAGhyIAFgOQACgEAHgJQAHgIABgGQABgEgBgJQgCgKACgEQABgEAEgGIAHgJQAEgHADgMIAEgUQADgNAMgRIATgdIAMgYQAHgOAGgJIATgXIAKgQIAJgRQAFgJANgPIAWgeQAIgJASgSQAGgHAFgHIBXgRIAAgBQAeAfAUAvQAgBOgDBhQgCBMgaBpQgPA7ggBxQgYBhgCA6QgDCjgXCFQgPBXgyDnQgUBkgkBaQgqBqgwAvQg8A7g+AZQgwATg1AAQgaAAgcgFgAIPuTIADAAIgEABIABgBg");
	this.shape.setTransform(79.3,93.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tail, new cjs.Rectangle(0,1.7,158.6,183.3), null);


(lib.RightArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#522742").s().p("AghgCQAKgKAPgGQANgGAOABQAQAAANAGQgHAGgQAKIgtASQgPAGgMABQACgOAMgMg");
	this.shape.setTransform(21.7,45.5,0.611,0.611);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#522742").s().p("ABAAfQgWgTgigWQgWgQglgUIhAgiQAhAAApAMQAlANAdAUQAhAWAXAbQAbAhAIAiQgagdgagVg");
	this.shape_1.setTransform(14.6,47.1,0.611,0.611);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#522742").s().p("AACHyQgxgJg7gYQgagLgZgPQgOgIgKgIIgGgEIgHgHQgFgFgDgLQgFgUgCgmQAAgbADgeQAEgkAHgVQAFgRAHgLQAJgPANgJIADgBIABAAQgJgMgGgNQgIgSgGgfQgEgggBhBQgCg/gEgfIgEglIAAgMQgBgNAFgkQAHgsAUgxQAPgnAeguQAYgnAlgkQApgoAogOQAPgEAMADQAMADALAJQAQANAPAbQAVAlAOA3QATBKAMB1QAJBngBBZQgBBAgDAgIgGAwIgFAYQgBAHgDAFIgEAFIgEADQAHAFALAPQAHAIAJAQQAOAaAHAaQAIAaACAeQABAggIAaQgJAegXATQgKAJgQAHIgcAHQgaAFgeAAQgcAAgfgEgAAUnoQgpANgmAjQgkAhgZAoQg4BWgNBbQgDAgABAPIAAAMIAFAjQAGAgAEBAQADBEAEAaQAFAaAIASQAKAUAQAQIATAQIgqAAQgOAKgJAeQgGAWgEAfQgCAbABAbQABAgAFAVIAEAJIADADIAFAEIAXAPQAcAPAVAKQA1AXAyAKQA8AMAwgKQAdgEATgOQAUgQAJgaQAQgvgPg9QgGgbgMgZIgOgYQgFgIgMgOIAEgFIADgEIAEgMIADgXIADgwQABgwgBgwQgChYgLhnQgMhvgThNQgPg5gQggQgNgagNgLQgJgHgJgDIgKgCIgLACg");
	this.shape_2.setTransform(16.4,30.7,0.611,0.611);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#72315A").s().p("AhJHVQhdgigXgdQgRgVAGhYQAHhfAjgUIAUAAQgngigHhXQgBhrgLg5QgShpBEh+QBEh9BaggQA2gUAmBlQAgBUAQCYQAOCCgDB7QgCB3gPAOIgFAEQA3AxAGBgQAGBohQAWQgfAJgiAAQg+AAhKgbg");
	this.shape_3.setTransform(16.6,30.6,0.611,0.611);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4C4C4D").p("AAYgoIgQAEQANAXACANQAEAWgPANQgLAJgMgEQgFgDgEgFQgDgGAAgGQABgFAFgEQAFgEAFAAQAGAAAEAEQAEAEABAF");
	this.shape_4.setTransform(9,72.7,0.611,0.611);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4C4C4D").p("AAQAkQAAgUgJgRQgJgRgQgM");
	this.shape_5.setTransform(22.1,189.7,0.611,0.611);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4C4C4D").p("AgegBQAPgIARAEQASADAMAL");
	this.shape_6.setTransform(14,187.7,0.611,0.611);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4C4C4D").p("AgZgFQAOgFAOAFQAPAFAHAL");
	this.shape_7.setTransform(8.6,186.6,0.611,0.611);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4C4C4D").p("AgSgFQALgCAJAEQALAEAGAJ");
	this.shape_8.setTransform(4.9,185,0.611,0.611);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAHCwIgkizQgOg1gIg9QgRh5AdheQALgvAFgSQAMgjANgDQAVgDAQALQAUANgMAaQgUAsgIBTQgDApgBBEQAAAyAFBLQAGBdAJAVQALAZAICWQAJCXgKAXQgHhKgni6g");
	this.shape_9.setTransform(3.6,207.7,0.611,0.611);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgKEZQgTilAFgdQAJg1gGhWQgJhYgCgYQgCg9gCglQgFhEgKgbQgLgeAugsQArgqAWACQAMABgQAwQgSA3AKATQARBQgHCMQgHCBADAGQAFALgLCyIgREUQgNgYgRing");
	this.shape_10.setTransform(13.9,209.9,0.611,0.611);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AABDVIgVimQgThmgIhgQgMiEAQhBQgBg+ACgSQAFgnASgFQAVgGAWAgQAXAhgHAkQgGAiAEBRQADBDAGAxQAFAjgCB3QgBBggCA0QgBAOAGCWQAECCgHAXQgYhagYiqg");
	this.shape_11.setTransform(8.1,210.2,0.611,0.611);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("ABYB6QgGjJgIgbQgEgQgMBcQgMBZgBgFQgOACgrg0QgqgwgLAJQgKAIgigEQgsgEgVAEQAFgjAMguQAZhbAng4QAKgNBHgQQBJgQAYAKQAtASAVBwQAPAPgDAvQgFA5AJAYQANAkgKAsQgEAXgVA5QgSAygDAdQgEAsAWAkIgEAAQgmAAgMiwg");
	this.shape_12.setTransform(12.4,188.2,0.611,0.611);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgUVhIgzgPQAJhKADrDQAErbgOh6QgZgmgCgaQgCgrAnhEQgJiFAwlVQA0l+BAhOQAGBIgeFoQgqHwAHByQgRBaAlLuQAkLigQA7QgWBOglAFIgIABQgMAAgSgFg");
	this.shape_13.setTransform(13.2,95.3,0.611,0.611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RightArm, new cjs.Rectangle(0,0,29.3,239.2), null);


(lib.playbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09,x:-8,y:-5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:10,y:4},0).wait(1).to({scaleX:1,scaleY:1,x:-2,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,133,64);


(lib.pillar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B5B3").s().p("AAABFIjIgJQAugSAigkQAjgjAPgvQgMAoB7A4QBrAyA1AHIjJgIg");
	this.shape.setTransform(34.5,502,1.711,1.711);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B5B3").s().p("AjtAWQgtgpgTgQQEugeEtASQhGgDg6AEQhcAGhRAZQgQAFhCAiQg5AdgaACIgCAAQgfAAgoghg");
	this.shape_1.setTransform(54.5,34.4,1.711,1.711);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgPALgLQALgLAOAAQAQAAAKALQALALAAAPMAAAAnZQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_2.setTransform(127.6,274.5,1.711,1.711);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3B5B3").s().p("AgZUvQgLgMAAgPMAAAgonQAAgPALgMQALgLAOAAQAQAAAKALQALAMAAAPMAAAAonQAAAPgLAMQgKALgQgBQgOABgLgLg");
	this.shape_3.setTransform(100.9,277.3,1.711,1.711);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B5B3").s().p("AgZUvQgLgMAAgPMAAAgonQAAgPALgMQAKgLAPAAQAPAAALALQALAMAAAPMAAAAonQAAAPgLAMQgLALgPgBQgPABgKgLg");
	this.shape_4.setTransform(74.1,277.3,1.711,1.711);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgQALgKQALgLAOAAQAQAAAKALQALAKAAAQMAAAAnZQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_5.setTransform(48.5,277.7,1.711,1.711);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFF2EE").s().p("AhOA3QgUg1gIgZQgOgsAKgXQANgdApgJQArgKAxASQAyASAdAiQg+AbgtA1QgsA2gOBDQgIgZgUg1g");
	this.shape_6.setTransform(156.7,40.4,1.711,1.711);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFF2EE").s().p("AgHAMQgtg1g+gbQAcgiAygSQAygSAqAKQArAKAMAcQAGAOgCAUQgCANgGAVQgIAYgUA1QgUA1gIAZQgPhCgrg3g");
	this.shape_7.setTransform(20.7,41,1.711,1.711);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFF2EE").s().p("An+BZIAAixIP9AAIAACxg");
	this.shape_8.setTransform(88.1,15.3,1.711,1.711);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFF2EE").s().p("Ag3CBQgrgKgMgcQgGgOACgTQACgMAGgWQAIgZAUg1QAUg1AIgZQAPBDArA2QAtA1A+AbQgcAigyASQghAMgcAAQgQAAgPgEg");
	this.shape_9.setTransform(156,502.8,1.711,1.711);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFF2EE").s().p("AgkB5QgygSgcgiQA+gbAtg1QArg3APhCQAIAZAUA1QAUA1AIAYQAGAWACAMQACAUgGAOQgMAcgrAKQgPAEgQAAQgcAAghgMg");
	this.shape_10.setTransform(20.1,502.2,1.711,1.711);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFF2EE").s().p("An+BZIAAiyIP9AAIAACyg");
	this.shape_11.setTransform(87.5,527.9,1.711,1.711);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFF2EE").s().p("AlrYTMAAAgwlILXAAMAAAAwlg");
	this.shape_12.setTransform(89,272.6,1.711,1.711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pillar, new cjs.Rectangle(0,0,176.5,543.2), null);


(lib.npc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("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");
	this.shape.setTransform(-2,-72.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("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");
	this.shape_1.setTransform(2,-66.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.npc, new cjs.Rectangle(-71,-128.4,146.1,124.4), null);


(lib.LeftArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#522742").s().p("AghgCQAKgKAPgGQANgGAOABQAQgBANAIQgHAGgQAJIgtASQgPAGgMABQACgOAMgMg");
	this.shape.setTransform(21.7,45.5,0.611,0.611);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#522742").s().p("ABAAfQgWgTgigWQgWgQglgUIhAgiQAhAAApAMQAlANAdAUQAhAWAXAbQAbAhAIAiQgagdgagVg");
	this.shape_1.setTransform(14.6,47.1,0.611,0.611);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#522742").s().p("AACHyQgxgJg7gYQgagLgZgPQgOgIgKgIIgGgEIgHgHQgFgFgDgLQgFgUgCgmQAAgbADgeQAEgkAHgVQAFgRAHgLQAJgPANgJIADgBIABAAQgJgMgGgNQgIgSgGgfQgEgggBhBQgCg/gEgfIgEgxQgBgNAFgkQAHgsAUgxQAPgnAeguQAYgnAlgkQApgoAogOQAPgEAMADQAMADALAJQAQANAPAbQAVAlAOA3QATBKAMB1QAJBngBBZQgBBAgDAgIgGAwIgFAYQgBAHgDAFIgEAFIgEADQAHAFALAPQAHAIAJAQQAOAaAHAaQAIAaACAeQABAggIAaQgJAegXATQgKAJgQAHIgcAHQgaAFgeAAQgcAAgfgEgAAUnoQgpANgmAjQgkAhgZAoQg4BWgNBbQgDAgABAPIAAAMIAFAjQAGAgAEBAQADBEAEAaQAFAaAIASQAKAUAQAQIATAQIgqAAQgOAKgJAeQgGAWgEAfQgCAbABAbQABAgAFAVIAEAJIADADIAFAEIAXAPQAcAPAVAKQA1AXAyAKQA8AMAwgKQAdgEATgOQAUgQAJgaQAQgvgPg9QgGgbgMgZIgOgYQgFgIgMgOIAEgFIADgEIAEgMIADgXIADgwQABgwgBgwQgChYgLhnQgMhvgThNQgPg5gQggQgNgagNgLQgJgHgJgDIgKgCIgLACg");
	this.shape_2.setTransform(16.4,30.7,0.611,0.611);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#72315A").s().p("AhJHVQhdgigXgdQgRgVAGhYQAHhfAjgUIAUAAQgngigHhXQgBhrgLg5QgShpBEh+QBEh9BaggQA2gUAmBlQAgBUAQCYQAOCCgDB7QgCB3gPAOIgFAEQA3AxAGBgQAGBohQAWQgfAJgiAAQg+AAhKgbg");
	this.shape_3.setTransform(16.6,30.7,0.611,0.611);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("AgDgDQAGgGAHAAQgBAIgGAEQgFAGgHABQAAgHAGgGg");
	this.shape_4.setTransform(19.1,188.5,0.611,0.611);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgMAAQAFgEAHAAQAIAAAFAEQgFAFgIAAQgIgBgEgEg");
	this.shape_5.setTransform(2.4,205.1,0.611,0.611);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgXAAQAJgDAOgBQANAAALAEQgLAFgNAAQgNAAgKgFg");
	this.shape_6.setTransform(8.3,204.9,0.611,0.611);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgMAAQAFgEAHAAQAIAAAFAEQgGAFgHAAQgGAAgGgFg");
	this.shape_7.setTransform(14.6,204.7,0.611,0.611);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgBANQgqgFgegWQAnAOAiADQAiAFAogHQgbAOgeAAIgSgCg");
	this.shape_8.setTransform(9.7,184.9,0.611,0.611);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444344").s().p("AgBALQgngEghgSICTAPQgaAIgcAAIgVgBg");
	this.shape_9.setTransform(9.7,184.7,0.611,0.611);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgNASQgfgXgHgiQASAfAaASQAaAVAhAJIgHAAQgfAAgbgWg");
	this.shape_10.setTransform(14.4,178.5,0.611,0.611);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444344").s().p("AgKAOQgdgVgMggIBnBPQgigDgcgXg");
	this.shape_11.setTransform(14.4,178.5,0.611,0.611);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#4C4C4D").p("AAYgoIgQAEQANAXACANQAEAWgPANQgLAJgMgEQgFgDgEgFQgDgGAAgGQABgFAFgEQAFgEAFAAQAGAAAEAEQAEAEABAF");
	this.shape_12.setTransform(9,72.7,0.611,0.611);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444344").s().p("AgLAoQgFgDgEgFQgDgGAAgGQABgFAFgEQAFgEAFAAQAGAAAEAEQAEAEABAFIAKglIgKgTIAQgEIgGAXQAEAKABAHQAEAWgPANQgIAGgHAAIgIgBg");
	this.shape_13.setTransform(9,72.7,0.611,0.611);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444344").s().p("AAHCwIgkizQgOg1gIg9QgRh5AdheQALgvAFgSQAMgjANgDQAVgDAQALQAUANgMAaQgUAsgIBTQgDApgBBEQAAAyAFBLQAGBdAJAVQALAZAICWQAJCXgKAXQgHhKgni6g");
	this.shape_14.setTransform(3.6,207.7,0.611,0.611);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444344").s().p("AgKEZQgTilAFgdQAJg1gGhWQgJhYgCgYQgCg9gCglQgFhEgKgbQgLgeAugsQArgqAWACQAMABgQAwQgSA3AKATQARBQgHCMQgHCBADAGQAFALgLCyIgREUQgNgYgRing");
	this.shape_15.setTransform(13.9,209.9,0.611,0.611);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444344").s().p("AABDVIgVimQgThmgIhgQgMiEAQhBQgBg+ACgSQAFgnASgFQAVgGAWAgQAXAhgHAkQgGAiAEBRQADBDAGAxQAFAjgCB3QgBBggCA0QgBAOAGCWQAECCgHAXQgYhagYiqg");
	this.shape_16.setTransform(8.1,210.2,0.611,0.611);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444344").s().p("ABYB6QgGjJgIgbQgEgQgMBcQgMBZgBgFQgOACgrg0QgqgwgLAJQgKAIgigEQgsgEgVAEQAFgjAMguQAZhbAng4QAKgNBHgQQBJgQAYAKQAtASAVBwQAPAPgDAvQgFA5AJAYQANAkgKAsQgEAXgVA5QgSAygDAdQgEAsAWAkIgEAAQgmAAgMiwg");
	this.shape_17.setTransform(12.4,188.2,0.611,0.611);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444344").s().p("AgUVhIgzgPQAJhKADrDQAErbgOh6QgZgmgCgaQgCgrAnhEQgJiFAwlVQA0l+BAhOQAGBIgeFoQgqHwAHByQgRBaAlLuQAkLigQA7QgWBOglAFIgIABQgMAAgSgFg");
	this.shape_18.setTransform(13.2,95.4,0.611,0.611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LeftArm, new cjs.Rectangle(0,0,29.3,239.2), null);


(lib.jaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80353E").s().p("AMSKHIABgNIABg6QABgVgCgLQgDgSgJgLQgIgKgOgEQgOgFgOAEQgcAGgMAcQgFAKgGATQgHARgLAGQgEACgJADIgOAEQgMAIgGASIkHgnIAAgOIgBgWIABgdQAAgRgFgLQgGgOgNgJQgOgJgPAAQgQgBgOAIQgOAGgJANQgFAGgNAYQgLATgKAHQgGAEgNAGIgMAHIk4gvQAFgNACgTIAGgrQAFgYAAgJQgBgQgNgMQgMgMgQgCQgQgCgPAIQgPAHgKANIgNASQgEAFgIADIgOAEQgTAHgMAPQgNAQACASQgKADgHAJIjigjQAIgIAFgLQANgYgCgaQgBgagQgVQgQgWgYgJQgSgGgTACQgUAEgNANQgGAGgHALIgMARQgKAMgbAPQgeAPgPAFIgTAFQgMAEgHAEIgDADIlgg1IgQgCIA4hPIB5j2IF1reIDgCyIgCAIQgGAVAHATQAMAdAkALQAWAHArAAIAJAAIDICfQAGAMAIAHQAJAHAOADIFuEhQAFALAJAKQASASAYAFIF7EtIAAABQgBAVAPALQANAMAaACIAHAAIFOEJg");
	this.shape.setTransform(119.6,82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AAlKGI1DjDIAwhiIFgA0QgOAMAAAVQAAAXAQAMQAPAKAjAAQA+ABAfgCQA4gDAegTQALgHAJgKIDjAiIgEAEQgIALgBANQgBANAIAMQAHAMALAFQAKAFAPABIAbAAIAgAAQASAAAMgDQAggJAQgeIAEgIIE3AvIgHAFQgPAMAAAVQAAAWAPALQAKAIAQADQAKACATAAIA/gBQAgAAANgJQARgNACgaIABgJIEHAoQgDAMAAAQQAAAcAKANQAKAOAZADQAHABAMAAIAUgBQAmAAAGgBQAYgEAMgOQAJgJAEgQIACgQIF6A5IlPkKQAmADAXgQQAKgIAIgLIIFGugAEUBWQALADALgBQAWAAAagNQANgHATgNIFOEVQgHAHgNAGQgRAGgFAFQgOAKgBAUgAiRj3QAKACAMABQAgABAYgJQAagJAOgVIEiDzQgYAHgJAHQgSAQACAaQABAOAGALgAqus+IEPDhQgQAEgOAIQgZANgRAUQgLANgGAQIjgiyIl0LegAl/mzQAggBAQgHQAPgGAOgOQAJgKAOgSIACgCICCBtIgBABQgSAQgJALQgNAPgBARQgDAQAIATIAGAMg");
	this.shape_1.setTransform(131.1,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AI+KoQgYgEgLgOQgKgNAAgcQABgQADgMQAFgTANgHIANgEQAKgDAEgCQAKgGAHgRQAHgUAEgJQANgcAcgHQANgDAOAEQAOAFAJAKQAJALADASQABALAAAVIgCA6IAAANIgCAQQgEAQgIAKQgMAOgYADQgHABglABIgUAAIgIAAIgMAAgABwJhQgQgDgKgIQgPgLAAgWQAAgVAPgMIAHgEIAMgHQAOgGAFgEQALgHAKgTQAOgYAEgGQAKgNAOgHQAOgHAPABQAQAAANAJQAOAJAGAOQAFALAAARIgBAdIAAAWIAAAOIAAAIQgDAagRANQgNAJggAAIg/ABQgTAAgKgCgAksISIggAAIgaAAQgPAAgKgFQgMgGgHgMQgHgMAAgNQABgNAIgLIAEgEQAHgIAKgDQgDgSANgQQANgPASgHIAOgFQAIgDAFgEIANgSQAJgNAPgIQAPgHAQACQARACAMAMQAMAMABAQQABAIgGAZIgFArQgDATgEANIgEAIQgPAeggAIQgLADgQAAIgEAAgAs2HMQgjAAgOgKQgRgMAAgXQABgVANgLIAEgDQAHgFALgDIAUgFQAPgFAdgQQAbgPAKgLIANgRQAHgMAFgFQANgNAUgEQATgDASAHQAZAJAPAWQAQAVACAaQABAagMAXQgGALgIAJQgJAKgLAIQgdASg4ADQgVACgjAAIgmgBgALvGbIgHgBQgZgCgOgLQgOgMAAgUIAAgBQABgVAOgKQAFgFARgGQAOgGAGgGIABgBQAIgIADgPIACgaQAEgnAUgSQATgQAdACQAaABAPAPQALALACARQACARgHAOIgRAZQgGAJgIAaQgHAagHAOIgIAOQgIAMgKAHQgTAOggAAIgKAAgAE4A/QgYgFgSgTQgJgJgEgLQgGgLgBgMQgCgcASgPQAJgIAZgHIAJgDQA2gPArggIATgOQALgHAJgDQATgGAUAKQAUAKACAUQACANgHAQIgPAcQgMAZgIALQgMAOgcATIgMAIQgTAOgNAGQgZANgXAAIgEAAQgJAAgJgCgAhXkLQgMgBgKgCQgOgDgJgHQgIgHgGgMIgFgMQgIgUACgQQACgQANgQQAIgLATgQIABgBQAXgUAPgQQAWgXAHgEQARgMAYAAQAdgBAUASQAKAJAEANQAFANgEANQgDAKgLAOQgNARgDAHQgFAJgEAUQgEAVgEAIIgDAGQgMAVgbAKQgUAHgaAAIgKAAgAlknKQgqAAgWgHQglgMgMgcQgHgTAGgWIADgHQAFgQAMgOQARgUAYgNQAOgHAQgEQAKgDAKgBIAUgBQAMgCAHgFQAEgCAFgGIAIgLQARgTAbgCQAcgCARASQAQARAAAcQAAAagPAdQgKASgWAdIgCACQgNASgKAKQgOAOgPAGQgQAHggABIgJAAg");
	this.shape_2.setTransform(127.5,85.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jaw, new cjs.Rectangle(0,0,262.2,166.1), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai1GwQggAAgSgEQgbgGgOgRQgOgQgCgYQgBgXAKgWQAHgRAQgWIAcgkQAxhDAYhaQAVhRgBhdQgChOgRhgQgKg4gch0QA1AGCxgBQCiAIAtAyQAeAhAJAxQAKAtgLAvQgTBQhLBNIgjAkQgUAUgKASQgOAXgCAZQgDAaAMAVQAOAYAsATQA1AXAOAMQAhAcgBAwQAAAwgiAaQgiAbgugKQgvgKgUgmQAGAagPAaQgPAYgbANQgWAKgdAEQgTACglAAg");
	mask.setTransform(28.9,43.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALBfIgQgvIgRgwQgTg+AHgqQAEgcANgWQAHgNAJgJQAKgKAKgFQgdAigBA4QgBAjASA6IAPAvQAJAdADAWQAMA8gVAqQAEgrgRg2g");
	this.shape.setTransform(19,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8CDQACgZAKgZQAHgWAPgYIAagqQAfgyAGghQALg2gZgkQAKAGAJAMQAGAIAGAOQAIAZgBAcQgCAYgLAbQgIAUgQAZIgaAoIgZApQgaAyACApQgKgWABgcg");
	this.shape_1.setTransform(37.9,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAoQgGgVADgWQADgXAKgTQAMgWARgKIgHAoIgGAlQgDAYgBANIgCApQgNgOgHgYg");
	this.shape_2.setTransform(17.3,66.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXgmQAMABALAJQALAIAFALQAHAJABAOQACAOgFALg");
	this.shape_3.setTransform(35.2,63.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#603813").s().p("Ai1GwQggAAgSgEQgbgGgOgRQgOgQgCgYQgBgXAKgWQAHgRAQgWIAcgkQAxhDAYhaQAVhRgBhdQgChOgRhgQgKg4gch0QA1AGCxgBQCiAIAtAyQAeAhAJAxQAKAtgLAvQgTBQhLBNIgjAkQgUAUgKASQgOAXgCAZQgDAaAMAVQAOAYAsATQA1AXAOAMQAhAcgBAwQAAAwgiAaQgiAbgugKQgvgKgUgmQAGAagPAaQgPAYgbANQgWAKgdAEQgTACglAAg");
	this.shape_4.setTransform(28.9,43.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,57.8,86.6), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkGJwQgvgBgZgFQgngJgVgYQgUgXgCgkQgBggAOggQALgZAWgfIAog0QBHhiAiiCQAfh1gCiFQgChxgZiLQgPhVgniiQBNAID/gBQDoAKBCBJQArAwAOBGQAOBCgQBDQgcB0hrBvIgzA0QgcAdgQAaQgTAhgEAjQgEAnARAeQAVAjA/AbQBNAhAVASQAvAogBBFQgBBFgxAmQgwAnhDgPQhEgOgcg3QAIAlgXAmQgVAjgmASQggAPgrAFQgbADg2AAg");
	mask.setTransform(41.7,62.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUCIQgMgngLgdIgYhFQgNgogFggQgGgsAFghQADgVAFgQQAGgUAJgPQAKgSALgNQAMgOAQgKQgtAwgEBRIABAjIAFAjQAGAfAMAlIAWBFQANApAGAeQAIAmgBAlQAAAQgEAVQgDAQgIAUQAJg9gXhRg");
	this.shape.setTransform(27.5,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhSDiQgCgQABgUQAFglANgjQAMgdAVgkIAkg7QAVgfAOgdQAIgSAEgOQAGgRADgPQAHgkgGgfQgDgSgGgPQgHgQgLgPQAQAMAJAPQAJANAHAUQAGAQADAVQABAPgCAWQgCAggQAoQgNAdgWAjIgmA7QgUAegPAeQglBJAHA9QgHgSgCgSg");
	this.shape_1.setTransform(54.6,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXA5QgHgdAEggQAEgfAOgcQAOgeAXgTQgMAngEASQgHAcgDAbQgDAfAAAXIABA7QgRgXgHghg");
	this.shape_2.setTransform(25.2,96);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAZIgOgbIgQgaIgVgbQAQADAQANQANALAJAQQAJAOADATQADAUgFAPIgNgfg");
	this.shape_3.setTransform(50.6,91.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#603813").s().p("AkGJwQgvgBgZgFQgngJgVgYQgUgXgCgkQgBggAOggQALgZAWgfIAog0QBHhiAiiCQAfh1gCiFQgChxgZiLQgPhVgniiQBNAID/gBQDoAKBCBJQArAwAOBGQAOBCgQBDQgcB0hrBvIgzA0QgcAdgQAaQgTAhgEAjQgEAnARAeQAVAjA/AbQBNAhAVASQAvAogBBFQgBBFgxAmQgwAnhDgPQhEgOgcg3QAIAlgXAmQgVAjgmASQggAPgrAFQgbADg2AAg");
	this.shape_4.setTransform(41.7,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,83.3,124.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAMHbQghgEgZgMQgdgOgQgbQgSgcAHgcQgVAqg0ALQg0AKglgdQglgdAAg1QgBg1AkgfQAPgNA7gZQAwgVAQgbQANgXgDgdQgCgbgPgZQgMgUgWgXIgmgmQhShVgVhZQgNg0ALgyQAKg1AiglQAxg3CygJQArgBBhAAQBSgBAfgDQgdB7gMBDQgTBpgCBXQgBBmAXBZQAaBjA3BLIAeAnQARAXAJAUQAKAYgBAZQgBAbgQASQgQASgdAHQgUAFgjgBIiAABQgpAAgUgCg");
	mask.setTransform(31.8,47.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiBjQAEgYAKgfIARg0QAThAgBgpQgCg9ggglQALAGALALQAKALAHANQAIAOAEANQACAHAFAWQAGAwgUBCIgTA1QgMAigFARQgTA+AFAuQgWgtANhEg");
	this.shape.setTransform(42.6,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgBjQgJgSgSgbIgdgtQgQgYgLgZQgMgegCgaQgCggAJgZQAHgRAGgJQAIgLAMgJQgcAoALA8QAIAkAiA5IAdAtQAQAcAIAXQALAbACAcQACAfgLAYQADgugcg3g");
	this.shape_1.setTransform(21.9,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDApQgBgYgCgRIgHgpIgKgsQASALANAYQAMAXADAYQADAXgGAYQgHAagOAQIgCgtg");
	this.shape_2.setTransform(44.5,73.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAPQACgOAHgLQAIgMAJgJQAMgJAOgCIgxBVQgFgNACgPg");
	this.shape_3.setTransform(24.8,70);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#603813").s().p("AAMHbQghgEgZgMQgdgOgQgbQgSgcAHgcQgVAqg0ALQg0AKglgdQglgdAAg1QgBg1AkgfQAPgNA7gZQAwgVAQgbQANgXgDgdQgCgbgPgZQgMgUgWgXIgmgmQhShVgVhZQgNg0ALgyQAKg1AiglQAxg3CygJQArgBBhAAQBSgBAfgDQgdB7gMBDQgTBpgCBXQgBBmAXBZQAaBjA3BLIAeAnQARAXAJAUQAKAYgBAZQgBAbgQASQgQASgdAHQgUAFgjgBIiAABQgpAAgUgCg");
	this.shape_4.setTransform(31.8,47.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,63.7,95.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAQKaQgugFgjgRQgogUgXglQgZgoAJgoQgeA7hIAPQhIAQg0gqQg0gpgBhKQgBhKAygrQAWgSBTgkQBDgdAWgmQATgfgEgqQgEgmgVgjQgRgcgeggIg3g3Qhzh2gdh9QgRhJAOhGQAPhLAvgzQBGhOD5gMQA8gDCJAAQBzAAAsgEQgqCugQBbQgbCVgCB5QgCCPAhB+QAkCLBNBoIAqA4QAYAhAMAbQAPAigCAjQgBAmgWAZQgWAagqAJQgcAGgxAAIi0ABIgNAAQguAAgbgDg");
	mask.setTransform(44.6,66.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvEDQgDgVgBgSQAAglAIgrQAGggAPgtIAXhJQALgjAIgnQAEgUACgRQABgVAAgQQgEhXgyg0QARAKANAQQALAMAMAVQAHANAJAZQAFASADAWQAFAjgHAuQgGAmgNAoIgaBJQgMAjgLAmQgZBYAKBBQgHgRgFgWg");
	this.shape.setTransform(59.8,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAwCJQgRghgVgfIgphAQgZgqgLgaQgRgpgEgkQgCgYACgQQADgWAFgRQAIgWAJgOQAMgQAPgMQgMAPgHARQgIARgDASQgFAiAHAnQACAMAHAXQAHAUAHANQAQAhAUAgIAnBAQAXAmAMAfQAJAXAEAPQAFAUACATQABAVgCASQgCATgHASQAJhBgohOg");
	this.shape_1.setTransform(30.8,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AACA6QAAgdgDgeQgEgfgHgcQgDgQgOgsQAXASAQAiQAPAfADAgQAEAigGAgQgJAkgRAYIACg/g");
	this.shape_2.setTransform(62.2,103);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAWQAEgSAJgRQAKgQAOgNQARgNAQgEIgWAcQgLAQgGAMIgdA/QgFgRADgVg");
	this.shape_3.setTransform(35,98.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#603813").s().p("AAQKaQgugFgjgRQgogUgXglQgZgoAJgoQgeA7hIAPQhIAQg0gqQg0gpgBhKQgBhKAygrQAWgSBTgkQBDgdAWgmQATgfgEgqQgEgmgVgjQgRgcgeggIg3g3Qhzh2gdh9QgRhJAOhGQAPhLAvgzQBGhOD5gMQA8gDCJAAQBzAAAsgEQgqCugQBbQgbCVgCB5QgCCPAhB+QAkCLBNBoIAqA4QAYAhAMAbQAPAigCAjQgBAmgWAZQgWAagqAJQgcAGgxAAIi0ABIgNAAQguAAgbgDg");
	this.shape_4.setTransform(44.6,66.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,89.3,133.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkTBqQhygsAAg+QAAg9BygsQBygsChAAQChAAByAsQBzAsAAA9QAAA+hzAsQhyAsihAAQihAAhygsg");
	mask.setTransform(39,15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AAHBOQgegLgZgWQgWgVAAgUQAAgRAagaQAVgWAWgPQAjgYAFAZQACAIgKALIgOASQgMAXAEAXQAFAXATAWQAMAPAaAUIgFAAQgeAAgdgKg");
	this.shape.setTransform(16.6,14.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEE21").s().p("AkTBqQhygsAAg+QAAg9BygsQBygsChAAQChAAByAsQBzAsAAA9QAAA+hzAsQhyAsihAAQihAAhygsg");
	this.shape_1.setTransform(39,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,78,30), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EAo7AFoICMhaIuOtHMhILAAAIBQC0IhGB4IL4M9MBKhAAKg");
	this.shape.setTransform(277.9,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/PIwIr4s9IBGh4IhQi0MBILAAAIOONHIiMBaICWDSg");
	mask.setTransform(277.8,57.5);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AwtAPIoXgCQllgDiygDIIXgIIIXgGIIXgEIIWgDIZFACIIXAFIoXAIIoXAHIoXAEIwtADIoXAAg");
	this.shape_1.setTransform(316.3,97.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACSC6QgZgUhAg5IimijIhPhXQhThgg9hZIGZGeIEADvQhag9hhhQg");
	this.shape_2.setTransform(50.3,58.9);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#603813").s().p("A/PIwIr4s9IBGh4IhQi0MBILAAAIOONHIiMBaICWDSg");
	this.shape_3.setTransform(277.8,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-0.2,-0.5,556,116), null);


(lib.bedroom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrQAIMIAAwXICiAAQABAUAEA3QAEAxgBAeIgEA0QgCAdAEAVQAKArAkAjQAXAUAdAPQgFAUABAbIABArQAAAZgCASIgHAkQgCAQAAAfIABBmIAAATIgEAHQgKAcAIAeQAHAeAXASQAfAYBCAAQAtAAAagMQAZgLAdghQAXgaAFgVQAEgLABgVIABghQAGgdACgPQABgJABgQIABgYIAHgvQACgPAAgZIgBgpIAAguQClADEjgEQFmgFDLAUIB4ALQBGAIAzABQAzACBkgEIgBAPQAAArANBIQAPBUACAfQACAoACANQAJAqAeAjQAeAhApASQBDAeAwgZQAJgFAIgHQAiAAAZgUQAagVAGgiQAIgigPgeQgKgSgDgKQgGgRAEgjIAIhHQAIhBABgdIACgqQAwgHAdgXQAXgTARggQALgZAJgmQAchwgDhpQgCglgFgjMAvyAAAIAAQXg");
	this.shape.setTransform(276.9,347.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF66FF").s().p("AQSGxQgigDgZgaQgYgagCggQhGgshPgJQgLgChCgDQgugDgdgJQgugOgxgoQgWgSg6g8Qhjhnh0haQgngfgagRQglgYgjgOQg8gWhOAAQg1AAhRAMIAHgHQARgTADgXQByAVCjAHQGpATGmhAQAigFARgFQAbgIASgOQAQgMAKgRQAMAfAEAoQADAbAABPQAAB9ARB5QAJBFABAVQADAygKAmQgNAtgjAfQgdAaghADIgGAAIgLgBgAxdE+Qg1gtgGhiQgFhRAiiLQAlieADhAQADg8ACgNQAGgoAUgXQAQgSAbgLIADgBQAYBGABAVQAAAOgDAdQgEAbABAPQACAkAWAiQAVAfAhAVQA1AiBaALQBpANCbgNIDggTQgOAGgMAGQhAAig4BDQgpAzgvBUQgJARgGAIQgLANgLAFQgQAGgWgGIglgNQg6gUhEAQQg8AOg8AmQghAWgeAaQgDAbgNATQgTAbgkAFIgLAAIgDAAQgpAAgegZg");
	this.shape_1.setTransform(130.7,225.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF99FF").s().p("AtIEAQhagLg1ghQghgVgVggQgWghgCglQgBgOAEgcQADgcAAgOQgBgUgYhHIgHgRQgXhCATgmQAFgKAIgJQANABAMgEQAagHARgXQARgDATAAQAvACBMAaQBZAeAiAFQAoAHA3gDQAggBBAgGQBrgIC8AFQDSAGBUgDQA9gCEqgfQDbgXCLAMQBMAGA6ATQAFAZAJAUQARAkAiAUQAkAVAhgMQALgEAJgGIAJAOQAiAyAAA3QABAegMAcQgEAKgFAIQgKARgQAMQgSAOgbAIQgRAFgiAGQmmA/mpgTQijgHhygUQgDAWgRATIgHAHQgOANgTAHQgTAIgbADQgMABgkACIgkADIjgATQhMAGhAAAQhCAAg2gHg");
	this.shape_2.setTransform(135.7,191.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AMMUUQgpgSgdghQgfgjgIgqQgCgNgDgoQgCgfgPhUQgNhJAAgrIABgQQhkAEgzgBQgygChHgHIh4gMQjLgTllAFQkjAEilgDIAAAuIABApQAAAYgCARIgHAvIgBAYQgBAQgBAJQgCAPgGAcIgBAiQgBAUgDAMQgGAVgXAaQgdAggZAMQgaAMgtAAQhBAAgggYQgWgSgIgeQgIgeALgcIADgHIAAgTIgBhmQAAggACgPIAHgmQADgRgBgZIgBgrQgBgbAFgVQgdgOgWgVQglgigJgrQgFgVACgeIAEgzQACgegEgxQgFg3gBgUIAAgFQgEiKBDiAQAWgqAbgkQAlgEATgcQANgSADgbQAdgZAigWQA7gnA8gOQBFgPA5AUIAmANQAWAGAPgHQAMgFAKgMQAGgIAKgRQAuhVApgyQA4hFBBghQAMgHAOgFIAkgDQAkgCALgBQAbgDAUgIQATgHAOgNQBRgMA1AAQBOAAA8AXQAiANAlAYQAbASAnAeQBzBcBjBnQA6A7AXATQAwAnAvAOQAdAJAuACQBCAEAKABQBPAKBHAsQACAgAYAZQAZAaAhAEQAJABAIgBQAuA1AdBCQAcBBALBKQAFAjABAlQAEBpgcBvQgKAmgLAZQgQAhgYATQgdAXgwAGIgCAqQgBAegIBCIgIBHQgEAjAGAQQADAKALATQAOAegHAiQgHAigaAVQgZAUgiAAQgIAHgJAEQgWAMgbAAQgeAAgkgQgAPprWQgigUgQgkQgJgUgFgZQg7gThLgGQiLgMjcAXQkpAfg+ACQhUADjSgGQi8gFhrAIQg/AGggABQg3ADgpgHQgigFhYgeQhNgagvgCQgSAAgRADQgSAXgZAHQgNAEgMgBQgRgBgSgKQgdgPgRgdQgOgZgHgiQgFgWgEgqQgGg/ACgkQADg2AVgnQAdg2BAgeQA5gaBHgBQAxgBBQAMQBjAPAeACQBFAFBzgLQCLgMAtgBQBTgBBuAOQBBAJB/AUQDwAjCOgbICYgmQBbgYA+ACQBiADBUA5QBVA5AnBZQAUAuAKA+QAHAmAGBKIADAxQAAAcgFAVQgHAZgPATQgIAMgLAHQgJAGgKAEQgNAEgMAAQgWAAgXgNg");
	this.shape_3.setTransform(132.4,251.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCC99").s().p("AkhXDQgLhKgbhBQgdhCgug0QAhgDAdgaQAkgfAMgtQALgmgEgyQgBgVgJhFQgRh5AAh+QAAhPgDgbQgEgogMgfQAGgJADgKQAMgbAAggQgBg2ghgzIgKgNQALgIAIgLQAPgTAGgaQAGgVAAgbIgDgyQgGhKgHgmQgLg8gTguQgnhZhVg6QhVg5hhgDQg+gChbAYIiYAnQiOAbjxgkQh/gUhBgIQhvgOhSABQgtAAiLANQhzAKhFgFQgegChkgPQhPgMgxABQhHABg5AbQhBAegdA2QgUAmgDA3QgCAjAGA/QAEAqAEAVQAIAjAOAYQARAdAdAQQARAJARACQgHAIgGALQgTAlAXBCIAHASIgDABQgbALgQASQgUAXgGAoQgCANgCA8QgEBAglCeQghCMAFBRQAFBiA1AtQAfAaArgBIALAAQgbAkgWApQhDCAADCLIABAEIiiAAMAAAguFIQRAAQAtAFAyABQARAACagGMA23AAAIBpAHIAXgHIJPAAMAAAAuFg");
	this.shape_4.setTransform(276.9,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bedroom, new cjs.Rectangle(0,0,553.8,399.9), null);


(lib.dashboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.dialogue = new cjs.Text("Blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah", "13px 'Segoe Script'", "#CCCCCC");
	this.dialogue.name = "dialogue";
	this.dialogue.textAlign = "center";
	this.dialogue.lineHeight = 23;
	this.dialogue.lineWidth = 534;
	this.dialogue.parent = this;
	this.dialogue.setTransform(0.5,-71.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990066").ss(11.1,1,1).p("EArNgAFMhWZAAAEgrMAAGMBWZAAA");
	this.shape.setTransform(0,-46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(11.1,1,1).p("EgrMAAAMBWZAAA");
	this.shape_1.setTransform(0,-69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("EgrMAD6IAAnLMBWZAAAIAAHLgEgrMgDcIAAgcMBWZAAAIAAAcg");
	this.shape_2.setTransform(0,-24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EgrMABgIAAi/MBWZAAAIAAC/g");
	this.shape_3.setTransform(0,-59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.dialogue}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dashboard, new cjs.Rectangle(-281.9,-74.5,564,74.6), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgqJyQgshZgThqQgRhcAAhvQAAhUALh5QAjmYBbmSQAAAsAKBUQAKBXABAoQABAUgCAZIAKBqQAIBmABBNQADExAFDSQABANAdBAQAeBAAAANQACBDgZBgQgYBdADBBQhJhBgvhhg");
	mask_1.setTransform(12.3,78.8);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#80353E").s().p("AhXE6QAAkkA2keQAKhMAMgtQAVhUApgDQAngDgDBOQAAARgOBfIhnL3Qg4gagBiGg");
	this.shape_5.setTransform(20.1,70.6);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgqJyQgshZgThqQgRhcAAhvQAAhUALh5QAjmYBbmSQAAAsAKBUQAKBXABAoQABAUgCAZIAKBqQAIBmABBNQADExAFDSQABANAdBAQAeBAAAANQACBDgZBgQgYBdADBBQhJhBgvhhg");
	this.shape_6.setTransform(12.3,78.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,24.5,157.7), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AABBIQi9gBioA8QAUg6gBhKQAAhKgWg6QFhBqFng8QgWApAFBGQAFA+ATAwQiug9i5gBg");
	mask_1.setTransform(36,13.4);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72315A").s().p("AgBAMQgVgCgTgHQgVgFgPgLQASAAAWACIBLAKQAaADAOADQgQAHgYABIgPABIgYgCg");
	this.shape_5.setTransform(56.2,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72315A").s().p("Ag7AHQgegFgcgLIA7ACICwgEQgZALggAGQgjAGgaAAQgeAAgdgFg");
	this.shape_6.setTransform(52.2,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72315A").s().p("ABGASIgkgLQgVgHgMgBQgNgCgUADIgjAGQgWAEgQABQgXAAgOgHQARABATgEQAMgCAXgHQAxgPAZACQARACAVAJIAhAOQAUAHAOABQATACAQgIQgMANgXADIgKAAQgOAAgOgEg");
	this.shape_7.setTransform(37.3,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72315A").s().p("AhrgCQAQgJASgEQAQgEATgBIAiAAIBEACQAkADAhAFQgjAGgiACQgfACglAAIghgBIgiABQgmADgXASQAJgOAQgJg");
	this.shape_8.setTransform(19.8,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#72315A").s().p("AgBAQQgdgFgfgJQgigJgXgMIA8AHIB2AQIA7ALQgbAFgiAAQgggBgbgDg");
	this.shape_9.setTransform(16,8.4);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#522742").s().p("AABBIQi9gBioA8QAUg6gBhKQAAhKgWg6QFhBqFng8QgWApAFBGQAFA+ATAwQiug9i5gBg");
	this.shape_10.setTransform(36,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,72,26.8), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AoKD+Ii/qkIWTNNg");
	mask_1.setTransform(71.4,42.3);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgaA2QgogRgbgfQgdgggHgnQASAiAcAbQAeAaAiANQAhANAoABQAmAAAngNQggAYgsAFIgTABQggAAgegMg");
	this.shape_5.setTransform(41.3,43);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AoKD+Ii/qkIWTNNg");
	this.shape_6.setTransform(71.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,142.7,84.7), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAeAvQh+gVgqhGQB8geBgBEQAvAfAKAcIgZABQglAAgvgHg");
	mask_1.setTransform(13.9,13.2);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00A85A").p("AgIAeIAxgKIgPgpIhAARIgMAuIBBAiIBCgpIgJhPIhHgaIhMAjIgTAuIgIBEIA/AyIBagIIA/hHIAghqIhBgxIiDgXIguApIgeBLIgUBL");
	this.shape_5.setTransform(17.2,13.4);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDF167").s().p("AAeAvQh+gVgqhGQB8geBgBEQAvAfAKAcIgZABQglAAgvgHg");
	this.shape_6.setTransform(13.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,7.8,27.9,10.8), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgBJ4Qg3hSgghoQgbhZgNhuQgKhUgEh5QgOmeArmWQAGAsAUBSQAUBVAGAoQACAUABAYIAXBpQAVBkAKBMQAuFkAXCbQACANAlA8QAlA8ACANQAJBCgNBiQgMBfALBBQhRg4g6hbg");
	mask_1.setTransform(14.7,77.9);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80353E").s().p("AggFEQgkkeAUknQAAhNAHguQAMhWAngIQAmgIAIBOQABASgCBgIgNL9Qg6gTgQiEg");
	this.shape_2.setTransform(16.4,69.2);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgBJ4Qg3hSgghoQgbhZgNhuQgKhUgEh5QgOmeArmWQAGAsAUBSQAUBVAGAoQACAUABAYIAXBpQAVBkAKBMQAuFkAXCbQACANAlA8QAlA8ACANQAJBCgNBiQgMBfALBBQhRg4g6hbg");
	this.shape_3.setTransform(14.7,77.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0.1,0,29.3,155.8), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ADYFtQiRgHhcgKQhWgMgvgCQhRgEhUAVQgnAKgpgMQgqgMgWggQgQgXgFgdQgFgdAIgbQAmh9AHg3QAHg6gPhAIgVhcQgMg1gNglIABgBQBAhaAyADQBLAFAtAhQAVAPALAfQAGASAMAnQACAGgHBWQgGBRAUAhQAfAwA3AuQAjAdBHAuQAHAFARACQAUACAGACQAfAMBfASQBRAOAoAZQBQAyAXAQQA2AmApAnIgogKIgmgJQAWAPAUARQg2gEi5gIg");
	mask_1.setTransform(49.1,37.6);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("AgJBAQgNgGgIgNQgIgNACgPQABgLAGgPIAJgZQACgOgFgKQgGgNgOgBQAHgBAHADQAGAEAEAGQAEAFACAIQABAHgBAIQgBAJgGARQgFAPgBAJQgCALAGALQAGALALAHQAMAIAlAHIgGAAQgeAAgRgJg");
	this.shape_4.setTransform(16.9,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("ABoARQgvgagugRQgtgTg1gMIhMgOIgagDIAaAAIBOAJQAxAJAyAVQAzATArAbQAwAeAiAhQgrgggrgZg");
	this.shape_5.setTransform(76.2,67.3);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("ADYFtQiRgHhcgKQhWgMgvgCQhRgEhUAVQgnAKgpgMQgqgMgWggQgQgXgFgdQgFgdAIgbQAmh9AHg3QAHg6gPhAIgVhcQgMg1gNglIABgBQBAhaAyADQBLAFAtAhQAVAPALAfQAGASAMAnQACAGgHBWQgGBRAUAhQAfAwA3AuQAjAdBHAuQAHAFARACQAUACAGACQAfAMBfASQBRAOAoAZQBQAyAXAQQA2AmApAnIgogKIgmgJQAWAPAUARQg2gEi5gIg");
	this.shape_6.setTransform(49.1,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,98.2,75.3), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("EBehAbZMi9BAAAMAAAg2xMC9BAAAg");
	this.shape_7.setTransform(604.9,175.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EhegAbZMAAAg2xMC9BAAAMAAAA2xg");
	mask_2.setTransform(604.9,175.3);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B0A398").ss(4).p("Am8keQB9A0BkBXQBkBXA8BsQAKgeAegTQAdgUAkABQAICBB8BdQB8BcCWgI");
	this.shape_8.setTransform(1010.2,264.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEAD6").s().p("ACvDKQhihKgahgIGND+IgXABQiJAAhxhVgAjMiCIDAB6IgKAHQgfATgJAeQg3hihXhQgAgMgIQAZgNAdABQACAaAHAagAm/keQB8A0BlBXIASARg");
	this.shape_9.setTransform(1010.5,264.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B0A398").ss(4).p("AhZknIBuBaIhUBbQBkBGAhB0QAhB1gzBn");
	this.shape_10.setTransform(1027.7,70.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFEAD6").s().p("AgmhgQBSBDAdBnQAiB1g0BngAg7hwIAOgOIgpinIBvBaIhGBNIAHAeIgVgQg");
	this.shape_11.setTransform(1027.4,70.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B0A398").ss(4).p("AimkgQCJgHBJgFIivDqQBeAJA0AQQBNAYAiAxQAnA6gaBSQgSA7g5BR");
	this.shape_12.setTransform(753.8,112.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFEAD6").s().p("AhGhCQA6AIAjAMQBOAYAhAwQAoA6gaBTQgTA6g4BSgAh6hHIAhgsIhEiyIDSgNIiOC/IATAxIg0gFg");
	this.shape_13.setTransform(752.9,113.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B0A398").ss(4).p("AghkjIgRDDICyAeIkYFFIFaAO");
	this.shape_14.setTransform(380.9,97.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFEAD6").s().p("AisEMIDnkMIByEagAA7AAIgchGIBNANIgxA5gAhGhXIAQjDIBVDUg");
	this.shape_15.setTransform(383,96.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B0A398").ss(4).p("AlViKIgHDUIEHgyQBZBAB1AWQB1AWBwgc");
	this.shape_16.setTransform(512.3,263.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFEAD6").s().p("AB5B4Qh2gWhYhAIkHAyIAHjUIKyDyQg+APg/AAQgzAAg0gJg");
	this.shape_17.setTransform(512.4,262.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B0A398").ss(4).p("AobjzIJvirImTHdIM5BMIjwEs");
	this.shape_18.setTransform(252.2,92.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFEAD6").s().p("AiPBCIKaA9IjwEsgAkuAzIA7hFIkXjtIJvirIlYGYIBkBUg");
	this.shape_19.setTransform(250.6,93.9);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer_1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFEAD6").s().p("EhegAbZMAAAg2xMC9BAAAMAAAA2xg");
	this.shape_20.setTransform(604.9,175.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(-1,-1,1211.8,352.7), null);


(lib.menuback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933FF").s().p("AggA6QgIgDgIgJQgHgIAAgIQAAgQAEgKQAEgJAIgKQAIgLAHgHIAIgIQAKgLAGgFQAHgEAGAAQADAAADACQADACAAAEQAAAGgEAAIgFACQgMADgNASIgIAJQgHAGgDAFQgEAEgDAJQgDAJAAAIQAAAEACAFQACADAKAHQgCgPAHgMQAHgNALgFQAJgFAWgBQALAAAJAHQAIAHAAALQAAAGgFAHQgGAIgNAIQgMAIgIADQgHADgTAAQgKAAgIgEgAgPAuIAIABIAIAAQAJAAARgMQARgMAAgJQgLgHgOAAQggAAgCAng");
	this.shape.setTransform(394.3,388.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9933FF").s().p("Ag3A5QgLgGAAgFQAAgIALAAQADAAADACQAKAHANAAQAOAAAOgIQAPgJAAgHQAAgKgHgGQgHgFgPgBIgVgCQgIgBgFgDQgFgEAAgDQAAgDADgEIAIgMQAQgWAEgBQAEgCAtgBQAIAAAIgDIAJgCQAGAAAEAEQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAADgDAEQgEAEgGABIgQABIgfgBQgNAAgIADQgFAFgHAKIgDAFIgCACQAFADAPADQASACAKAEQAJADAEAGQAEAHAAAMQAAAHgHAJQgGAJgQAIQgOAIgTAAQgQAAgLgGg");
	this.shape_1.setTransform(381.3,388.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9933FF").s().p("AAJA4QgBgFAAgEQAAgFAJgiIACgGIgBgBQgQAJgIACQgHADgNAAQgFAAgIgIQgIgIAAgFQAAgGACgFQABgGAFgGQAEgFAKgIQAKgJAFgCIAOgFQAKgCAFAAQAFAAAEABQAEACAGAGIAHAGQACAAABAGQAAADgCAEQgJAWgHAYQgGAZAAAIQAAAPgHAAQgFAAgDgGgAgRggQgOAOAAAJQAAAGAEADQAEACAGAAQAHABAJgDIAOgJIAKgHQACgDACgEQADgLACgEQgDgHgNAAQgSAAgPANg");
	this.shape_2.setTransform(366.7,388.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9933FF").s().p("AgbA8QgKgDgEgEQgDgFAAgIQAAgHAFgHQAGgIAIgFIANgJIgEgDQgOgGgGgIQgGgHAAgFQAAgHAFgGQAEgGAPgIIAHgEQAJgFALAAQAEAAAHADQAIADACADQACACACAIIABAHIACgDIACgDQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAADgFAHQgGAIgJAHIgPAKQAJAEAKAKQAJAJAAAJQAAAHgDAHQgDAHgQAEQgQAEgJAAQgHAAgLgCgAgcAoQAAAFAFABQAFADAFAAQATAAAJgEQAJgFAAgFIAAgCQAAgGgIgHQgIgHgIgEQgcAUAAALgAgOgoQgMAJAAAEQAAAIAUALIAGAEQAWgSAAgJQAAgHgEgFQgFgEgHAAQgIAAgMAHg");
	this.shape_3.setTransform(352.7,388.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9933FF").s().p("AggA6QgIgDgIgJQgHgIAAgIQAAgQAEgKQAEgJAIgKQAIgLAHgHIAIgIQAKgLAGgFQAHgEAGAAQADAAADACQADACAAAEQAAAGgEAAIgFACQgMADgNASIgIAJQgHAGgDAFQgEAEgDAJQgDAJAAAIQAAAEACAFQACADAKAHQgCgPAHgMQAHgNALgFQAJgFAWgBQALAAAJAHQAIAHAAALQAAAGgFAHQgGAIgNAIQgMAIgIADQgHADgTAAQgKAAgIgEgAgPAuIAIABIAIAAQAJAAARgMQARgMAAgJQgLgHgOAAQggAAgCAng");
	this.shape_4.setTransform(338.7,388.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9933FF").s().p("Ag6A1QgIgKAAgPQAAgSALgWQAMgWAVgPQAWgOAQABQAMgBAOAJQANAHAGALQAGAJAAARQAAAXggAZQggAagmAAQgPAAgIgLgAgDgrQgHAEgMAMQgLAKgIAOQgHANAAANQAAAQAIAFQAIAEAJAAQALAAAQgKQASgJAOgOQAPgOAAgIIgCgMQgBgIgCgCIgIgIQgFgGgEgBQgCACgEAAIgEgCQgDgCgCAAQgMAAgFADg");
	this.shape_5.setTransform(324.6,388.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9933FF").s().p("AggA6QgIgDgIgJQgHgIAAgIQAAgQAEgKQAEgJAIgKQAIgLAHgHIAIgIQAKgLAGgFQAHgEAGAAQADAAADACQADACAAAEQAAAGgEAAIgFACQgMADgNASIgIAJQgHAGgDAFQgEAEgDAJQgDAJAAAIQAAAEACAFQACADAKAHQgCgPAHgMQAHgNALgFQAJgFAWgBQALAAAJAHQAIAHAAALQAAAGgFAHQgGAIgNAIQgMAIgIADQgHADgTAAQgKAAgIgEgAgPAuIAIABIAIAAQAJAAARgMQARgMAAgJQgLgHgOAAQggAAgCAng");
	this.shape_6.setTransform(310.9,388.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9933FF").s().p("Ag2A/QgCgEgBgCQAAgFAJgDIAPgDQATgEAEgCIAEgoIAFgnQgFAAgJAHQgSALgNAAQgDAAAAgGQgBgDACgCIANgGQAMgFARgKQAQgLACAAQADAAACAEQACAEAAAEQAAACgDACQgJAogBAUQgBAWAAADQAIAAAMgEQATgFALAAQACAFABADIgBADIgHADQgFACgNACQgSACgHADIABAGQAAAEgLAAQgCAAgCgDQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgLACIgKADQgMAEgEAAQgFAAgCgCg");
	this.shape_7.setTransform(297,388.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9933FF").s().p("AAYAoQgEgJAAgTIAAgDIABgDQgMAUgMALQgMALgLAAQgGAAgGgHQgHgIAAgOQAAgNAGgWQAFgTAAgJQADgFAGgBQADAAADAEQACACAAADQAAAGgEAMQgJAXAAARQAAAPAHAAQAJAAAOgPQANgQAKgaQAEgLACgEQADgDAEAAQAGAAAAAIIgCAIQgFAUAAARQAAAVAHAHQAEAEAAACQAAACgEACQgEACgDABQgHAAgEgLg");
	this.shape_8.setTransform(284.1,390.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9933FF").s().p("AguBOQgDgDAAgCIADgQQADgSADgeQAHhGAEgJQAEgJAHAAQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAQABADAAAEQAAAHgGAgQgHAfgCAfIAQgPIAUgRQAVgWAJAAQAIAAAAAHQAAAIgIAEQgJAEgPAKQgPALAAAFQAAACAKAMQALAMAIAGQAIAFAIAAIADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAEgFAEQgFAFgJAAQgFAAgGgEQgFgEgOgRIgNgQIgFgCIgGAEQgGAFAAADIgBATIAAAEQAAAEgDACQgDADgEAAQgEAAgCgCg");
	this.shape_9.setTransform(265.5,387.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9933FF").s().p("AgjArQgIgKAAgOQAAgYAQgWQARgYAVAAQAOAAAKALQAJAMAAAQQAAAXgTAUQgTAVgTAAQgNAAgJgJgAgPgRQgMARAAAQQAAAKAFAFQAEAHAGAAQAMgBAPgPQAOgPAAgRQgBgMgFgHQgFgHgJAAQgOAAgKATg");
	this.shape_10.setTransform(254.2,390);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9933FF").s().p("AgOBMQgCgGAAgOQgBgfAIgtQAIguADgIQAFgHAEAAQAHAAAAAIQgBAIgHAcQgGASgCAVQgCAWgBAMQABAPABAQIAAAEQAAAEgCAEQgDADgEAAQgEAAgCgGg");
	this.shape_11.setTransform(246.7,387.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9933FF").s().p("AgfAvIgahCIgMgeQABgGADgDQACgFAEAAQAIABADASQADASAgBJIAIgNQASgcAHgPQAhg8AKAAQAHAAAAAIIgBADIgGAJQgSAagRAcIgVAjQgKAPgBAHQgBADgEADQgFACgFAAQgDAAgJgXg");
	this.shape_12.setTransform(237.7,387.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9933FF").s().p("Ag4AlIABgNQAFgbAAgfQAAgEADgEQADgEADAAQAFAAACADQACADAAAJQAAAJgGAcIgCANIABABQABAAAMgVQAMgXAIgJQAIgJAKAAQAJAAAFAIQAFAHADAUQACAWACAGQACAFAFAAIAHgCIABAAQAEAAAAAFQAAAEgFAEQgGAFgHAAQgIAAgEgGQgFgHgCgbQgDgagIAAQgFAAgFAGQgFAHgMAVQgQAdgEAEQgFAEgDAAQgKAAAAgKg");
	this.shape_13.setTransform(216.1,390.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9933FF").s().p("AggAtQgIgJAAgPQAAgaARgYQASgYAVAAQAHAAAEAFQAEAEAAAHQAAAOgOANQgOAMgWANQgFACAAAEQAAAIAEAFQAFAEAJAAQATAAAUgWQADgDACAAQADAAAAAFQAAAJgRAOQgQANgRAAQgPAAgIgJgAgHgaQgLAMgEARQAmgWAAgOQAAgGgFAAQgJAAgJANg");
	this.shape_14.setTransform(204.6,389.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9933FF").s().p("AghBPQgFgEgBgFQAAgFgCgCQgEgEAAgEQAAgJAEgbIAKg3QAFgcACgGQACgHADgCQADgCAEAAQAHAAAAALQAAAKgIAUQgGASgJAyQALgWARgMQAPgNAOAAQAHAAAFAGQAFAHAAAJQAAAdgVAZQgWAZgXAAQgHAAgGgDgAgFARQgTAVgHAVQAFAJAHAAQALAAAKgJQAMgJAJgQQAIgQAAgKQAAgFgBgDQgCgDgDAAQgNAAgRAUg");
	this.shape_15.setTransform(194.4,386.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9933FF").s().p("AAYAoQgEgJAAgTIAAgDIABgDQgMAUgMALQgMALgLAAQgGAAgGgHQgHgIAAgOQAAgNAGgWQAFgTAAgJQADgFAGgBQADAAADAEQACACAAADQAAAGgEAMQgJAXAAARQAAAPAHAAQAJAAAOgPQANgQAKgaQAEgLACgEQADgDAEAAQAGAAAAAIIgCAIQgFAUAAARQAAAVAHAHQAEAEAAACQAAACgEACQgEACgDABQgHAAgEgLg");
	this.shape_16.setTransform(182.6,390.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9933FF").s().p("AggAtQgIgJAAgPQAAgaARgYQASgYAVAAQAHAAAEAFQAEAEAAAHQAAAOgOANQgOAMgWANQgFACAAAEQAAAIAEAFQAFAEAJAAQATAAAUgWQADgDACAAQADAAAAAFQAAAJgRAOQgQANgRAAQgPAAgIgJgAgHgaQgLAMgEARQAmgWAAgOQAAgGgFAAQgJAAgJANg");
	this.shape_17.setTransform(172.1,389.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9933FF").s().p("Ag8A2QAAglANg9IAAgDIAAgCQgEgGAAgCQAAgDADgDQAEgDADAAIAIABQAbgEALAAQAUAAAMAJQALAJAAAOQAAAOgMANQgMALgTAHQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAACAUAOQATAPAQAKQAEADAAAEQAAADgDADQgDADgDAAQgFAAgMgJQgMgJgNgLQgbgXgDAAQgGgBgDgBQgDgCAAgEQAAgDAEgDQADgCAFAAIAFABIAFAAQAHAAARgLQASgLAAgPQAAgIgIgFQgIgGgMAAIgSABIgMADQgCABgCADIgFAZIgGAmQgCASAAAJIABAMIABAHQAAADgDADQgDADgEAAQgJAAAAgQg");
	this.shape_18.setTransform(160.7,388.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9933FF").s().p("AgiCfIgCgwIgCgwIgBgwIAAg0IAAhBIgEgBIgEAAIgRgFIgQgHQAIgFAIgCIARgEIAEgBIAEgBQAAgHACgLQADgLAFgNQADgIAGgJQAGgJALgJQAIgHANgFQAOgFANABQAOAAAKAKQAIAHACAKQACAJAAAIIgBAKQgHgOgLgHQgKgHgMACQgIABgFAFIgIAHQgIAKgFAOQgEANgCAOQAJABAJACIAQAEIARAHIgRAIIgQAEIgKABIgIABIAAAYIACAPQAEAigBAqQAAArgIAzQgGAhgIAdQgIAdgJAYQABgkgBgcg");
	this.shape_19.setTransform(345.5,111.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9933FF").s().p("AgiCfIgCgwIgCgwIgBgwIAAg0IAAhBIgEgBIgEAAIgRgFIgQgHQAIgFAIgCIARgEIAEgBIAEgBQAAgHACgLQADgLAFgNQADgIAGgJQAGgJALgJQAIgHANgFQAOgFANABQAOAAAKAKQAIAHACAKQACAJAAAIIgBAKQgHgOgLgHQgKgHgMACQgIABgFAFIgIAHQgIAKgFAOQgEANgCAOQAJABAJACIAQAEIARAHIgRAIIgQAEIgKABIgIABIAAAYIACAPQAEAigBAqQAAArgIAzQgGAhgIAdQgIAdgJAYQABgkgBgcg");
	this.shape_20.setTransform(328.3,111.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9933FF").s().p("AgtCeQgUgIgPgLQgPgMgJgKIgNgPIgMgRQgHgKgHgQQgHgPgEgTQgFgUACgWQACggAPgcQAOgcAWgUQAWgUAWgIQAVgJARgCQAQgCAGAAQAcAAAbALQAbAKAWAUQAXAUAOAcQAOAcADAgQABAWgEAUQgEATgHAQQgHAPgIALIgLAQIgNAPQgJAKgQAMQgOALgVAIQgUAIgZABQgZgBgUgIgAgoiIQgTAMgNATQgOATgHAXQgHAXABAXQABAUAIAUQAHAVAOARQANARASALQASAKAVAAQAVAAASgLQARgKAOgRQANgSAHgUQAIgUABgUQABgXgHgXQgHgXgOgTQgOgTgTgMQgSgLgWgBQgVABgTALg");
	this.shape_21.setTransform(301.8,106.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9933FF").s().p("AgYBzQAJgdAGggIADgUIgJgIIgJgJQgUgVgJgVQgKgVgEgOQgKgigCgbQgBgdACgTQAFARAJAXQAIAWAOAaQAFAKAKAQQALARARAUIAFAFIAHgWIAJgdIAJgbIAIgSQAFgLAKgQQAKgPAQgSIgFAZIgGAgIgQBJQgHAfgHAWQgHAYgIAUQgJAVgPAdQgRAdgbAhQALgaAJgdg");
	this.shape_22.setTransform(265.3,115.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9933FF").s().p("ABZB5IgGgBIgEgBIgGgCIgHgEIgGgEIgFgEIgBgBIgBgCIgHAEIgHAEQgSAIgVACQgVACgXgHQgSgGgPgLQgOgLgKgOQgJgPgFgPQgFgPgBgPIAAgRQABgMAEgPQAEgPAJgQQAJgQAQgNIAHgFQAHgFANgGQANgFASgEQASgEAVABIAVACQAOADASAGIAKAEIAIAEIgKAeIgFAYIgDALIgCAMQgCATABAMIACARIAEAZQAEAPAHAOQAIAPAPAMIAHAFIAGADIgKADIgJACIgIACIgGAAgAgLhXQgNAHgIAIQgJAHgCAEQgLAOgFATQgFASABAUQAAAUAJATQAJASATAMQAMAIAPADQAPADAQgCIAGgBIAFgBQgGgLgFgQQgFgQgCgUQgDgaAFgXQAEgXAHgRQAHgQAGgKIgNgEQgIgBgKAAQgSABgNAGg");
	this.shape_23.setTransform(241.8,111);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9933FF").s().p("AhHCiQgOgDgHgEIgJgGQgJgHgGgNQgGgMgEgXQgDgTgCgWQgCgWAAgdIACgeIACgaIADgaQADgUADgMQACgNAFgIQADgIAHgFIAKgHQAIgEAOgDQAJgCAVgBQAVgBAZAFQAbAFAaAPQAaAPAVAdQATAdAHAiQAGAggGAhQgHAigTAdIgHAIQgHAJgOALQgPAMgVALQgVAKgbAFQgPACgQAAQgPAAgSgCgAgkhxIgSACQgHAUgGAdQgHAegBAkQAAAfADAZQAEAaAFASIALAEQAJADAOABQANABAQgDQAQgCARgKQARgKANgPQAMgPAHgSQAHgRAAgTQAAgZgJgUQgJgVgQgPQgPgPgSgJQgRgIgOgCQgMgCgLAAIgEAAg");
	this.shape_24.setTransform(213.2,106.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9933FF").s().p("AgEB5QgQgBgNgDQgVgEgPgGQgPgHgKgHQANAFAQAEQAQADASAAQASABAOgEQAQgDAKgHQALgHAGgKQAFgJAAgLQAAgIgCgGIgEgGQgGgJgHgEQgHgDgDAAIgfgHIgYgHIgKgDIgMgEIgNgHQgIgFgHgHQgIgJgEgIQgEgJAAgIQAAgRALgOQALgPAVgIQAPgHAQgCQARgCAOAAQAQABAOADQAVAEAPAGQAPAHAKAHQgNgFgRgEQgQgDgRAAQgSgBgPAEQgPADgLAHQgKAHgGAKQgGAKAAALQAAAHADAGIABADIADAFQAEAGAIAEQAJAEAIACIANADIAbAGIARAFQAKACALAGQALAGAKALIAKAOQAFAJABALQAAARgLAOQgLAOgWAJQgOAGgQACQgOACgNAAIgFAAg");
	this.shape_25.setTransform(465.3,56.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9933FF").s().p("AgRAWQAEgPgBgKIgEgRIgDgMQAAgFACgGQAEgGAIgEQAHgEAJAAQAJAAAHAFQAHAGABAHQACAIAAAIIgCALQgDAQgKAMQgJANgLAJQgLAIgKAFIgNAHQANgUAEgQg");
	this.shape_26.setTransform(448.7,36.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9933FF").s().p("ABIBVQAFglgHgaQgIgZgRgLQgKgGgPgBQgOgBgMAEQgOAEgJAKQgIAHgCAMQgDALAAAPQAAAXACAfQADAgAHAoQgTgQgNgUQgNgUgIgWQgJgXgDgXQgDgYABgXQADgYAGgXQAHgXALgVQAMgVAPgSQAQgSAVgOIgMApIgKAsIgGAcQAUgPAVgEQAVgEAUAIQAPAHAJAKQAJALAFAJIAGAPQAEANACAMQAAANAAATIgBATQgBAMgEAOQgFAWgKAUQgKAVgOASQAQgtADglg");
	this.shape_27.setTransform(432.5,51.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9933FF").s().p("AgcBzQgRgFgPgMQgOgLgJgOQgKgPgEgPQgFgPgBgQQgCgdALgcQALgcAWgTQAPgNARgHQARgGAQgBQARgCAPADQAXAFAQAKQARAKALAMQgPgIgRgEQgSgEgSACQgTACgQAIQgQAJgLAOQgKAOgFATQgGATABATQABAVAJATQAIASASANQAMAHAPADQAPADAQgCQAQgBAOgGQAPgGAMgIQgIALgNALQgNALgRAIQgRAHgVACIgJABQgQAAgSgGg");
	this.shape_28.setTransform(409.3,56.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9933FF").s().p("AAgCnIgHgCIgGgCIgHgDIgIgFIgFgFIgFgGIgFgHQgLgSgGgSQgFgTgCgTQgBgTAAgSQABgTADgRQADgRAFgSIgEAAIgFgBIgQgEIgRgIQAJgEAIgDIAQgEIASgDIABgEIACgFQALgZAPgWQAPgWAVgQQgJAZgIAXQgHAYgFAXIAFABIAGABIARAEIAQAIQgIAEgIADIgRAEIgRADIgFAkIgDAjQgBAYACAYQACAXAIAUIACAEIACAEIACADIADAEIAFAFQAEAEAFADQAHAFAHABIAMAAQgCADgGAFQgGAEgLACIgHABIgDAAg");
	this.shape_29.setTransform(389.3,51.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9933FF").s().p("ABZB5IgGgBIgEgBIgGgCIgHgEIgGgEIgFgEIgBgBIgBgCIgHAEIgHAEQgSAIgVACQgVACgXgHQgSgGgPgLQgOgLgKgOQgJgPgFgPQgFgPgBgPIAAgRQABgMAEgPQAEgPAJgQQAJgQAQgNIAHgFQAHgFANgGQANgFASgEQASgEAVABIAVACQAOADASAGIAKAEIAIAEIgKAeIgFAYIgDALIgCAMQgCATABAMIACARIAEAZQAEAPAHAOQAIAPAPAMIAHAFIAGADIgKADIgJACIgIACIgGAAgAgLhXQgNAHgIAIQgJAHgCAEQgLAOgFATQgFASABAUQAAAUAJATQAJASATAMQAMAIAPADQAPADAQgCIAGgBIAFgBQgGgLgFgQQgFgQgCgUQgDgaAFgXQAEgXAHgRQAHgQAGgKIgNgEQgIgBgKAAQgSABgNAGg");
	this.shape_30.setTransform(367.5,56.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9933FF").s().p("ABIBgIgDgqIgBgiIgDgXQgCgLgGgJIgHgKQgEgHgGgFQgGgFgJgBQgIgBgGADQgHAEgEAFIgKAJQgIAJgFAKQgGAJgDAIIAAAHIABAHQAAAUgDAUQgEAVgLAUIgDAEIgFAFIgDADIgHAEIgEACIgFACIgFABIgHgBQgIgBgEgDIgGgGIAJAAIAKgEIAGgFIAEgEIACgDIABgCIACgDIACgDQAFgOABgRQACgRgCgSIgCgiQgDgSgEgRQgDgSgGgRQgFgRgHgSQAPALALAQQALAQAIASIAFALIADAKIAGgQIAGgSQANgZAQgNQARgMAUACQAMACAJAHQAKAHAGAGIAHAIQAEAGAFAKQAGALAFAPQAGAaAAAVQAAAWgEAQIgGAYIgKAbIgKAWIgFAKIAAgZg");
	this.shape_31.setTransform(341.7,56.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9933FF").s().p("AgEB5QgQgBgNgDQgVgEgPgGQgPgHgKgHQANAFAQAEQAQADASAAQASABAOgEQAQgDAKgHQALgHAGgKQAFgJAAgLQAAgIgCgGIgEgGQgGgJgHgEQgHgDgDAAIgfgHIgYgHIgKgDIgMgEIgNgHQgIgFgHgHQgIgJgEgIQgEgJAAgIQAAgRALgOQALgPAVgIQAPgHAQgCQARgCAOAAQAQABAOADQAVAEAPAGQAPAHAKAHQgNgFgRgEQgQgDgRAAQgSgBgPAEQgPADgLAHQgKAHgGAKQgGAKAAALQAAAHADAGIABADIADAFQAEAGAIAEQAJAEAIACIANADIAbAGIARAFQAKACALAGQALAGAKALIAKAOQAFAJABALQAAARgLAOQgLAOgWAJQgOAGgQACQgOACgNAAIgFAAg");
	this.shape_32.setTransform(317.9,56.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9933FF").s().p("AgnBTQgMgUgHgVQgHgVgBgUQgCgUAEgUQAEgUAJgTQAKgSAWgOIAGgEIAHgCIAGgCIAIgBQAIgBAIACQAIABAJADQAGABAHAFQAIAEADAJQADAGgBAGIgBAJQgSgIgLgCQgMgCgIABQgHACgDACQgLAGgGAOQgGANgCASQgCARAAASIABAkQABAZADAUIAHAiQgSgRgNgUg");
	this.shape_33.setTransform(298,56.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9933FF").s().p("AgPB2QgYgHgTgOQgUgPgMgVQgMgTgEgXQgDgVAEgWQAEgWALgUQAMgTARgNQAUgOAWgFQAUgEASACQATABALAFQALAEAIAGIAMAJIAFAEQAGAGAGAIQAFAHADAKQAEALgBALQgBALgEAIQgEAJgFAGQgKALgMAIQgMAIgMAEQgNAEgOACQgNABgMgEQgSgEgOgLQgOgKgKgOIgCAGIgBAEQgBAIACAHQABAIADAIQADAHAFAHQAFAHAHAHQAOAMASAIQAQAIAUgBQAUAAAUgIQAUgIASgPIgHALQgFAIgJAKQgJAKgNAJQgNAIgSAFQgMADgNAAQgLAAgNgDgAgChGQgUADgOAOQgOAOgGAVIALAJQAIAEALAEQALADAOAAQAPAAAOgEQAPgGAKgIQAKgJAAgJQAAgKgKgJQgKgKgPgFQgKgDgKAAIgKABg");
	this.shape_34.setTransform(277.4,56.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9933FF").s().p("ABJBVQAEglgIgaQgHgZgRgLQgKgGgOgBQgPgBgMAEQgOAEgKAKQgHAHgDAMQgCALAAAPQgBAXADAfQACAgAIAoQgTgQgNgUQgNgUgJgWQgHgXgEgXQgDgYACgXQABgYAIgXQAGgXAMgVQALgVAQgSQAQgSAUgOIgMApIgLAsIgEAcQATgPAUgEQAXgEAUAIQAOAHAJAKQAJALAEAJIAHAPQAFANAAAMQACANgCATIAAATQgBAMgDAOQgGAWgKAUQgKAVgPASQARgtAEglg");
	this.shape_35.setTransform(253.9,51.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9933FF").s().p("AAgCnIgHgCIgGgCIgHgDIgIgFIgFgFIgFgGIgFgHQgLgSgGgSQgFgTgCgTQgBgTAAgSQABgTADgRQADgRAFgSIgEAAIgFgBIgQgEIgRgIQAJgEAIgDIAQgEIASgDIABgEIACgFQALgZAPgWQAPgWAVgQQgJAZgIAXQgHAYgFAXIAFABIAGABIARAEIAQAIQgIAEgIADIgRAEIgRADIgFAkIgDAjQgBAYACAYQACAXAIAUIACAEIACAEIACADIADAEIAFAFQAEAEAFADQAHAFAHABIAMAAQgCADgGAFQgGAEgLACIgHABIgDAAg");
	this.shape_36.setTransform(234.5,51.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9933FF").s().p("AAKCmIgIgDIgEgDIgGgEIgFgEQgRgSgGgVQgGgUgBgUQAAgVAEgUQAEgUAJgTQAJgTAOgSQAMgRATgOQgIATgGATQgGASgDASQgEARgBASIgBAkQAAAVACAPQADAQAJANQAIAKAIAGIAPAKIgNAEQgFACgGAAIgKgBgAgWhxQAAgJADgNQACgMAJgJIAGgFQACgCAEgCQAFgBAFABQAFABAEAGQAEAFAAAHIgDAIIgEAEIgDACIgGADIgGAEIgEADIgHAHIgHAHIgIAJIgBgOg");
	this.shape_37.setTransform(221.3,51.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9933FF").s().p("ABIBgIgDgqIgBgiIgDgXQgCgLgGgJIgHgKQgEgHgGgFQgGgFgJgBQgIgBgGADQgHAEgEAFIgKAJQgIAJgFAKQgGAJgDAIIAAAHIABAHQAAAUgDAUQgEAVgLAUIgDAEIgFAFIgDADIgHAEIgEACIgFACIgFABIgHgBQgIgBgEgDIgGgGIAJAAIAKgEIAGgFIAEgEIACgDIABgCIACgDIACgDQAFgOABgRQACgRgCgSIgCgiQgDgSgEgRQgDgSgGgRQgFgRgHgSQAPALALAQQAMAQAHASIAFALIADAKIAGgQIAGgSQANgZAQgNQARgMAUACQAMACAJAHQAKAHAGAGIAHAIQAEAGAFAKQAGALAFAPQAGAaAAAVQAAAWgEAQIgGAYIgKAbIgKAWIgFAKIAAgZg");
	this.shape_38.setTransform(202.6,56.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9933FF").s().p("AgFCnQgUgBgSgEQgagGgUgJQgUgJgMgKQARAIAVAEQAVAFAWAAIAbAAQANgBAMgEQAMgEAMgJIAHgGIALgMQAGgHADgJQAEgIgCgKQgCgLgQgLQgPgLgcgNIhGgdIgUgJQgMgHgMgOIgHgJQgFgHgEgJQgEgKAAgMQgBgXAPgUQAOgTAcgNQATgIAVgDQAVgDATAAQAVABARAEQAbAGAUAJQATAJANAKIAAAAQgOgIgVgFQgVgGgaACQgUACgTAHQgSAHgQALQgPAKgIAMQgIALABALIABADQAFANANAIQANAIAVAIIAuASIAfAOQALAFAJAHQAHAFAKAKQAKAJAIAOQAIANABARQAAAQgIANQgHANgKAJQgKAKgJAGQgJAGgDABQgTAIgVADQgSADgSAAIgFAAg");
	this.shape_39.setTransform(175.8,51.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9933FF").s().p("AgPB2QgYgHgTgOQgUgPgMgVQgMgTgEgXQgDgVAEgWQAEgWALgUQAMgTARgNQAUgOAWgFQAUgEASACQATABALAFQALAEAIAGIAMAJIAFAEQAGAGAGAIQAFAHADAKQAEALgBALQgBALgEAIQgEAJgFAGQgKALgMAIQgMAIgMAEQgNAEgOACQgNABgMgEQgSgEgOgLQgOgKgKgOIgCAGIgBAEQgBAIACAHQABAIADAIQADAHAFAHQAFAHAHAHQAOAMASAIQAQAIAUgBQAUAAAUgIQAUgIASgPIgHALQgFAIgJAKQgJAKgNAJQgNAIgSAFQgMADgNAAQgLAAgNgDgAgChGQgUADgOAOQgOAOgGAVIALAJQAIAEALAEQALADAOAAQAPAAAOgEQAPgGAKgIQAKgJAAgJQAAgKgKgJQgKgKgPgFQgKgDgKAAIgKABg");
	this.shape_40.setTransform(137.7,56.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9933FF").s().p("ABJBVQAEglgHgaQgHgZgSgLQgKgGgPgBQgNgBgNAEQgOAEgKAKQgHAHgDAMQgBALgBAPQAAAXACAfQACAgAIAoQgTgQgNgUQgNgUgJgWQgHgXgEgXQgDgYACgXQABgYAHgXQAHgXALgVQAMgVAPgSQAQgSAVgOIgMApIgKAsIgGAcQATgPAWgEQAWgEATAIQAPAHAJAKQAJALAEAJIAHAPQAFANABAMQABANgBATIgBATQgBAMgEAOQgFAWgKAUQgKAVgOASQAQgtAEglg");
	this.shape_41.setTransform(114.2,51.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9933FF").s().p("AA5CnIgIgCIgIgCIgJgDIgJgFIgHgFIgHgGIgFgHQgNgSgGgSQgHgTgCgTQgCgTABgSQAAgZAFgTQAGgUAGgQIALgbIAOgaIANgUIgOADIgQACQgXABgQgCIgbgFQgMgCgRgGQgPgFgUgKQARgFAQgCIAhgFIAggCIAggBIAnABIAbACIAYADIAOADIAPADIAMADIgdAJIglAIIgLAiIgNAtQgGAegCAVIgDAgQgCAbACARQACARADAKQADALADAGQAHAOAIAHQAGAHAFACQAKAFAIABQAIABAGgBQgDADgHAFQgIAEgMACIgIABIgEAAg");
	this.shape_42.setTransform(88.3,51.7);

	this.instance = new lib.pillar();
	this.instance.parent = this;
	this.instance.setTransform(65.5,199.7,0.739,0.739,0,0,0,88.2,271.5);

	this.instance_1 = new lib.pillar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491,199.1,0.739,0.739,0,0,0,88.2,271.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990066").s().p("Egq5AfUIAAoAQAdgUAVgMIAVgMQAigRA3gUIBaggQA0gUA9gfQAogVBFgmQCfhaBwhIQCPhdBuheQBuhcB4iBQBQhXCCiaQGgntERlzQBeh/AxhSQBHh3AihtQAPgyAOhGIAWh7QBImTCal+QAOgjALgSQAQgcAVgQQAYgSAkgIQAZgFAsgCQBmgEA1AFQBWAIA8AiQAmAWAkAlQAbAbAkAuQBcB2AqBhQAdBEATBYQANA+AOBkQAkEMAfGgQAJCDAQBEQAOA3AcBAQASApAlBKICuFdQA/B9AgA3QAkA9A7BWQBrCeBxCSQAyBABlB+IGZH/QArA1ARAUIAeAhQARATARAQQAjAgBNA5QDdCjCWBMQAgAQAfAOg");
	this.shape_43.setTransform(270.6,203.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("EgmKAYLQgbgHgLgdQgMgeAUgRQAHgHANgEIAWgIQAagKAfgfQAqgrAJgHQAPgLAmgVQAjgTAQgPQAYgVAVgmIAihDQAVgmAmgvIBChQQCAidBtjeQBNidBikDQAfhUAOgtQAXhJAIg8QAFgpAChAIADhqQAGh+AnhKQASgjAVgMQANgIAQABIAFAAQAHgOAQgTQATgZALgKQASgTATgIQAJgEAPgEIAYgGQAWgHAmgTQAlgTAWgOQALgHAegXQAZgUARgJQAKgGAKgDQAZhTgFhKQgEgfAAgPQgBgbAHgSQAIgXAXgKQAYgMARANQANAJAEATQADAMAAAXQgCB7gMBBQgWBvhSCSQguBRhfCjQgyBjg+CxQhJDRgeBGQhfDfiqDbIAAABIApgMQA1gXA6gbIA6gdIA4gkQBUg4AugjQBGg0AygzQA8g8A0hLQAIgeAGghQARiTALhGQAJg8AYhlQARhIARghQANgZAZgfIAsg1QAtg6AxhrIAZg1IAJhDQAHgsANgeQAQgjAjgoIA/hEQBOhXA2h/QAihWATgpQAihIApgqQAqgrB0g5QBegvAugqIB0AAQABANgFANQgJAXgZAUQgPANghASIidBXQgrAYgUAOQgjAXgVAZQgWAYgSAkQgLAWgSAsQgpBkggA8QgtBVg0A7IgoArQgWAZgNAUIgFAJQANASgDAVQgDAXgQAbIgfAtQgFAHgFAKIhBELQggCBgRA+QgeBpghBPQg1CBhPBxQgTBGgdAxQgoBDhLA5Qg2AqhcAyQjPBxjZBXQgaAKgVABQgWAKgRAJQgXANgJAEIgNAFQhEBthLBWIg+BGQgiApgTAjQgMAYgVAyQgVArgXAXQgTARgrAWQgtAXgSAOQgQANgWAZIgkApQgVAVgXAKQgSAIgRAAQgJAAgIgCgA4gFuIg2CBQA0hQAtheQAghCAhhRQgIgHgEgKQgFgKgCgRQgeBcg7CQgEAlJARLQiLhdhDgzQhvhWhIhWQhJhXg6h2QilixiCjMQgog/gXguQgfg9gNg3QgJgpgGhCQgHhXgDgVQgOhigvh5QgSguhKinQg7iCgYhSQgkh3AChnQALhzACg4QAChjglg8IgRgaQgngdgwgOQgbgIgLgGQgTgKgFgQIDOAAQAMAJAKAOIADAEQAUASARAWQAdAjAZAzQAQAfAaA/QCeGABYD8QB7FgBCEtIAmCyQAXBoAYBKQAdBYApBRQAnAqApApQARARAHAJQAMAPAEAPQAFASgGARIgEAIIAVAbQCQCvC+BZQAfAPAKAGQAXANAMAQQAOATAAAYQgBAagSAMQgLAHgOAAQgbAAgmgZg");
	this.shape_44.setTransform(257.2,149.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("EArrAgQQg1gSg2gYQgggOgggQQiVhMjdiiQhNg5gjghQgRgPgSgTIgegiQgRgTgrg2ImZn+Qhlh+gxhAQhyiThridQg7hXgjg9Qggg3g/h9IivldQglhKgSgoQgchBgNg3QgRhDgJiEQgfmfgkkNQgNhjgOg+QgThYgdhEQgqhihch1QgjgugbgbQglgmgmgVQg7gihWgJQg2gFhmAFQgrACgYAFQgmAHgYATQgUAQgRAcQgKASgOAjQiaF+hIGTIgWB6QgOBGgQAzQghBshIB3QgxBShdB/QkRFzmgHtQiCCbhRBWQh3CBhuBdQhvBdiPBdQhvBJigBZQhEAngpAUQg8Afg0AUIhbAhQg2ATgiASIgWAMQgUAMgeATMAAAg34MAobAAAQgtAqhfAuQhzA6grArQgpApghBIQgUAqgiBWQg2B/hNBXIg/BDQgkAogPAjQgOAegHAtIgJBDIgYA1QgxBqguA7IgrA1QgaAfgNAZQgRAggRBIQgXBmgKA7QgKBIgRCSQgGAhgIAeQg0BMg8A8QgzAyhGA1QguAihUA4Ig3AkIg7AcQg6Acg1AWIgpAMIAAAAQCrjbBfjfQAehGBJjSQA9ixAzhjQBfiiAuhSQBSiRAVhwQAMhAACh7QAAgXgDgMQgEgTgMgJQgSgNgYALQgWALgJAWQgHATABAaQABAQADAeQAGBKgaBTQgJADgLAGQgQAKgaATQgdAXgLAHQgWAPglASQgmAUgXAHIgYAGQgOADgJAFQgTAIgTASQgKALgUAYQgPAUgIAOIgEgBQgQAAgOAIQgVAMgSAiQgmBLgGB+IgEBpQgBBAgGAqQgIA9gWBIQgOAtggBVQhiEDhMCbQhtDeiACeIhCBQQgmAvgVAmIgjBDQgVAmgXAVQgRAOgjAUQgmAUgPAMQgIAGgrAsQgeAfgaAKIgWAHQgNAFgIAGQgTASALAdQALAdAbAHQAZAGAbgLQAYgLAVgVIAkgoQAWgaAQgNQARgOAugXQAqgVATgSQAYgWAUgsQAVgyANgXQASgjAjgpIA+hHQBLhVBEhuIAMgFQAKgEAWgMQASgKAWgKQAUAAAagLQDahWDPhyQBcgyA2gpQBLg5AnhCQAegyAShFQBPhyA1iAQAihRAdhpQASg9AfiBIBCkLQAEgKAFgIIAfgtQARgbACgWQADgWgNgSIAFgIQANgVAXgZIAngqQA1g7AthWQAgg7AphkQASgtALgVQASgkAVgYQAWgZAigXQAUgOAsgYICdhXQAhgTAQgMQAZgUAIgYQAFgMgBgNINvAAQAGAPATAKQAKAGAbAIQAwAPAoAdIARAZQAlA8gDBjQgBA5gLBzQgDBnAkB2QAZBTA6CCQBLCmASAuQAvB5ANBjQADAUAIBYQAFBCAKApQANA3AeA9QAXAuAoA/QCDDNClCwQA6B2BJBXQBHBVBvBWQBDA0CMBcQA6AnAfgVQATgMAAgaQABgYgPgTQgMgPgWgOQgKgGgfgOQi/haiQivIgVgaIAEgJQAHgRgFgRQgFgPgMgQQgHgJgRgRQgpgogngpQgphRgdhZQgYhJgXhoIgmi0QhBkth8lgQhYj7iemAQgag/gPgfQgagzgcgkQgSgWgTgSIgDgEQgKgNgMgJIcbAAMAAABAlIgKgDgA7giYQA7iQAdhbQACAQAFALQAFAJAIAHQghBRggBDQguBegzBQIA2iCg");
	this.shape_45.setTransform(276.5,201.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.instance_1},{t:this.instance},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.menuback, new cjs.Rectangle(-4,-5,561,413.5), null);


(lib.LowerLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["D4_atlas_"],1)).p("AAFslQgpgDg0AfQgwAcgdAnQAJIzAMGJQAMGnAKAsQAWBeCEgBQAzAAAogQQApgRABgWQAEg0gN1tQgmg7gjgbQgigagsgDg");
	this.shape.setTransform(10.1,49.2,0.611,0.611);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["D4_atlas_"],1), null, new cjs.Matrix2D(0.998,0,0,1,-54.6,716.4)).s().p("Ah6LJQgKgsgMmnQgMmJgJozQAdgnAwgcQA0gfApADQAsADAiAaQAjAbAmA7QANVtgEA0QgBAWgpARQgoAQgzAAIgCAAQiCAAgWhdg");
	this.shape_1.setTransform(10.1,49.2,0.611,0.611);

	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(32.5,102.9,0.611,0.611,0,0,0,49.1,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LowerLeg, new cjs.Rectangle(-1,-1.6,63.5,127.4), null);


(lib.hallway = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B5B3").s().p("AAABFIjIgJQAugRAjglQAigkAPguQgMAnB8A5QBqAyA1AHIjJgIg");
	this.shape.setTransform(1112.3,340.9,1.161,1.161);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B5B3").s().p("AjtAWQgsgpgUgQQEtgeEuASQhHgDg4AEQhdAHhRAYQgQAFhDAiQg4AegaABIgCAAQgeAAgpghg");
	this.shape_1.setTransform(1125.8,23.8,1.161,1.161);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgPALgLQALgLAOAAQAQAAAKALQALALAAAPMAAAAnZQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_2.setTransform(1175.5,186.6,1.161,1.161);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3B5B3").s().p("AgZUuQgLgLAAgPMAAAgonQAAgQALgKQAKgLAPAAQAPAAALALQALAKAAAQMAAAAonQAAAPgLALQgLALgPAAQgPAAgKgLg");
	this.shape_3.setTransform(1157.3,188.6,1.161,1.161);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B5B3").s().p("AgZUuQgLgLAAgPMAAAgonQAAgQALgKQALgLAOAAQAQAAAKALQALAKAAAQMAAAAonQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_4.setTransform(1139.1,188.6,1.161,1.161);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B5B3").s().p("AgZUHQgLgKAAgQMAAAgnZQAAgQALgKQAKgLAPAAQAPAAALALQALAKAAAQMAAAAnZQAAAQgLAKQgLALgPAAQgPAAgKgLg");
	this.shape_5.setTransform(1121.8,188.8,1.161,1.161);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFF2EE").s().p("AhOA3QgUg1gIgZQgGgVgCgNQgCgTAGgOQAMgcArgKQAqgKAyASQAyASAcAiQg+AbgtA1QgrA2gPBDQgHgZgVg1g");
	this.shape_6.setTransform(1195.1,27.9,1.161,1.161);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFF2EE").s().p("AgHAMQgtg1g+gbQAcgiAygSQAygSAqAKQArAKAMAcQAGAOgCAUQgCALgGAXQgIAYgUA1QgUA1gIAZQgPhCgrg3g");
	this.shape_7.setTransform(1102.9,28.3,1.161,1.161);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFF2EE").s().p("An+BaIAAiyIP9AAIAACyg");
	this.shape_8.setTransform(1148.6,10.8,1.161,1.161);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFF2EE").s().p("Ag4CBQgpgJgNgdQgKgXAOgsQAIgYAUg1QAUg1AIgaQAOBDAsA2QAtA1A+AbQgcAigyASQghAMgcAAQgRAAgPgEg");
	this.shape_9.setTransform(1194.7,341.4,1.161,1.161);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFF2EE").s().p("AgkB5QgygSgdgiQA/gbAsg1QAtg3AOhCQAIAZAUA1QAUA1AHAYQAHAVACANQACAUgGAOQgNAcgqAKQgPAEgQAAQgcAAghgMg");
	this.shape_10.setTransform(1102.5,341,1.161,1.161);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFF2EE").s().p("An+BaIAAizIP9AAIAACzg");
	this.shape_11.setTransform(1148.2,358.5,1.161,1.161);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFF2EE").s().p("AlrYUMAAAgwmILXAAMAAAAwmg");
	this.shape_12.setTransform(1149.3,185.3,1.161,1.161);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3B5B3").s().p("AAABFIjIgJQAugSAigkQAjgjAPgvQgMAoB7A4QBrAyA1AHIjJgIg");
	this.shape_13.setTransform(759,337,1.161,1.161);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B5B3").s().p("AjtAWQgtgpgTgQQEugeEtASQhHgDg5AEQhcAGhRAZQgQAFhCAiQg5AdgaACIgCAAQgeAAgpghg");
	this.shape_14.setTransform(772.5,19.9,1.161,1.161);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgPALgLQALgLAOAAQAQAAAKALQALALAAAPMAAAAnZQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_15.setTransform(822.2,182.7,1.161,1.161);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3B5B3").s().p("AgZUvQgLgMAAgPMAAAgonQAAgPALgMQAKgLAPAAQAPAAALALQALAMAAAPMAAAAonQAAAPgLAMQgLALgPgBQgPABgKgLg");
	this.shape_16.setTransform(804,184.7,1.161,1.161);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3B5B3").s().p("AgZUvQgLgMAAgPMAAAgonQAAgPALgMQAKgLAPAAQAPAAALALQALAMAAAPMAAAAonQAAAPgLAMQgLALgPgBQgPABgKgLg");
	this.shape_17.setTransform(785.8,184.7,1.161,1.161);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgQALgKQALgLAOAAQAQAAAKALQALAKAAAQMAAAAnZQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_18.setTransform(768.5,184.9,1.161,1.161);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFF2EE").s().p("AhOA3QgUg1gIgZQgOgsAKgXQAMgdAqgJQArgKAxASQAyASAdAiQg+AbgtA1QgsA2gOBDQgIgZgUg1g");
	this.shape_19.setTransform(841.9,24,1.161,1.161);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFF2EE").s().p("AgHAMQgtg1g+gbQAcgiAygSQAygSArAKQAqAKAMAcQAGAOgCAUQgCALgGAXQgIAYgUA1QgUA1gIAZQgOhCgsg3g");
	this.shape_20.setTransform(749.6,24.4,1.161,1.161);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFF2EE").s().p("An+BZIAAixIP9AAIAACxg");
	this.shape_21.setTransform(795.3,7,1.161,1.161);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFF2EE").s().p("Ag3CBQgrgKgMgcQgGgOACgTQACgMAGgWQAIgZAUg1QAUg1AIgZQAPBDArA2QAtA1A+AbQgcAigyASQghAMgcAAQgQAAgPgEg");
	this.shape_22.setTransform(841.4,337.5,1.161,1.161);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFF2EE").s().p("AgkB5QgygSgcgiQA+gbAtg1QArg3APhCQAIAZAUA1QAUA1AHAYQAHAVACANQACAUgGAOQgMAcgrAKQgPAEgQAAQgcAAghgMg");
	this.shape_23.setTransform(749.2,337.1,1.161,1.161);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFF2EE").s().p("An+BZIAAiyIP9AAIAACyg");
	this.shape_24.setTransform(794.9,354.6,1.161,1.161);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFF2EE").s().p("AlrYTMAAAgwlILXAAMAAAAwlg");
	this.shape_25.setTransform(796,181.4,1.161,1.161);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B3B5B3").s().p("AAABFIjIgJQAugSAigkQAjgjAPgvQgMAoB7A4QBrAyA1AHIjJgIg");
	this.shape_26.setTransform(446,337,1.161,1.161);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3B5B3").s().p("AjtAWQgtgpgTgQQEugeEtASQhGgDg6AEQhcAGhRAZQgQAFhCAiQg5AdgaACIgCAAQgfAAgoghg");
	this.shape_27.setTransform(459.5,19.9,1.161,1.161);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgPALgLQALgLAOAAQAQAAAKALQALALAAAPMAAAAnZQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_28.setTransform(509.1,182.7,1.161,1.161);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B3B5B3").s().p("AgZUvQgLgMAAgPMAAAgonQAAgPALgMQALgLAOAAQAQAAAKALQALAMAAAPMAAAAonQAAAPgLAMQgKALgQgBQgOABgLgLg");
	this.shape_29.setTransform(491,184.7,1.161,1.161);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3B5B3").s().p("AgZUvQgLgMAAgPMAAAgonQAAgPALgMQAKgLAPAAQAPAAALALQALAMAAAPMAAAAonQAAAPgLAMQgLALgPgBQgPABgKgLg");
	this.shape_30.setTransform(472.8,184.7,1.161,1.161);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgQALgKQALgLAOAAQAQAAAKALQALAKAAAQMAAAAnZQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_31.setTransform(455.5,184.9,1.161,1.161);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFF2EE").s().p("AhOA3QgUg1gIgZQgOgsAKgXQANgdApgJQArgKAxASQAyASAdAiQg+AbgtA1QgsA2gOBDQgIgZgUg1g");
	this.shape_32.setTransform(528.9,24,1.161,1.161);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFF2EE").s().p("AgHAMQgtg1g+gbQAcgiAygSQAygSAqAKQArAKAMAcQAGAOgCAUQgCANgGAVQgIAYgUA1QgUA1gIAZQgPhCgrg3g");
	this.shape_33.setTransform(436.6,24.4,1.161,1.161);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFF2EE").s().p("An+BZIAAixIP9AAIAACxg");
	this.shape_34.setTransform(482.3,7,1.161,1.161);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFF2EE").s().p("Ag3CBQgrgKgMgcQgGgOACgTQACgMAGgWQAIgZAUg1QAUg1AIgZQAPBDArA2QAtA1A+AbQgcAigyASQghAMgcAAQgQAAgPgEg");
	this.shape_35.setTransform(528.4,337.5,1.161,1.161);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFF2EE").s().p("AgkB5QgygSgcgiQA+gbAtg1QArg3APhCQAIAZAUA1QAUA1AIAYQAGAWACAMQACAUgGAOQgMAcgrAKQgPAEgQAAQgcAAghgMg");
	this.shape_36.setTransform(436.2,337.1,1.161,1.161);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFF2EE").s().p("An+BZIAAiyIP9AAIAACyg");
	this.shape_37.setTransform(481.9,354.6,1.161,1.161);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFF2EE").s().p("AlrYTMAAAgwlILXAAMAAAAwlg");
	this.shape_38.setTransform(483,181.4,1.161,1.161);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B3B5B3").s().p("AAABFIjIgKQAugRAjgkQAigjAPgvQgMAoB8A4QBqAyA1AHQhSgDh3gFg");
	this.shape_39.setTransform(156.8,339.6,1.161,1.161);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B3B5B3").s().p("AjsAWQgugpgTgQQErgfEwATQhGgDg6AEQhcAGhRAZQgRAFhBAiQg5AdgaACIgCAAQgfAAgnghg");
	this.shape_40.setTransform(170.3,22.5,1.161,1.161);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgPALgLQAKgLAPAAQAPAAALALQALALAAAPMAAAAnZQAAAPgLALQgLALgPAAQgPAAgKgLg");
	this.shape_41.setTransform(220,185.3,1.161,1.161);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3B5B3").s().p("AgaUuQgKgKgBgQMAAAgonQABgPAKgLQAMgLAOAAQAQAAAKALQAMALAAAPMAAAAonQAAAQgMAKQgKALgQAAQgOAAgMgLg");
	this.shape_42.setTransform(201.8,187.2,1.161,1.161);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3B5B3").s().p("AgZUuQgLgKAAgQMAAAgonQAAgPALgLQALgLAOAAQAQAAAKALQALALAAAPMAAAAonQAAAQgLAKQgKALgQAAQgOAAgLgLg");
	this.shape_43.setTransform(183.6,187.2,1.161,1.161);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3B5B3").s().p("AgZUHQgLgLAAgPMAAAgnZQAAgPALgLQAKgLAPAAQAPAAALALQALALAAAPMAAAAnZQAAAPgLALQgLALgPAAQgPAAgKgLg");
	this.shape_44.setTransform(166.3,187.5,1.161,1.161);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFF2EE").s().p("AhOA2QgUg1gIgYQgGgWgCgMQgCgTAGgOQANgdAqgJQAqgKAyASQAyARAcAiQg+AcgtA1QgrA2gPBDQgIgagUg1g");
	this.shape_45.setTransform(239.6,26.6,1.161,1.161);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EFF2EE").s().p("AgHAMQgtg1g+gbQAcgiAygSQAygSAqAKQArAKAMAcQAGAOgCATQgCANgHAVQgIAZgTA1QgVA1gHAZQgPhDgrg2g");
	this.shape_46.setTransform(147.4,27,1.161,1.161);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EFF2EE").s().p("An+BaIAAizIP9AAIAACzg");
	this.shape_47.setTransform(193.1,9.5,1.161,1.161);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EFF2EE").s().p("Ag4CBQgqgKgMgcQgKgXAOgtQAIgYAUg1QAUg1AIgZQAOBCAsA3QAtA1A+AbQgdAigyASQggAMgcAAQgRAAgPgEg");
	this.shape_48.setTransform(239.2,340.2,1.161,1.161);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EFF2EE").s().p("AgkB5QgygRgcgjQA+gbAtg1QAsg2AOhDQAIAaAUA1QAUA1AIAYQAGAWACAMQACATgGAOQgNAdgpAJQgQAEgQAAQgcAAghgMg");
	this.shape_49.setTransform(147,339.7,1.161,1.161);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFF2EE").s().p("An+BZIAAiyIP9AAIAACyg");
	this.shape_50.setTransform(192.7,357.2,1.161,1.161);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFF2EE").s().p("AlrYTMAAAgwlILWAAMAAAAwlg");
	this.shape_51.setTransform(193.8,184,1.161,1.161);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C8CCDB").s().p("EherAD3IUYn7MCWdAAAISiIJg");
	this.shape_52.setTransform(668.7,377.1,1.161,1.161);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#1A1A1A").p("AHiRTQgLgDg4gVQAbg+AImTQAIm/gem5QgmokhYlQQhqmXipgmQj4g5h+TpQg/JzgOKAIg7gQIAAFmIC6BXQACqjApqcQBS05DDAeQDEAdALWAQAGLBgiK6QAqATBUA1QBNAsA2AAIAXnwIAAgBQAEADgEgCg");
	this.shape_53.setTransform(1297.3,216.8,1.161,1.161);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E6E6E6").s().p("AFIYXQhUg1gqgTQAiq6gGrBQgL2AjEgdQjDgehSU5QgpKcgCKjIi6hXIAAlmIA7AQQAOqAA/pzQB+zpD4A5QCpAmBqGXQBYFQAmIkQAeG5gIG/QgIGTgbA+QA4AVALADIgXHwQg2AAhNgsgAHiRTIAAgBIACACIgCgBgAHiRTIAAAAg");
	this.shape_54.setTransform(1297.3,216.8,1.161,1.161);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#1A1A1A").p("AHiRUQgLgDg4gWQAbg+AImTQAIm+gem6QgmokhYlPQhqmYipgmQj4g5h+TpQg/J0gOKAIg7gQIAAFlIC6BXQACqiApqcQBS06DDAeQDEAdALWBQAFLAghK7QBUA6AmATQBJAmA+AAIAXnvIAAgBQAEACgEgBg");
	this.shape_55.setTransform(1305.5,220.1,1.161,1.161);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("AFGYdQgmgThVg6QAiq7gGrAQgL2BjEgdQjDgehSU6QgpKcgCKiIi6hXIAAllIA7AQQAOqAA/p0QB+zpD4A5QCpAmBqGYQBZFPAlIkQAfG6gJG+QgIGTgbA+QA4AWALADIgWHvQg/AAhIgmg");
	this.shape_56.setTransform(1305.4,220.1,1.161,1.161);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#1A1A1A").p("AFnDQQgJjBgdjsQgTiWgqkWIhapdQgMhQgUguQgdhBg1gVQgzgUg3AaQg1AZgfAyQgbArgMA+QgIAngGBKMgCqAgYQgHBRABArQABBGARA1QAaBTBGBEQBBA+BZAnQBHAgBKATQBUAVBGAAQBEABASg2QAHgUADgkQADgpACgWQAummAJkdQAHjMgIi5g");
	this.shape_57.setTransform(1298.9,223.8,1.161,1.161);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("ADMXEQhGAAhUgVQhKgThHggQhZgnhBg+QhGhEgahTQgRg1gBhGQgBgrAHhRMACqggYQAGhKAIgnQAMg+AbgrQAfgyA1gZQA3gaAzAUQA1AVAdBBQAUAuAMBQIBaJdQAqEWATCWQAdDsAJDBQAIC5gHDMQgJEdguGmIgFA/QgDAkgHAUQgSA1hDAAIgBAAg");
	this.shape_58.setTransform(1298.9,223.8,1.161,1.161);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#1A1A1A").p("AnhRTQALgDA4gVQgbg+gImTQgIm/Aem5QAmokBYlQQBqmXCpgmQD4g5B+TpQA/JzAOKAIA7gQIAAFmIi6BXQgCqigpqcQhS06jDAeQjEAdgLWBQgFLAAhK7QgDABh7BGQhNAsg2AAIgXnwIAAgBQgEADAEgCg");
	this.shape_59.setTransform(50.5,210.3,1.161,1.161);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E6E6E6").s().p("AnhRTQALgDA4gVQgbg+gImTQgIm/Aem5QAmokBYlQQBqmXCpgmQD4g5B+TpQA/JzAOKAIA7gQIAAFmIi6BXQgCqigpqcQhS06jDAeQjEAdgLWBQgFLAAhK7Ih+BHQhNAsg2AAgAnhRSIAAABIgCABIACgCg");
	this.shape_60.setTransform(50.5,210.3,1.161,1.161);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#1A1A1A").p("AnhRUQAKgDA5gWQgbg+gImTQgJm+Afm6QAmokBXlPQBrmYCpgmQD4g5B+TpQA/J0ANKAIA8gQIAAFlIi6BXQgCqigpqcQhS06jDAeQjEAegLWAQgGLAAiK7QhTA5goAUQhIAmg/AAIgWnvIAAgBQgFACAFgBg");
	this.shape_61.setTransform(42.3,213.6,1.161,1.161);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CCCCCC").s().p("AnhRUQAKgDA5gWQgbg+gImTQgJm+Afm6QAmokBXlPQBrmYCpgmQD4g5B+TpQA/J0ANKAIA8gQIAAFlIi6BXQgCqigpqcQhS06jDAeQjEAegLWAQgGLAAiK7QhTA5goAUQhIAmg/AAgAnhRTIAAABIgCAAIACgBg");
	this.shape_62.setTransform(42.3,213.6,1.161,1.161);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#1A1A1A").p("AlmDPQAIjAAejtQASiUAqkYIBbpcQAMhQAUguQAdhBA1gVQAygUA4AaQA1AYAfAzQAaArANA+QAHAlAHBLMACqAgYQAGBTAAAqQgCBFgQA1QgaBUhHBEQhAA+hZAnQhIAfhKATQhTAVhGABQhEAAgTg2QgDgJgLhtQgvmzgJkRQgHjMAJi5g");
	this.shape_63.setTransform(48.9,217.3,1.161,1.161);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AkiWOQgDgJgLhtQgvmzgJkRQgHjMAJi5QAIjAAejtQASiUAqkYIBbpcQAMhQAUguQAdhBA1gVQAygUA4AaQA1AYAfAzQAaArANA+QAHAlAHBLMACqAgYQAGBTAAAqQgCBFgQA1QgaBUhHBEQhAA+hZAnQhIAfhKATQhTAVhGABIgBAAQhDAAgTg2g");
	this.shape_64.setTransform(48.9,217.3,1.161,1.161);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B0A398").s().p("AhtSwQCJjHA42WQAPmRAJmAMAACAlqQAAAKgcAGQgSADgbAAQg2AAhcgPg");
	this.shape_65.setTransform(1219.4,207.2,1.161,1.161);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B0A398").s().p("AhRVBQgRgDgIgHIgDgGMAABgp1IABBcQAHH9ARHDQA3WWCKDHQhdAQg2AAQgaAAgSgEg");
	this.shape_66.setTransform(129.2,192.5,1.161,1.161);

	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(670.1,203.9,1.161,1.161,0,0,0,605,175.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hallway, new cjs.Rectangle(-34.6,-3.4,1407.2,411.3), null);


(lib.drawerdesk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(267.4,205.8,1.098,0.939,0,0,0,39,15.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAPQo5gEkdgFImsgGQkdgFiOgEQCPgDEdgCIGrgBQFWgCIAADQI6AEEdAEIGrAGIGsAJImsAGImrABIieABIq5gCg");
	this.shape.setTransform(254.2,139.7,1.098,0.939);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDFQQgUiwgJieQgKiyAFidQAEitAZihQgNCbgBCzQAACjAKCrQAHB/ARDOIAcFOQgbi0gQiYg");
	this.shape_1.setTransform(56,201.5,1.098,0.939);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#603813").s().p("A+OLQIAA2fMA8dAAAIAAWfg");
	this.shape_2.setTransform(262.5,206.8,1.098,0.939);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#603813").s().p("A9IBfIiMi9MA6bAAAIEOC9g");
	this.shape_3.setTransform(254.8,130.3,1.098,0.939);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#603813").s().p("A/KJJIgK13ICMC+MA8dAAAMg8dAWfg");
	this.shape_4.setTransform(254.8,197.9,1.098,0.939);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#534741").s().p("ACxJ/QrIgQq5iGQj+q2gmhEQh3jSBXhXQBLhKD0AEId9AhQB8ACA/AGQBoAKBOAdQCUA0B0CEQBqB4A+CjQA0CHAbC1QARBvAQDZQplBaptAAQhbAAhbgCg");
	this.shape_5.setTransform(217.9,89.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#534741").s().p("ABvEEIhvlOIhLjFQgehKhSi7QBEBwBBCLIBqEIIBSEPQAkCQASCHQgsijghhug");
	this.shape_6.setTransform(49.4,80.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#736357").s().p("A7VFFIgUprMA3JgAeIAKKJg");
	this.shape_7.setTransform(177,32.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#736357").s().p("EgiNgNbMA2/AAAINcatMg7XAAKg");
	this.shape_8.setTransform(221,151);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#736357").s().p("AoHmeICqqjINlatIkOHWg");
	this.shape_9.setTransform(388,109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.drawerdesk, new cjs.Rectangle(0,0,475,274.4), null);


(lib.drawertweensymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736357").s().p("AgUEEIACiCIAKkDIAHiCQAHiQANh0QADBkgBChIgLGFIgICBQgHCNgMB3QgFhqACiag");
	this.shape.setTransform(74.6,183.4);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(277.1,57,1,1,0,0,0,277.9,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#736357").s().p("A+dH+IAAv7MA87AAAIAAP7g");
	this.shape_1.setTransform(293.5,173.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#998675").s().p("EgjYAM0IAA5nMBGxAAAIAAZng");
	this.shape_2.setTransform(298.5,177);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#998675").s().p("Ah8EdIhk0nIHBGuIAAZng");
	this.shape_3.setTransform(49.5,155.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("Egm6gDWMBFhAAKIISGjMhGxAAAg");
	this.shape_4.setTransform(276.6,73.5,1,1,0,0,0,0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#998675").s().p("A/3DXInCmtMBFhAAKIISGjg");
	this.shape_5.setTransform(276,73.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.5,297.2,1,1,0,0,0,44.6,66.9);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.4,218.1,1,1,0,0,0,31.8,47.7);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(486.4,300.5,1,1,0,0,0,41.6,62.4);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(476.7,228.7,1,1,0,0,0,28.9,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.drawertweensymbol, new cjs.Rectangle(-0.8,-0.5,555.8,364.6), null);


(lib.hot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:75,"stop":75,"stop":75});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgzOAkBMAAAhIBMBmdAAAMAAABIBg");
	var mask_graphics_73 = new cjs.Graphics().p("EgzOAkBMAAAhIBMBmdAAAMAAABIBg");
	var mask_graphics_75 = new cjs.Graphics().p("EgzOAkBMAAAhIBMBmdAAAMAAABIBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:623.6,y:463.1}).wait(73).to({graphics:mask_graphics_73,x:623.6,y:463.1}).wait(2).to({graphics:mask_graphics_75,x:623.6,y:463.1}).wait(1));

	// Layer_2
	this.instance = new lib.drawerdesk();
	this.instance.parent = this;
	this.instance.setTransform(501.3,252.1,1,1,0,0,0,237.5,137.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({x:516.3,y:278.6},0).wait(1).to({x:531.4,y:305.1},0).wait(1).to({x:546.4,y:331.6},0).wait(1).to({x:561.5,y:358.1},0).wait(1).to({x:558.6,y:354.2},0).wait(1).to({x:555.7,y:350.4},0).wait(1).to({x:552.9,y:346.6},0).wait(1).to({x:550,y:342.8},0).wait(1).to({x:547.1,y:338.9},0).wait(1).to({x:544.3,y:335.1},0).wait(1).to({x:545.6,y:336.4},0).wait(1).to({x:546.9,y:337.7},0).wait(1).to({x:548.2,y:339.1},0).wait(1).to({x:549.5,y:340.4},0).wait(1).to({x:550.9,y:341.7},0).wait(1).to({x:552.2,y:343},0).wait(1).to({x:553.5,y:344.4},0).wait(1).to({x:554.8,y:345.7},0).wait(1).to({x:556.2,y:347},0).wait(1).to({x:557.5,y:348.3},0).wait(1).to({x:558.8,y:349.7},0).wait(1).to({x:560.1,y:351},0).wait(1).to({x:561.5,y:352.3},0).wait(41));

	// Layer_1
	this.instance_1 = new lib.drawertweensymbol();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485.6,299.2,1,1.016,0,0,0,277.1,183);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:181.8,scaleY:1.04,y:297.9},0).wait(1).to({scaleY:1.07},0).wait(1).to({scaleY:1.1},0).wait(1).to({scaleY:1.13,y:297.8},0).wait(1).to({scaleY:1.02,y:297.9},0).wait(1).to({scaleY:0.92,y:298.1},0).wait(1).to({scaleY:0.81,y:298.2},0).wait(1).to({scaleY:0.88,y:298.1},0).wait(1).to({scaleY:0.95,y:298},0).wait(1).to({scaleY:1.01,y:297.9},0).wait(64).to({regY:183,y:299.1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(207.7,112.7,555.8,370.4);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(9.1,47.7,0.611,0.611,0,0,0,14.9,78);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,81,0.611,0.611,0,0,0,16.2,13.6);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.5,86,0.611,0.611,0,0,0,71.5,42.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#522742").s().p("AC1B3IiZgqIiTg6IhegvQhjg3hNg+QBjA3BXApIDwBjIBjAgIAyAPQBXAYB1AZQhmgDhrgYg");
	this.shape.setTransform(36.9,153.9,0.611,0.611);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72315A").s().p("AgMCIQjrhWh+iRQgnguAEgiQACgZAWgTQAVgRAbgEQAmgGBBAYQEvBrD4DPQArAkAWAfQAdAqgCAqQkag4iMgzg");
	this.shape_1.setTransform(34.2,148,0.611,0.611);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72315A").s().p("AAqDkQh+hEhthiQgjgggWgaQgcghgPgiQgQgnACgpQADgrAYgfQAZggAsgNQAogMAsAHQAlAHArATQAbANAvAbIBmA6QA3AgAgAcQBSBIAJB4QADAsgPAmQgRAqgiAUQgdARglAAQg6AAhOgqg");
	this.shape_2.setTransform(26.2,144.7,0.611,0.611);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.8,171.9,0.611,0.611,0,0,0,36.1,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#72315A").s().p("AgDFaQhkgGhUglQhcgqg1hHQgwhCgShkQgLg/gCh2QgCg6AJgkQAMgzAjgZQBCgwCDA9QD1ByDHC2QAnAjAYAcQAfAlAQAkQBCCWipA2QhWAbiCAAQgmAAgogDg");
	this.shape_3.setTransform(36.8,151.4,0.611,0.611);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#522742").s().p("AhRCLQhNgHgygPQhBgTgzgmQg4grgZg2QAhAxA5AkQAxAfBAAPQA5AOBCADQA/ADA+gCQBFgBA2gKQBAgMAygdQA3giAggyQAjg3gCg+QANA8giBBQgeA5g5AmQgwAhhIARQg1ALhMACIgYAAQg1AAgygDg");
	this.shape_4.setTransform(41,211.9,0.611,0.611);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72315A").s().p("AjwD2Qg/gTgwgnQg1gpgcg4Qgdg7AFhDQAGhHAqguQBrgTDOgiQDWgjBigSQA6gLAlACQAvACAeAWQAnAbATBBQAZBUghBmQgcBXgaAlQgmA0hCAPQiKAeiLAKQglACgjAAQhlAAhHgWg");
	this.shape_5.setTransform(41.4,217.9,0.611,0.611);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72315A").s().p("AiQHJQhLgFgvgOQhBgTgjgoQgWgZgNgmQgJgcgHgrQgYiVAMiVQAMiXAviQQCQhhC3gPQC+gRCNBTQAhBUAZBsQAQBFAWCAIAxEbQADARgTAbQgZAkgDAIQgRAsggAUQgdASg3AFQhyALhxAAQhWAAhXgHg");
	this.shape_6.setTransform(41.7,198,0.611,0.611);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("ADHJvQhagHgIgCQhfgXhZgyQhVgvgsgrQhDhAgFhKQgEg7AZh8QAhiiADgUQAKhTgli1Qgli0AKhTQAEgbBCgEQBSgGAMgHQAggRAlASQAjARARAjQAMAZgWAmQgcAuAAAWQADHKE8JlQgCgDhUgGg");
	this.shape_7.setTransform(37.4,119.4,0.611,0.611);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("Ah9CQQgsgWgcgmQgdgpgCgsQgBgfALgpQALgsASgWQBOghA9AFQAxAFAuAbQArAaAkApQAeAjAcAwQASAgAdA7QhVAmhYARQglAHggAAQg+AAgygYg");
	this.shape_8.setTransform(31.3,83.1,0.611,0.611);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.8,49.3,0.611,0.611,0,0,0,14.5,79);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E2E31").s().p("AgnAMIgXgYIAagPQAKgGALABQALABAHAIIA8AyIg1AFIgGABQgZAAgSgVg");
	this.shape_9.setTransform(93.8,112.1,0.611,0.611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.instance_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,97.7,234.3), null);


(lib.mainchar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{walkstart:0,recoil:3,passing:6,high:9,contact:12,"recoil":15,"passing":18,"high":21,walkend:23,still:24,talkstart:25,talkstop:36});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_36 = function() {
		this.gotoAndPlay("talkstart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(13).call(this.frame_36).wait(1));

	// walkanim
	this.instance = new lib.RightArm();
	this.instance.parent = this;
	this.instance.setTransform(-17.2,-306.3,1,1,-24.2,0,0,14.6,15.6);

	this.instance_1 = new lib.body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.3,-350.6,1,1,0,0,0,48.9,117.2);

	this.instance_2 = new lib.UpperLeg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11.2,-237.7,1,1,0,19.5,-160.5,9.8,13.6);

	this.instance_3 = new lib.LowerLeg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-48.9,-130.6,1,1,49.5,0,0,10.1,11.8);

	this.instance_4 = new lib.tail();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-96.6,-152.9,1,1,0,0,0,79.3,113.5);

	this.instance_5 = new lib.UpperLeg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.6,-241.8,1,1,0,-22,158,9.9,13.7);

	this.instance_6 = new lib.LowerLeg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(42,-136.6,1,1,-12.1,0,0,10,11.9);

	this.instance_7 = new lib.LeftArm();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-17.1,-310.3,1,1,17.5,0,0,14.7,11.6);

	this.instance_8 = new lib.jaw();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1,-364.5,0.167,0.112,0,5.6,7.2,13.5,108.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{rotation:17.5,x:-17.1,y:-310.3,regX:14.7,regY:11.6}},{t:this.instance_6,p:{regX:10,regY:11.9,rotation:-12.1,x:42,y:-136.6}},{t:this.instance_5,p:{regX:9.9,regY:13.7,skewX:-22,skewY:158,x:-0.6,y:-241.8}},{t:this.instance_4,p:{regX:79.3,regY:113.5,scaleX:1,skewY:0,x:-96.6,y:-152.9,scaleY:1}},{t:this.instance_3,p:{regX:10.1,rotation:49.5,x:-48.9,y:-130.6,regY:11.8}},{t:this.instance_2,p:{skewX:19.5,skewY:-160.5,x:-11.2,y:-237.7,regX:9.8,regY:13.6}},{t:this.instance_1,p:{x:3.3,y:-350.6}},{t:this.instance,p:{regX:14.6,rotation:-24.2,x:-17.2,y:-306.3,regY:15.6}}]}).to({state:[{t:this.instance_7,p:{rotation:16,x:-15.1,y:-297.3,regX:14.7,regY:11.6}},{t:this.instance_6,p:{regX:10.1,regY:12.1,rotation:6.7,x:25.3,y:-117.3}},{t:this.instance_5,p:{regX:9.8,regY:13.8,skewX:-12,skewY:168,x:1.6,y:-228.4}},{t:this.instance_4,p:{regX:142.3,regY:19.7,scaleX:1.006,skewY:-6.3,x:-31.6,y:-233.8,scaleY:1}},{t:this.instance_3,p:{regX:10.3,rotation:63,x:-29.2,y:-114.5,regY:11.8}},{t:this.instance_2,p:{skewX:10.5,skewY:-169.5,x:-8.8,y:-226.3,regX:9.8,regY:13.6}},{t:this.instance_1,p:{x:5.3,y:-337.7}},{t:this.instance,p:{regX:14.7,rotation:-22,x:-15,y:-293.4,regY:15.6}}]},3).to({state:[{t:this.instance_7,p:{rotation:6.5,x:-17.1,y:-309.3,regX:14.7,regY:11.6}},{t:this.instance_6,p:{regX:10.3,regY:12.3,rotation:5.6,x:-10.1,y:-126.3}},{t:this.instance_5,p:{regX:9.6,regY:14,skewX:5.1,skewY:-174.9,x:-0.1,y:-239.5}},{t:this.instance_4,p:{regX:147.3,regY:16.5,scaleX:1.093,skewY:-23.8,x:-28.6,y:-249,scaleY:1}},{t:this.instance_3,p:{regX:10.2,rotation:35.2,x:13.5,y:-131,regY:11.8}},{t:this.instance_2,p:{skewX:-12.3,skewY:167.7,x:-10.8,y:-242,regX:9.7,regY:13.6}},{t:this.instance_1,p:{x:3.3,y:-349.7}},{t:this.instance,p:{regX:14.6,rotation:-6.2,x:-17.2,y:-305.3,regY:15.6}}]},3).to({state:[{t:this.instance_7,p:{rotation:-19.3,x:-17,y:-324.3,regX:14.8,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12.3,rotation:24.2,x:-45.9,y:-149.6}},{t:this.instance_5,p:{regX:9.7,regY:13.9,skewX:23.7,skewY:-156.3,x:-0.4,y:-253.7}},{t:this.instance_4,p:{regX:143.3,regY:19.6,scaleX:1.226,skewY:-35.4,x:-32.6,y:-260.9,scaleY:1}},{t:this.instance_3,p:{regX:10.3,rotation:36.2,x:63.5,y:-177.4,regY:11.8}},{t:this.instance_2,p:{skewX:-42.2,skewY:137.8,x:-13.1,y:-261.4,regX:9.7,regY:13.6}},{t:this.instance_1,p:{x:3.3,y:-364.7}},{t:this.instance,p:{regX:14.7,rotation:14.7,x:-17.1,y:-320.2,regY:15.7}}]},3).to({state:[{t:this.instance_7,p:{rotation:-24.3,x:-19.1,y:-310.4,regX:14.7,regY:11.6}},{t:this.instance_6,p:{regX:10.2,regY:11.9,rotation:52.8,x:-47.5,y:-135.6}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:23.4,skewY:-156.6,x:-2.6,y:-239.8}},{t:this.instance_4,p:{regX:147.3,regY:14.6,scaleX:1.324,skewY:-41,x:-30.6,y:-252,scaleY:1}},{t:this.instance_3,p:{regX:10.3,rotation:-8.7,x:34.3,y:-141.8,regY:12}},{t:this.instance_2,p:{skewX:-24.8,skewY:155.2,x:-13.5,y:-244.9,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.7,rotation:21.3,x:-19.1,y:-306.3,regY:15.6}}]},3).to({state:[{t:this.instance_7,p:{rotation:-19.3,x:-17.1,y:-296.3,regX:14.6,regY:11.6}},{t:this.instance_6,p:{regX:10.2,regY:11.8,rotation:60.3,x:-34.8,y:-117.9}},{t:this.instance_5,p:{regX:9.8,regY:13.6,skewX:17.7,skewY:-162.3,x:-0.5,y:-226.2}},{t:this.instance_4,p:{regX:146.3,regY:18.6,scaleX:1.193,skewY:-33,x:-29.6,y:-233.9,scaleY:1}},{t:this.instance_3,p:{regX:10.4,rotation:6.3,x:20.8,y:-120.2,regY:12.1}},{t:this.instance_2,p:{skewX:-16.1,skewY:163.9,x:-10.9,y:-229.5,regX:9.8,regY:13.8}},{t:this.instance_1,p:{x:3.3,y:-336.7}},{t:this.instance,p:{regX:14.5,rotation:17.2,x:-17.2,y:-292.4,regY:15.6}}]},3).to({state:[{t:this.instance_7,p:{rotation:-4.5,x:-18.1,y:-309.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.2,regY:11.9,rotation:34.1,x:15.6,y:-128}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-8.5,skewY:171.5,x:-1.4,y:-240.2}},{t:this.instance_4,p:{regX:146.3,regY:16.6,scaleX:1.112,skewY:-25.9,x:-30.6,y:-248.9,scaleY:1}},{t:this.instance_3,p:{regX:10.5,rotation:5,x:-16,y:-125.7,regY:12.2}},{t:this.instance_2,p:{skewX:2.3,skewY:-177.7,x:-11.6,y:-239.4,regX:9.8,regY:13.8}},{t:this.instance_1,p:{x:2.3,y:-349.7}},{t:this.instance,p:{regX:14.7,rotation:7.2,x:-18,y:-305.3,regY:15.6}}]},3).to({state:[{t:this.instance_7,p:{rotation:12.2,x:-17.1,y:-322.3,regX:14.7,regY:11.6}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:39.7,x:75.6,y:-170.6}},{t:this.instance_5,p:{regX:9.7,regY:13.9,skewX:-42.3,skewY:137.7,x:-0.9,y:-254.4}},{t:this.instance_4,p:{regX:145.3,regY:18.6,scaleX:1.044,skewY:-16.7,x:-30.6,y:-259.9,scaleY:1}},{t:this.instance_3,p:{regX:10.6,rotation:29.6,x:-43.7,y:-141,regY:12.2}},{t:this.instance_2,p:{skewX:16.8,skewY:-163.2,x:-10.9,y:-250,regX:9.7,regY:13.8}},{t:this.instance_1,p:{x:3.3,y:-362.7}},{t:this.instance,p:{regX:14.6,rotation:-21.7,x:-17.2,y:-318.3,regY:15.6}}]},3).to({state:[{t:this.instance_7,p:{rotation:12.2,x:-17.1,y:-322.3,regX:14.7,regY:11.6}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:39.7,x:75.6,y:-170.6}},{t:this.instance_5,p:{regX:9.7,regY:13.9,skewX:-42.3,skewY:137.7,x:-0.9,y:-254.4}},{t:this.instance_4,p:{regX:145.3,regY:18.6,scaleX:1.044,skewY:-16.7,x:-30.6,y:-259.9,scaleY:1}},{t:this.instance_3,p:{regX:10.6,rotation:29.6,x:-43.7,y:-141,regY:12.2}},{t:this.instance_2,p:{skewX:16.8,skewY:-163.2,x:-10.9,y:-250,regX:9.7,regY:13.8}},{t:this.instance_1,p:{x:3.3,y:-362.7}},{t:this.instance,p:{regX:14.6,rotation:-21.7,x:-17.2,y:-318.3,regY:15.6}}]},2).to({state:[{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},1).to({state:[{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},1).to({state:[{t:this.instance_8,p:{regX:13.5,regY:108.7,skewX:5.6,skewY:7.2,y:-364.5,x:1}},{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},1).to({state:[{t:this.instance_8,p:{regX:13.6,regY:109.3,skewX:12.1,skewY:13.7,y:-364.4,x:1}},{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},2).to({state:[{t:this.instance_8,p:{regX:14.1,regY:109.4,skewX:17.6,skewY:19.1,y:-364.4,x:1.1}},{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},2).to({state:[{t:this.instance_8,p:{regX:14.2,regY:109.5,skewX:12.1,skewY:13.6,y:-364.4,x:1.1}},{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},2).to({state:[{t:this.instance_8,p:{regX:13.5,regY:108.7,skewX:5.6,skewY:7.2,y:-364.5,x:1}},{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},2).to({state:[{t:this.instance_7,p:{rotation:-2.8,x:-19.1,y:-310.2,regX:14.7,regY:11.7}},{t:this.instance_6,p:{regX:10.3,regY:12,rotation:-0.1,x:-1.2,y:-127.2}},{t:this.instance_5,p:{regX:9.8,regY:13.7,skewX:-0.5,skewY:179.5,x:-2.4,y:-240.8}},{t:this.instance_4,p:{regX:150.6,regY:22.1,scaleX:1.151,skewY:-35.9,x:-27.5,y:-247,scaleY:1.023}},{t:this.instance_3,p:{regX:10.5,rotation:2,x:-13.5,y:-127.1,regY:12}},{t:this.instance_2,p:{skewX:0.7,skewY:-179.3,x:-12.6,y:-240.8,regX:9.8,regY:13.7}},{t:this.instance_1,p:{x:1.3,y:-350.7}},{t:this.instance,p:{regX:14.8,rotation:1.6,x:-19,y:-306.3,regY:15.6}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.9,-467.8,293,451.1);


// stage content:
(lib.D4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var menub = new lib.menuback();
		var room1 = new lib.bedroom();
		var dash = new lib.dashboard();
		var hall = new lib.hallway();
		var npc = new lib.npc();
		var hole = new lib.hot2();
		var enviro2 = new createjs.Container();
		var enviro1 = new createjs.Container();
		var controls = false;
		var moving = false;
		var enviro = 1;
		
		createjs.Sound.registerSound("audio/introspeech.wav", "intro");
		createjs.Sound.registerSound("audio/draweropen.wav", "draweropen");
		createjs.Sound.registerSound("audio/drawerspeech.wav", "drawerspeech");
		
		var drawer = new lib.hot1();
		drawer.gotoAndStop(0);
		drawer.scaleX = 0.3;
		drawer.scaleY = 0.3;
		drawer.x = 300;
		drawer.y = 200;
		
		enviro1.addChild(room1);
		enviro1.addChild(drawer);
		
		npc.x=480;
		npc.y=336;
		
		hole.x=324;
		hole.y=324;
		
		hall.y=-30;
		
		enviro2.addChild(hall);
		enviro2.addChild(hole);
		enviro2.addChild(npc);
		
		
		var pc = new lib.mainchar();
		
		pc.x = 110;
		pc.y = 360;
		pc.scaleX = 0.7;
		pc.scaleY = 0.7;
		
		dash.x=270;
		dash.y=425; 
		
		
		stage.addChildAt(menub, 0);
		
		this.beginbtn.addEventListener("click", buttonClicked.bind(this));
		function buttonClicked()
		{
			this.beginbtn.visible = false;
			console.log("loading");
			stage.removeChild(menub);
			stage.addChild(pc);
			pc.gotoAndPlay("talkstart");
			stage.addChild(dash);
			stage.addChildAt(enviro1,0);
			
			var soundIntro = createjs.Sound.play("intro"); 
			soundIntro.on("complete", introComplete);
			dash.dialogue.text = "Hmm. That was a satisfactory night's sleep. Guess I'll have to go through the laborious ordeal of preparing breakfast now.";
			
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
			
			var dist = 5;	
			if(pc.scaleX<0){		
				dist *= -1;
			}
			
			if((pc.x>=50 && pc.scaleX<0)||(pc.x<=500 && pc.scaleX>0)){
				pc.x += dist;
			}
			else if (pc.x>500 && enviro==1){
				stage.removeChild(enviro1);
				stage.addChildAt(enviro2,0);
				enviro = 2;
				pc.x = 40;
			}
			else if (pc.x<50 && enviro==2){
				stage.removeChild(enviro2);
				stage.addChildAt(enviro1,0);
				enviro = 1;
				pc.x = 520;
			}
			
		}
		
		drawer.addEventListener("click", drawerClicked);
		function drawerClicked(){
			if (controls){
				console.log("drawer clicked");	
				if ((pc.x > 350)&&(pc.x-drawer.x < 450)){
					
					controls = false;
					drawer.gotoAndPlay(0);
					var soundDrawer = createjs.Sound.play("draweropen");
					soundDrawer.on("complete", drawerComplete);
					drawer.removeEventListener("click", drawerClicked);
					
				}
				else{
					dash.dialogue.text = "I should go closer.";	
					
				}
			}
		}
		
		function drawerComplete(){
			drawer.gotoAndStop("stop");	
			pc.gotoAndPlay("talkstart");
			var soundDrawerS = createjs.Sound.play("drawerspeech");
			soundDrawerS.on("complete", drawerSComplete);
			dash.dialogue.text = "Well, I found a dessicated moth in my unmentionables. Amusing.";	
		}
		
		function drawerSComplete(){
			pc.gotoAndStop("still");
			controls = true;
			dash.dialogue.text = "Navigate using the arrow keys and interact by clicking.";
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.beginbtn = new lib.playbtn();
	this.beginbtn.name = "beginbtn";
	this.beginbtn.parent = this;
	this.beginbtn.setTransform(216.5,231.1);
	new cjs.ButtonHelper(this.beginbtn, 0, 1, 2, false, new lib.playbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.beginbtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(483.5,426.1,145.1,69.8);
// library properties:
lib.properties = {
	id: '2875DC266779CE4DB64304F72E5397E1',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/D4_atlas_.png?1542102023723", id:"D4_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2875DC266779CE4DB64304F72E5397E1'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;