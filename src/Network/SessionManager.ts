export default class SessionManager
{

    private _sessions: Map<number, any>

    constructor()
    {
        this._sessions = new Map<number, any>()
    }
    
    public getSessions(): Map<number, any>
    {
        return this._sessions
    }

    public addSessions(sessionId: any, playerId: number): void
    {
        this._sessions.set(playerId, sessionId)
    }

}