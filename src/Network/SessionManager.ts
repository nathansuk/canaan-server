import OutgoingPacket from "./Packets/Server/OutgoingPacket"

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

    public addSessions(playerId: number, sessionId: any): void
    {
        this._sessions.set(playerId, sessionId)
    }

    public sendPacket(playerId: any, packet: OutgoingPacket)
    {
        const playerSession = this._sessions.get(playerId)
        playerSession.send(packet)
    }

}