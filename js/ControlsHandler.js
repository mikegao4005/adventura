
var ControlsHandler = function() {

	
	var audioParams = {
		useMic: false,
		useSample:true,
		volSens:1,
		beatHoldTime:40,
		beatDecayRate:0.97,
		sampleURL: "adventura.mp3"
	};

	function init(){

		//Init DAT GUI control panel
		gui = new dat.GUI({autoPlace: false });
		

		AudioHandler.onUseSample();

	}

	return {
		init:init,
		audioParams: audioParams,
	};
}();