"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const PacketManager_1 = require("./Packets/PacketManager");
const SessionManager_1 = require("./SessionManager");
class WebsocketServer {
    constructor() {
        this._socket = new ws_1.WebSocketServer({ port: 8080 });
        this._packetManager = new PacketManager_1.default();
        this._sessionManager = new SessionManager_1.default();
        this.listen(this._socket);
    }
    listen(server) {
        console.log("Websocket Server initialized");
        server.on('connection', (client) => {
            console.log('[SOCKET] New client connected');
            this._sessionManager.addSessions(1, client); // Todo map a Player object with session id
            client.on('message', (data) => {
                const packet = JSON.parse(data.toString());
                this._packetManager.handlePacket(packet);
            });
        });
    }
    send(clientId) {
        const client = this._sessionManager.getSessions().get(clientId);
        const response = {
            "packetId": 1
        };
        client.send(Buffer.from(JSON.stringify(response), "utf-8"));
    }
}
exports.default = WebsocketServer;
//# sourceMappingURL=WebsocketServer.js.map