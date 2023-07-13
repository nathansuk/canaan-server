"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientPacketEnum_1 = require("./Client/ClientPacketEnum");
const PingMessage_1 = require("./Client/PingMessage");
const UserConnection_1 = require("./Client/UserConnection");
class PacketManager {
    constructor() {
        this._packetList = new Map;
        this._packetList = new Map();
        this.registerPacket();
    }
    registerPacket() {
        this._packetList.set(ClientPacketEnum_1.ClientPacket.PING_MESSAGE, new PingMessage_1.default);
        this._packetList.set(ClientPacketEnum_1.ClientPacket.NEW_USER_CONNECTION, new UserConnection_1.default);
    }
    handlePacket(packetData) {
        const packetIdentifier = packetData.packetId;
        const packetLogic = this._packetList.get(packetIdentifier);
        if (packetData.data) {
            packetLogic.setData(packetData.data);
        }
        console.log("[INCOMING PACKET : " + packetIdentifier + "]");
        packetLogic.triggerResponse();
    }
}
exports.default = PacketManager;
//# sourceMappingURL=PacketManager.js.map