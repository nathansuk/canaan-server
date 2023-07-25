import Player from "../Players/Player"
import OutgoingPacket from "./Packets/Server/OutgoingPacket"

export default class Session
{

    private _socketClient: any
    private _player: Player

    constructor(socketClient: any, player: Player)
    {
        this._socketClient = socketClient
        this._player = player
    }

    public getSocketClient(): any
    {
        return this._socketClient
    }

    public getPlayer(): Player
    {
        return this._player
    }

    public send(packet: OutgoingPacket)
    {
        console.log('salut')
        this._socketClient.send("bonjour")
    }


}