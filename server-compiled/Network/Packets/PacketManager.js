"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientPacketEnum_1 = require("./Client/ClientPacketEnum");
const PingMessage_1 = require("./Client/PingMessage");
const PongMessage_1 = require("./Server/PongMessage");
class PacketManager {
    constructor() {
        this._packetList = new Map;
        this._packetList = new Map();
        this.registerPacket();
    }
    registerPacket() {
        this._packetList.set(ClientPacketEnum_1.ClientPacket.PING_MESSAGE, new PingMessage_1.default(new PongMessage_1.default));
    }
    handlePacket(packetId) {
        const packet = packetId;
        const packetLogic = this._packetList.get(packet);
        console.log("[INCOMING PACKET : " + packetId + "]");
        packetLogic.trigger();
    }
}
exports.default = PacketManager;
//# sourceMappingURL=PacketManager.js.map