"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IncomingPacket {
    constructor(response) {
        this._response = response;
    }
    getResponse() {
        return this._response;
    }
    trigger() {
        this._response.trigger();
    }
}
exports.default = IncomingPacket;
//# sourceMappingURL=IncomingPacket.js.map