import {WebSocketServer} from 'ws'
import PacketManager from './Packets/PacketManager'
import SessionManager from './SessionManager'
import Player from '../Players/Player'
import Session from './Session'

export default class SocketServer {

    private _socket: WebSocketServer
    private _packetManager: PacketManager
    private _sessionManager: SessionManager
    
    constructor() {
        this._socket = new WebSocketServer({port: 8080})
        this._packetManager = new PacketManager()
        this._sessionManager = new SessionManager()
        this.listen(this._socket)
    }

    listen(server: WebSocketServer): void {

        console.log("WebSocket -> Initialized")

        server.on('connection', (client: any) => {

            console.log('[SocketServer] New client connected')
            
            const player = new Player(1, "Nathan") // temp
            const session = new Session(client, player) // temp
            
            this._sessionManager.addSessions(session)

            client.on('message', (data: Uint16Array) => {


                const packet: any = JSON.parse(data.toString())
                const sessionToken: string = packet.sessionToken

                const session = SessionManager._sessions.get(sessionToken)
                console.log(session.getPlayer().getUsername())

                this._packetManager.handlePacket(session, packet)
            })
        })
    }

}

