"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebsocketServer_1 = require("./Network/WebsocketServer");
class Server {
    getSocketServer() {
        return Server._socketServer;
    }
}
Server._socketServer = new WebsocketServer_1.default();
exports.default = Server;
//# sourceMappingURL=Server.js.map