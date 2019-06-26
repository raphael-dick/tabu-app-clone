import io from "socket.io-client"
import router from "@/router"
import store from "@/store"

const socket = io.connect('http://10.0.0.16:3000')

socket.emit("user-data", Math.random().toString(36).substring(2, 8))

export default {
	socket,
}

socket.on("created-room", roomId => {
	router.push("/created/" + roomId)
});

socket.on("joined-room", (userList, roomData) => {
	router.push("/joined/")
	console.log(userList)
	store.state.playerList = userList
});

socket.on("user-joined-room", userdata => {
	store.commit("addUser", userdata)
})

socket.on("room-started", () => {
	console.log("room started");
})