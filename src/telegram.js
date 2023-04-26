
// set bot's commands
export function setMyCommands(tgKey) {
	const i = {
		body: JSON.stringify({
			"commands": [
				{
					"command": "/new",
					"description": "Generate a new key"
				},
				{
					"command": "/ping",
					"description": "Pong"
				},
				{
					"command": "/my",
					"description": "Get current key"
				}
			]
		}),
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8"
		}
	};
	return fetch(`https://api.telegram.org/bot${tgKey}/setMyCommands`, i);
}

// send a text message
export async function sendMessage(msg, chatid, tgKey) {
	const i = {
		body: JSON.stringify({
			"chat_id": chatid,
			"text": msg,
			"parse_mode": "MarkDown"
		}),
		method: "POST",
		headers: {
			"content-type": "application/json;charset=UTF-8"
		}
	};
	return await fetch(`https://api.telegram.org/bot${tgKey}/sendMessage`, i);
}
