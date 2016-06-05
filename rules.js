API.on(API.CHAT_COMMAND, command);

function command(rules) {
	console.log("command called");
	API.sendChat("Rules: http://justbobthings.com/i/rules.png");
}
