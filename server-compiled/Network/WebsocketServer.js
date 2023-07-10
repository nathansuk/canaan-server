"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const PacketManager_1 = require("./Packets/PacketManager");
class WebsocketServer {
    constructor() {
        this._socket = new ws_1.WebSocketServer({ port: 8080 });
        this._packetManager = new PacketManager_1.default();
        this._players = new Map;
        this.listen(this._socket);
    }
    listen(server) {
        console.log("Démarrage du serveur socket");
        server.on('connection', (client) => {
            console.log('[SOCKET] New client connected :' + client);
            this._players.set(1, client);
            client.on('message', (data) => {
                const packet = JSON.parse(data.toString());
                this._packetManager.handlePacket(packet.packetId);
            });
        });
    }
    send(clientId) {
        const client = this._players.get(clientId);
        const response = {
            "packetId": 1
        };
        client.send(Buffer.from(JSON.stringify(response), "utf-8"));
    }
}
exports.default = WebsocketServer;
//# sourceMappingURL=WebsocketServer.js.map