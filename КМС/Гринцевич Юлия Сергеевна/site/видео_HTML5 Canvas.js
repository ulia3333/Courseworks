(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"видео_HTML5 Canvas_atlas_1", frames: [[1262,1614,239,35],[735,1202,282,237],[1947,490,89,39],[568,1634,239,35],[1019,1202,282,237],[1947,531,89,39],[809,1634,239,35],[0,1418,282,237],[1947,572,89,39],[1503,1640,239,35],[284,1418,282,237],[1947,613,89,39],[1502,1014,222,481],[1895,1474,100,39],[1947,654,89,39],[1895,1515,100,39],[1947,695,89,39],[1726,1014,167,542],[568,1441,363,74],[1895,1351,114,39],[933,1441,363,74],[1303,1390,114,39],[1298,1497,363,74],[1895,1392,114,39],[568,1517,363,74],[1303,1431,114,39],[933,1517,363,74],[1303,1202,186,186],[1895,1433,114,39],[1502,0,511,488],[1663,1558,362,39],[568,1593,345,39],[1298,1573,362,39],[915,1593,345,39],[1895,1014,138,255],[1662,1599,345,39],[1895,1271,138,78],[1502,490,443,522],[0,1202,733,214],[0,0,1500,1200]]},
		{name:"видео_HTML5 Canvas_atlas_2", frames: [[0,0,1500,1200]]},
		{name:"видео_HTML5 Canvas_atlas_3", frames: [[0,0,1500,1200]]},
		{name:"видео_HTML5 Canvas_atlas_4", frames: [[0,0,1224,1787]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_50 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.измерения = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.капля = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.свет = function() {
	this.initialize(img.свет);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2368,2800);


(lib.таблица_показателей = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.vrefaktometr1 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.vrefaktometr2 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.vrefaktometr3 = function() {
	this.initialize(ss["видео_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.stop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AvgvgIfBAAIAAfBI/BAAg");
	this.shape.setTransform(99.275,99.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AvgPhIAA/BIfBAAIAAfBg");
	this.shape_1.setTransform(99.275,99.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,203.6,203.5);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AtmxjMAAAAjHIbNybg");
	this.shape.setTransform(87.125,112.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AtmxjIbNQsI7NSbg");
	this.shape_1.setTransform(87.125,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,179.3,229.8);


(lib.pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AB2vrIEBAAIAAfXIkBAAgAl2vrIEBAAIAAfXIkBAAg");
	this.shape.setTransform(37.5,100.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB2PrIAA/WIEBAAIAAfWgAl2PrIAA/WIEBAAIAAfWg");
	this.shape_1.setTransform(37.5,100.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,80,205.7);


// stage content:
(lib.видео_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,263,264,1041,1904];
	this.streamSoundSymbolsList[0] = [{id:"v1",startFrame:0,endFrame:263,loop:1,offset:0}];
	this.streamSoundSymbolsList[263] = [{id:"v1",startFrame:263,endFrame:264,loop:1,offset:0}];
	this.streamSoundSymbolsList[264] = [{id:"v2",startFrame:264,endFrame:1040,loop:1,offset:0}];
	this.streamSoundSymbolsList[1041] = [{id:"v3",startFrame:1041,endFrame:1903,loop:1,offset:0}];
	this.streamSoundSymbolsList[1904] = [{id:"v4",startFrame:1904,endFrame:2365,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("v1",0);
		this.InsertIntoSoundStreamData(soundInstance,0,263,1);
	}
	this.frame_263 = function() {
		var soundInstance = playSound("v1",0);
		this.InsertIntoSoundStreamData(soundInstance,263,264,1);
	}
	this.frame_264 = function() {
		var soundInstance = playSound("v2",0);
		this.InsertIntoSoundStreamData(soundInstance,264,1040,1);
	}
	this.frame_1041 = function() {
		var soundInstance = playSound("v3",0);
		this.InsertIntoSoundStreamData(soundInstance,1041,1903,1);
	}
	this.frame_1904 = function() {
		var soundInstance = playSound("v4",0);
		this.InsertIntoSoundStreamData(soundInstance,1904,2365,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(263).call(this.frame_263).wait(1).call(this.frame_264).wait(777).call(this.frame_1041).wait(863).call(this.frame_1904).wait(462));

	// Слой_5
	this.stop_btn = new lib.stop();
	this.stop_btn.name = "stop_btn";
	this.stop_btn.setTransform(64.2,12.25,0.1324,0.1451);
	new cjs.ButtonHelper(this.stop_btn, 0, 1, 2, false, new lib.stop(), 3);

	this.pause_btn = new lib.pause();
	this.pause_btn.name = "pause_btn";
	this.pause_btn.setTransform(40.65,13.35,0.2041,0.136);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause(), 3);

	this.play_btn = new lib.play();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(8.8,12.5,0.1308,0.1245);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.instance = new lib.stop();
	this.instance.setTransform(66.2,12.25,0.1324,0.1451);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.stop(), 3);

	this.instance_1 = new lib.pause();
	this.instance_1.setTransform(40.65,13.35,0.2041,0.136);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.pause(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.pause_btn},{t:this.stop_btn}]}).to({state:[{t:this.play_btn},{t:this.instance_1},{t:this.instance}]},2365).wait(1));

	// Слой_3
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(57.35,159.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(228.5,185.55,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(74,311,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(57.35,159.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_6();
	this.instance_6.setTransform(228.5,185.55,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(74,311,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_7();
	this.instance_8.setTransform(57.35,159.1,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_12();
	this.instance_9.setTransform(417.75,120.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_27();
	this.instance_10.setTransform(354.05,171.1,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_10();
	this.instance_11.setTransform(167.05,398.85,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_25();
	this.instance_12.setTransform(217.5,158.6,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_16();
	this.instance_13.setTransform(417.75,120.8,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_14();
	this.instance_14.setTransform(167.05,398.85,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_20();
	this.instance_15.setTransform(417.75,120.8,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_18();
	this.instance_16.setTransform(167.05,398.85,0.5,0.5);

	this.instance_17 = new lib.капля();
	this.instance_17.setTransform(374,246,0.0105,0.0146);

	this.instance_18 = new lib.капля();
	this.instance_18.setTransform(362,241,0.0105,0.0146);

	this.instance_19 = new lib.CachedBmp_24();
	this.instance_19.setTransform(417.75,120.8,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_22();
	this.instance_20.setTransform(167.05,398.85,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_28();
	this.instance_21.setTransform(417.75,120.8,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_26();
	this.instance_22.setTransform(167.05,398.85,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_31();
	this.instance_23.setTransform(185.85,367.55,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_30();
	this.instance_24.setTransform(91.55,77.35,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_32();
	this.instance_25.setTransform(128.5,101,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_34();
	this.instance_26.setTransform(185.85,367.55,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_33();
	this.instance_27.setTransform(91.55,77.35,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_38();
	this.instance_28.setTransform(182.2,156.1,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_37();
	this.instance_29.setTransform(-12.35,262.8,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_36();
	this.instance_30.setTransform(91.55,34.95,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_47();
	this.instance_31.setTransform(73.85,54,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_42();
	this.instance_32.setTransform(182.2,133.1,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_41();
	this.instance_33.setTransform(-12.35,239.8,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_40();
	this.instance_34.setTransform(91.55,11.95,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_46();
	this.instance_35.setTransform(182.2,133.1,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_45();
	this.instance_36.setTransform(-12.35,239.8,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_44();
	this.instance_37.setTransform(91.55,11.95,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_50();
	this.instance_38.setTransform(182.2,133.1,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_49();
	this.instance_39.setTransform(-12.35,239.8,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_48();
	this.instance_40.setTransform(91.55,11.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},264).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},56).to({state:[{t:this.instance_6},{t:this.instance_8},{t:this.instance_7}]},84).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_14},{t:this.instance_10},{t:this.instance_13}]},114).to({state:[{t:this.instance_12},{t:this.instance_16},{t:this.instance_10},{t:this.instance_15}]},100).to({state:[{t:this.instance_12},{t:this.instance_20},{t:this.instance_10},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]},1).to({state:[{t:this.instance_12},{t:this.instance_22},{t:this.instance_10},{t:this.instance_21},{t:this.instance_18},{t:this.instance_17}]},239).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]},1).to({state:[{t:this.instance_25},{t:this.instance_27},{t:this.instance_26}]},180).to({state:[{t:this.instance_31,p:{y:54}},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]},1).to({state:[{t:this.instance_31,p:{y:31}},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32}]},519).to({state:[{t:this.instance_31,p:{y:31}},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]},343).to({state:[{t:this.instance_31,p:{y:31}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]},462).wait(1));

	// Слой_1
	this.instance_41 = new lib.vrefaktometr1();
	this.instance_41.setTransform(182,53,0.2136,0.2957);

	this.instance_42 = new lib.свет();
	this.instance_42.setTransform(236.4,68.2,0.0339,0.0333,135);

	this.instance_43 = new lib.vrefaktometr3();
	this.instance_43.setTransform(84,68,0.3235,0.3173);

	this.instance_44 = new lib.капля();
	this.instance_44.setTransform(351,236,0.0105,0.0146);

	this.instance_45 = new lib.измерения();
	this.instance_45.setTransform(320,37,0.6986,0.7973);

	this.instance_46 = new lib.vrefaktometr2();
	this.instance_46.setTransform(0,77,0.2281,0.287);

	this.instance_47 = new lib.таблица_показателей();
	this.instance_47.setTransform(150,382,0.4177,0.4168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41}]}).to({state:[{t:this.instance_41},{t:this.instance_42}]},159).to({state:[{t:this.instance_41},{t:this.instance_42}]},104).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_41}]},56).to({state:[{t:this.instance_41}]},84).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},114).to({state:[{t:this.instance_43}]},100).to({state:[{t:this.instance_43},{t:this.instance_44}]},1).to({state:[{t:this.instance_43},{t:this.instance_44}]},239).to({state:[{t:this.instance_41},{t:this.instance_45,p:{y:37}}]},1).to({state:[{t:this.instance_41},{t:this.instance_45,p:{y:37}}]},180).to({state:[{t:this.instance_45,p:{y:37}},{t:this.instance_46,p:{y:77}}]},1).to({state:[{t:this.instance_45,p:{y:14}},{t:this.instance_46,p:{y:54}},{t:this.instance_47}]},519).to({state:[{t:this.instance_45,p:{y:14}},{t:this.instance_46,p:{y:54}},{t:this.instance_47}]},343).to({state:[{t:this.instance_45,p:{y:14}},{t:this.instance_46,p:{y:54}},{t:this.instance_47}]},462).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(404).to({_off:true},1).wait(455).to({_off:false,scaleX:0.2465,scaleY:0.2322,x:-42,y:114},0).wait(180).to({_off:true},1).wait(1325));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(278,242.2,351.5,229);
// library properties:
lib.properties = {
	id: 'F48054B96FDAEB4BAC5C2A12773DEDC9',
	width: 640,
	height: 480,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/свет_.png?1672216627986", id:"свет"},
		{src:"images/видео_HTML5 Canvas_atlas_1.png?1672216627839", id:"видео_HTML5 Canvas_atlas_1"},
		{src:"images/видео_HTML5 Canvas_atlas_2.png?1672216627840", id:"видео_HTML5 Canvas_atlas_2"},
		{src:"images/видео_HTML5 Canvas_atlas_3.png?1672216627840", id:"видео_HTML5 Canvas_atlas_3"},
		{src:"images/видео_HTML5 Canvas_atlas_4.png?1672216627840", id:"видео_HTML5 Canvas_atlas_4"},
		{src:"sounds/v1.mp3?1672216627986", id:"v1"},
		{src:"sounds/v2.mp3?1672216627986", id:"v2"},
		{src:"sounds/v3.mp3?1672216627986", id:"v3"},
		{src:"sounds/v4.mp3?1672216627986", id:"v4"}
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
an.compositions['F48054B96FDAEB4BAC5C2A12773DEDC9'] = {
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