"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SessionManager {
    constructor() {
        this._sessions = new Map();
    }
    getSessions() {
        return this._sessions;
    }
    addSessions(playerId, sessionId) {
        this._sessions.set(playerId, sessionId);
    }
    sendPacket(playerId, packet) {
        const playerSession = this._sessions.get(playerId);
        playerSession.send(packet);
    }
}
exports.default = SessionManager;
//# sourceMappingURL=SessionManager.js.map