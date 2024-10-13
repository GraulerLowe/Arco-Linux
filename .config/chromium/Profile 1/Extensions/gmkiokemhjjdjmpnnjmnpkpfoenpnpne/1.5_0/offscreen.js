chrome.runtime.onMessage.addListener(async msg => {
	if (!msg.offscreen) {
		return;
	}
	switch (msg.type) {
		case "play":
			playAudio(msg.play);
			break;
		case "pause":
			pauseAudio(msg.source);
			break;
		case "changeVolume":
			changeVolume(msg.volume);
			break;
		case "timerEnd":
			timerEnd();
			break;
	}
});

const songsContainer = document.getElementById("songsContainer");

function playAudio(play) {
	const { source, volume } = play;
	var audioTag = document.createElement("audio");
	audioTag.setAttribute("id", source);
	audioTag.setAttribute("class", "song");
	audioTag.src = source;
	audioTag.loop = true;
	audioTag.volume = volume;
	audioTag.play();
	songsContainer.appendChild(audioTag);
	document.getElementById(source).addEventListener("timeupdate", function () {
		var buffer = 0.44;
		if (this.currentTime > this.duration - buffer) {
			this.currentTime = 0;
			this.play();
		}
	});
}

function pauseAudio(source) {
	var toPause = document.getElementById(source);
	songsContainer.removeChild(toPause);
}

function changeVolume(volume) {
	var allAudios = document.querySelectorAll(".song");
	if (allAudios.length < 0) return;
	allAudios.forEach(audio => {
		audio.volume = volume;
	});
}

function timerEnd() {
	let timerAudio = document.getElementById("timerAudio");
	timerAudio.src = "./assets/audio/end_sound_timer.mp3";
	timerAudio.volume = 0.55;
	timerAudio.pause();
	setTimeout(() => {
		timerAudio.play();
	}, 150);
}
