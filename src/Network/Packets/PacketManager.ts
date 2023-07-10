import { ClientPacket } from "./Client/ClientPacketEnum"
import IncomingPacket from "./Client/IncomingPacket"
import PingMessage from "./Client/PingMessage"
import PongMessage from "./Server/PongMessage"

export default class PacketManager
{

    private _packetList = new Map<ClientPacket, IncomingPacket>

    constructor() { 
        this._packetList = new Map<ClientPacket, IncomingPacket>()
        this.registerPacket()
    }

    public registerPacket(): void
    {
        this._packetList.set(ClientPacket.PING_MESSAGE, new PingMessage(new PongMessage))
    }

    public handlePacket(packetId: number): void {

        const packet = packetId as ClientPacket
        const packetLogic = this._packetList.get(packet)

        console.log("[INCOMING PACKET : " + packetId + "]")

        packetLogic.trigger()

    } 



}