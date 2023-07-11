"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PongMessage_1 = require("../Server/PongMessage");
class PingMessage {
    constructor() {
    }
    triggerResponse() {
        new PongMessage_1.default();
    }
}
exports.default = PingMessage;
//# sourceMappingURL=PingMessage.js.map