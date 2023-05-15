(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.refaktometr5 = function() {
	this.initialize(img.refaktometr5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1012,634);


(lib._10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_10");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBBQgPgbAAglQAAgfAJgWQALgXAPgMQANgIALAAQAWAAARAVQAVAbAAAuQAAAggJAWQgJAXgPAKQgPAKgMAAQgbAAgRgfgAgPhOQgKALgDAZQgEAYAAAXQAAAmAJAYQAIAUAPAAQAHAAAIgGQAIgHAEgPQAGgYAAgqQAAgfgHgWQgEgPgIgHQgFgEgJAAQgIAAgHAIg");
	this.shape.setTransform(7.25,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghBeIAAgFQAOAAADgCQAEgCACgDQABgDABgRIAAhkQgBgUgBgFQgBgEgDgCQgCgCgDgBQgGABgJAEIgBgFIAsgWIAEAAIAACcQAAAQACADQABAEADACQAEACANAAIAAAFg");
	this.shape_1.setTransform(-6.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_2.setTransform(0,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_3.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_9");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BgIAAgEQARgBAPgIQAPgIAOgUQAOgUAGgYQgVAOgRAAQgTAAgOgPQgOgPgBgZQABgXAOgTQARgYAaAAQAWAAAQATQAUAXAAAjQABAdgPAcQgQAagbASQgVAOgaAAgAgYhMQgJALAAAWQAAAcAMAQQAJALAMAAQAGAAAJgCQAJgDAGgGQACgRAAgKQABgNgFgQQgEgQgJgHQgIgJgKAAQgMAAgJALg");
	this.shape.setTransform(0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_8");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBPQgLgNAAgPQAAgNAIgMQAIgMAUgOQgWgSgGgLQgGgLgBgLQABgSAOgNQAOgNAWAAQAWAAAOAMQANAMAAAPQABALgIALQgIAKgXAPQAYASAIAKQALAOAAAQQgBATgPAOQgOAOgYAAQgaAAgPgRgAgaAZQgFAMgBANQAAARAKALQAJALAOAAQAPAAAJgJQAJgIAAgMQAAgKgFgIQgKgOgcgXQgLAJgGALgAgWhPQgJAIAAAKQAAAIAEAHQADAHAIAGIAUATQARgPAFgIQAEgJAAgLQAAgOgIgIQgJgJgNAAQgNAAgJAJg");
	this.shape.setTransform(0.3,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_7");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBfIA3imIgyAAQgQAAgGADQgLAHgIANIgDgCIARgsIBjAAIAAAGIg9C3g");
	this.shape.setTransform(0.15,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_6");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBTQgagYAAgnQABgYAJgWQALgXASgRQASgRARgGQAQgGAPAAIAIAAIAAAFQgSABgLAGQgMAFgLALQgKALgIAOQgHAOgEASQATgNATAAQATAAAOAPQANAOAAAYQAAAYgNATQgRAXgcAAQgSAAgOgNgAgMgJQgFACgMAHQgCASgBALQAAANAGAQQAEAPAKAJQAHAGAIAAQAMAAAKgLQAKgLAAgVQAAgXgKgRQgJgQgQAAQgGAAgGACg");
	this.shape.setTransform(0.3,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_5");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBYQgHgFAAgHQAAgEADgDQADgCAFAAIAGABIAJAFQAKAHALAAQAPAAAMgMQAMgMAAgRQABgRgLgPQgMgNgRgIQgPgGgagBIAjhIIBCAAIgLAXIg3AAIgLAYQAiAGAWAVQASATAAAYQAAAPgGAMQgGANgJAIQgJAJgLAGQgOAHgRABQgRAAgIgHg");
	this.shape.setTransform(0,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_4");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPBeIAAgwIhNAAIAAgSIBVh6IAPAAIAAB4IAZAAIAAAUIgZAAIAAAwgAgxAaIBAAAIAAhbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBbQgHgEAAgGQAAgEADgDQAEgDAEAAIAHACIALAFIALAFQAFABAGAAQANAAAKgLQAKgKAAgPQAAgLgFgKQgDgIgEgEQgGgFgKgFQgKgEgKAAIgFAAIAAgDQALgCAKgGQALgHAFgJQAFgJAAgKQAAgPgJgIQgJgJgMAAQgVAAgPAXIgEgCQAIgTAMgKQAMgKARAAQAWAAAMAOQAJALAAAMQAAAUgZAWQARAHAJALQAJANAAAQQAAAYgQASQgUAXglAAQgSAAgHgFg");
	this.shape.setTransform(-0.325,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.7,36.2,36.2);


(lib._2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BfIAAgGQAwgrATgdQATgbAAgXQAAgRgKgMQgLgLgOAAQgOAAgLAJQgLAHgFAPIgFAAQAEgYAOgOQAOgNAVAAQAWAAAPAOQAPAOAAAUQAAAOgHAOQgKAVgXAZIgpAtIAvAAIAVgBQAGgBAFgDQAFgEADgGIAFAAIgNAkg");
	this.shape.setTransform(0.075,-0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0.1,-0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0.1,-0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BeIAAgEQAwgtATgbQATgcAAgWQAAgSgKgLQgLgMgOAAQgOAAgLAIQgLAIgFAQIgFAAQAEgaAOgNQAOgOAVAAQAWAAAPAPQAPAPAAATQAAAOgHAOQgKAWgXAYIgpAtIAvAAIAVgBQAGgCAFgDQAFgDADgGIAFAAIgNAjg");
	this.shape_3.setTransform(-0.125,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:0.1,y:-0.35}},{t:this.shape_1,p:{x:0.1,y:-0.35}},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{x:-0.1,y:-0.4}},{t:this.shape_1,p:{x:-0.1,y:-0.4}},{t:this.shape_3}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.5,36.4,36.3);


(lib._1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBeIAAgEQANgBADgCQAEgCACgDQACgEgBgQIAAhkQABgUgCgFQgBgEgCgCQgDgCgEAAQgEAAgKADIgCgDIAsgXIAFAAIAACcQAAAQACADQABAEADACQAFACAMABIAAAEg");
	this.shape.setTransform(0.25,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGg");
	this.shape_1.setTransform(0.05,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(0.05,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-18.5,36.2,36.2);


// stage content:
(lib.карта_установки = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib._10_1();
	this.instance.setTransform(150.95,132.15,0.4998,0.3848,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib._10_1(), 3);

	this.instance_1 = new lib._7_1();
	this.instance_1.setTransform(38.7,122.5,0.4998,0.3848,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib._7_1(), 3);

	this.instance_2 = new lib._9_1();
	this.instance_2.setTransform(325.05,86.05,0.4998,0.3848,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib._9_1(), 3);

	this.instance_3 = new lib._8_1();
	this.instance_3.setTransform(319.55,118.6,0.4998,0.3848,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib._8_1(), 3);

	this.instance_4 = new lib._6_1();
	this.instance_4.setTransform(329.4,104.05,0.4998,0.3848,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib._6_1(), 3);

	this.instance_5 = new lib._5_1();
	this.instance_5.setTransform(51.15,119.45,0.4998,0.3848);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib._5_1(), 3);

	this.instance_6 = new lib._4_1();
	this.instance_6.setTransform(139,20.6,0.4998,0.3848,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib._4_1(), 3);

	this.instance_7 = new lib._3_1();
	this.instance_7.setTransform(267.7,98.3,0.4998,0.3848,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib._3_1(), 3);

	this.instance_8 = new lib._2_1();
	this.instance_8.setTransform(232.65,124.55,0.4998,0.3848,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib._2_1(), 3);

	this.instance_9 = new lib._1_1();
	this.instance_9.setTransform(108.75,175.7,0.4998,0.3848,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib._1_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_1
	this.instance_10 = new lib.refaktometr5();
	this.instance_10.setTransform(-7,1,0.4075,0.3663);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(193,118,212.39999999999998,115.30000000000001);
// library properties:
lib.properties = {
	id: 'C79C0092AD944C47B870B63FEF52043B',
	width: 400,
	height: 234,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/refaktometr5.png?1672042867669", id:"refaktometr5"},
		{src:"sounds/_1.mp3?1672042867669", id:"_1"},
		{src:"sounds/_10.mp3?1672042867669", id:"_10"},
		{src:"sounds/_2.mp3?1672042867669", id:"_2"},
		{src:"sounds/_3.mp3?1672042867669", id:"_3"},
		{src:"sounds/_4.mp3?1672042867669", id:"_4"},
		{src:"sounds/_5.mp3?1672042867669", id:"_5"},
		{src:"sounds/_6.mp3?1672042867669", id:"_6"},
		{src:"sounds/_7.mp3?1672042867670", id:"_7"},
		{src:"sounds/_8.mp3?1672042867670", id:"_8"},
		{src:"sounds/_9.mp3?1672042867670", id:"_9"}
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
an.compositions['C79C0092AD944C47B870B63FEF52043B'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;