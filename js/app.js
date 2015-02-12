var Sound = function(fname) {
	this.src = ((new Audio()).canPlayType("audio/ogg; codecs=vorbis")==="") ? 'audio/'+fname+'.wav' : 'audio/'+fname+'.ogg';
	this.audio = new Audio(this.src);
	this.play = function(){
		this.audio.play();
	}
}

var sean = {
	'camera-click': new Sound('sean/camera-click')
}

var jesse = {
	'hello_everyone': new Sound('jesse/hello_everyone'),
	'goosebumps': new Sound('jesse/goosebumps'),
	'undo': new Sound('jesse/undo')
}

$('.sound').on('click', function(e){
	var person = eval($(this).data('person'));
	var file = person[$(this).data('file')];
	
	file.play();
});