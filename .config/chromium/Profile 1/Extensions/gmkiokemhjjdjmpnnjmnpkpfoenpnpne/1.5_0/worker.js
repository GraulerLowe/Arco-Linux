async function createOffscreen() {
	if (await chrome.offscreen.hasDocument()) return;
	await chrome.offscreen.createDocument({
		url: "offscreen.html",
		reasons: ["AUDIO_PLAYBACK"],
		justification: "Background sounds to relax and/or study",
	});
}

async function playTimerFinishedSound() {
	await createOffscreen();
	await chrome.runtime.sendMessage({ type: "timerEnd", offscreen: true });
}

function formatSeconds(seconds) {
	var minutes = Math.floor(seconds / 60);
	var remainingSeconds = seconds % 60;
	return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

var countdownInterval;

function startCountdown() {
	countdownInterval = setInterval(() => {
		chrome.storage.local.get(
			[
				"seconds",
				"currentPhase",
				"selectedTimer",
				"sessionLength",
				"shortBreakLength",
				"longBreakLength",
				"timerStatus",
			],
			async res => {
				let sessionLength = res.sessionLength ?? 1;
				let shortLength = res.shortBreakLength ?? 1;
				let longLength = res.longBreakLength ?? 1;
				let timerStatus = res.timerStatus ?? 0;
				let currentPhase = res.currentPhase ?? 0;
				let seconds = res.seconds ?? 0;

				if (timerStatus === 2 || timerStatus === 3) {
					return;
				}

				if (currentPhase === 0) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({ color: "#FE5163" });
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 1,
							timerStatus: 1,
							currentPhase: 1,
							seconds: shortLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 1) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({
							color: "#FE5163",
						});
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 0,
							timerStatus: 1,
							currentPhase: 2,
							seconds: sessionLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 2) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({ color: "#FE5163" });
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 1,
							timerStatus: 1,
							currentPhase: 3,
							seconds: shortLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 3) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({
							color: "#FE5163",
						});
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 0,
							timerStatus: 1,
							currentPhase: 4,
							seconds: sessionLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 4) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({
							color: "#FE5163",
						});
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 1,
							timerStatus: 1,
							currentPhase: 5,
							seconds: shortLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 5) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({
							color: "#FE5163",
						});
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 0,
							timerStatus: 1,
							currentPhase: 6,
							seconds: sessionLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 6) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({
							color: "#FE5163",
						});
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 1,
							timerStatus: 1,
							currentPhase: 7,
							seconds: shortLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 7) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({
							color: "#FE5163",
						});
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 0,
							timerStatus: 1,
							currentPhase: 8,
							seconds: sessionLength * 60,
							buttonText: "Pause",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						startCountdown();
						return;
					}
				} else if (currentPhase === 8) {
					if (seconds > 0) {
						chrome.storage.local.set({
							seconds: seconds - 1,
							buttonText: "Pause",
						});
						chrome.action.setBadgeBackgroundColor({
							color: "#FE5163",
						});
						chrome.action.setBadgeTextColor({ color: "#ffffff" });
						chrome.action.setBadgeText({
							text: `${formatSeconds(seconds - 1)}`,
						});
					} else {
						playTimerFinishedSound();
						chrome.storage.local.set({
							selectedTimer: 0,
							timerStatus: 3,
							currentPhase: 9,
							seconds: 0,
							buttonText: "Reset the session",
						});
						chrome.action.setBadgeText({
							text: "",
						});
						clearInterval(countdownInterval);
						return;
					}
				}
			}
		);
	}, 1000);
}

function pauseCountdown() {
	clearInterval(countdownInterval);
	chrome.storage.local.set({ timerStatus: 2, buttonText: "Resume" });
}

function resetCountdown() {
	clearInterval(countdownInterval);
	chrome.action.setBadgeText({
		text: "",
	});
	chrome.storage.local.set({
		timerStatus: 0,
		currentPhase: 0,
		selectedTimer: 0,
		buttonText: "Start Studying",
	});
}

chrome.runtime.onMessage.addListener(async msg => {
	switch (msg.type) {
		case "play":
			await createOffscreen();
			await chrome.runtime.sendMessage({
				type: "play",
				play: msg.play,
				offscreen: true,
			});
			break;
		case "pause":
			await createOffscreen();
			await chrome.runtime.sendMessage({
				type: "pause",
				source: msg.source,
				offscreen: true,
			});
			break;
		case "changeVolume":
			await createOffscreen();
			await chrome.runtime.sendMessage({
				type: "changeVolume",
				volume: msg.volume,
				offscreen: true,
			});
			break;
		case "timerStart":
			startCountdown();
			break;
		case "timerPause":
			pauseCountdown();
			break;
		case "timerReset":
			resetCountdown();
			break;
		default:
			break;
	}
});
