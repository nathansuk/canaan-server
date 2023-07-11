"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SessionManager {
    constructor() {
        this._sessions = new Map();
    }
    getSessions() {
        return this._sessions;
    }
    addSessions(sessionId, playerId) {
        this._sessions.set(playerId, sessionId);
    }
}
exports.default = SessionManager;
//# sourceMappingURL=SessionManager.js.map