const io = require('socket.io')

class Chat {
    constructor(socket) {
        this.socket = socket;
    }

    sendMessage(msg) {
        this.socket.emit('message', {text: msg})
        console.log("emitted message")
    }

}