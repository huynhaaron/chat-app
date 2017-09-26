const Chat = require('./chat')

class ChatUI {
    constructor(socket) {
        this.socket = socket;
        this.chat = new Chat(socket);
        this.form = document.querySelector('form');
        this.msgList = document.querySelector('ul#msg-list');
        this.roomList = document.querySelector('ul#room-list');
        this.input = document.querySelector('input');
        this.room = document.querySelector('#room');
    }

    getInput () {
        return this.input.value
    }

    sendMessage(room) {
        this.chat.sendMessage(room, this.getInput())
    }

    addMessage(msg) {
        const newMessage = document.createElement('li')
        newMessage.textContent = msg
        this.msgList.appendChild(newMessage)
    }

    submitHandler() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.processUserInput()
            this.input.value = ''
        })
    }

    processUserInput() {
        const msg = this.getInput()
        this.addMsg(msg)
    }

}