import {WebSocketServer} from 'ws'
import PacketManager from './Packets/PacketManager'
import SessionManager from './SessionManager'

export default class WebsocketServer {

    private _socket: WebSocketServer
    private _packetManager: PacketManager
    private _players: Map<number, any>
    private _sessionManager: SessionManager
    
    constructor() {
        this._socket = new WebSocketServer({port: 8080})
        this._packetManager = new PacketManager()
        this._sessionManager = new SessionManager()
        this._players = new Map<number, any>
        this.listen(this._socket)
    }

    listen(server): void {

        console.log("Démarrage du serveur socket")

        server.on('connection', (client) => {

            console.log('[SOCKET] New client connected :' + client)
            this._players.set(1, client)

            client.on('message', (data: Uint16Array) => {
                const packet: any = JSON.parse(data.toString())

                this._packetManager.handlePacket(packet)
            })
        })
    }

    public send(clientId: number): void {

        const client = this._players.get(clientId)
        
        const response = {
            "packetId": 1
        }

        client.send(Buffer.from(JSON.stringify(response), "utf-8"))

    }





}

