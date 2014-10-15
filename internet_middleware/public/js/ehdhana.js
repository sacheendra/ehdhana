var text = document.getElementById("controlButton")
var socket = io();

socket.on('current status', function (data) {
	if(data == 5351) {
		text.data = "Turn Off"
	} else {
		text.data = "Turn On"
	}
});

function contactServer() {
	if(text.value == "Turn On") {
		socket.emit("receivemessage", 5351);
		text.value = "Turn Off"
	} else {
		socket.emit("receivemessage", 5350);
		text.value = "Turn On"
	}
}

document.getElementById("controlButton").onclick = contactServer;