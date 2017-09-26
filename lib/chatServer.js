const io = require('socket.io');

let chat;
let guestNum = 1;

const nickNames = {};

const chatServer =  {
    listen(server) {
        chat = io(server);
        chat.on('connect', (socket) => {
            console.log("connected");
        });
    }
};

module.exports = chatServer;

