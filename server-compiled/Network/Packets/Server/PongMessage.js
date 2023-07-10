"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("../../../Server");
const OutgoingPacket_1 = require("./OutgoingPacket");
class PongMessage extends OutgoingPacket_1.default {
    send() {
        console.log('Response sent');
        Server_1.default._socketServer.send(1);
    }
}
exports.default = PongMessage;
//# sourceMappingURL=PongMessage.js.map