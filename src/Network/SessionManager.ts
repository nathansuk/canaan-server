import OutgoingPacket from "./Packets/Server/OutgoingPacket"
import Player from "../Players/Player"
import Session from "./Session"

export default class SessionManager
{

    public static _sessions: Map<string, Session> // jwt token as session id / Player
    private static lastId: number = 1 // temp

    constructor()
    {
        SessionManager._sessions = new Map<string, Session>()
    }
    
    public getSessions(): Map<string, Session>
    {
        return SessionManager._sessions
    }

    public addSessions(session: Session): void
    {
        const sessionId = 'session' + SessionManager.lastId // temp

        SessionManager._sessions.set(sessionId, session)
        
        SessionManager.lastId++ // temp

        console.log(SessionManager._sessions.size)
    }

}