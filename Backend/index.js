const express = require("express")

// Express Setup

const app = express();
const server = app.listen(3000, () => {
	console.log("Listening on localhost:3000 ...")
})

// Socket.io Setup

const io = require('socket.io')(server)

const Status = {
	WAITING: "waiting",
	STARTING: "starting",
	RUNNING: "running",
}

// Socket.io Code
io.on("connection", client => {
	console.log("new connection established")

	// Initialise Client Data Structure
	client._data = {}

	client.on("user-data", (name) => {
		// Store user Data
		client._data.name = name

		console.log(name);

		client.emit("connected")
	})

	client.on("create-room", (roomname, difficulty, gamemode, end) => {

		// Generate random room Id
		let roomId = Math.random().toString(36)
			.replace("0", "") // remove 0 s -- not working?
			.replace("o", "") // remove O s
			.substring(2, 8)
			.toUpperCase()

		// Join Admin in Room / create Room
		client.join(roomId)
		client._data.room = io.sockets.adapter.rooms[roomId]
		client._data.team = "red"

		// Initialise Room Data Structure
		let room = io.sockets.adapter.rooms[roomId]
		room._data = {}
		room._data.admin_id = client.id

		room._data.public = {}
		room._data.public.id = roomId
		room._data.public.name = roomname
		room._data.public.difficulty = difficulty
		room._data.public.gamemode = gamemode
		room._data.public.end = end
		room._data.public.status = Status.WAITING

		client.emit("created-room", roomId)
		client.emit("user-joined-room", getCleanData(client._data))
	})

	client.on("join-room", (roomId) => {

		// Check if room is waiting for Players
		if (io.sockets.adapter.rooms[roomId] == undefined || io.sockets.adapter.rooms[roomId]._data.public.status !== Status.WAITING) {
			client.emit("failed-join-room")
			return
		}

		client.join(roomId) // Join Client in Room
		client._data.room = io.sockets.adapter.rooms[roomId]
		client._data.team = "blue"
		client.broadcast.to(roomId).emit("user-joined-room", getCleanData(client._data)) // Broadcast to all roommebers that the user joined

		// Get User List
		let room = io.sockets.adapter.rooms[roomId]
		let userlist = []

		client.emit("joined-room", room._data.public) // Send User the List of the other users

		for (let userId in room.sockets) {
			client.emit("user-joined-room", getCleanData(io.sockets.connected[userId]._data))
		}

	})

	client.on("leave-room", () => {

		client.leave(client._data.room)

		client.emit("left-room")

		//dissconnect all clients when its the admin
		if (client.id == room.admin_id) {
			for (let user in client._data.room.sockets) {
				user.leave(client._data.room)
				user.emit("room-closed")
			}
		}
	})

	client.on("start-room", () => {
		room = client._data.room
		console.log(room);
		if (client.id != room._data.admin_id)
			return

		room._data.public.status = Status.STARTING
		io.to(room._data.public.id).emit("room-starting")

		setTimeout(() => {
			room._data.public.status = Status.RUNNING
			io.to(room._data.public.id).emit("room-started")
		}, 5 * 1000)
	})

	client.on("cancel-start-room", () => {
		room = client._data.room
		if (client.id != room._data.admin_id)
			return

		if (room._data.public.status != Status.STARTING)
			return

		console.log("stop");

		room._data.public.status = Status.WAITING
		io.to(room._data.public.id).emit("room-start-canceled")

	})

})


function getCleanData(data) {
	let clone = Object.assign({}, data);
	delete clone.room;
	return clone
}