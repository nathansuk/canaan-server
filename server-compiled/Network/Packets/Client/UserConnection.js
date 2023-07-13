"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserConnectionResponse_1 = require("../Server/UserConnectionResponse");
class UserConnection {
    constructor() { }
    triggerResponse(data) {
        const outgoingPacket = new UserConnectionResponse_1.default();
        outgoingPacket.setData(this._data);
        outgoingPacket.sendResponse();
    }
    setData(data) {
        this._data = data;
    }
}
exports.default = UserConnection;
//# sourceMappingURL=UserConnection.js.map