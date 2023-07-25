import { ClientPacket } from "./Client/ClientPacketEnum"
import IncomingPacket from "./Client/IncomingPacket"
import PingMessage from "./Client/PingMessage"
import PongMessage from "./Server/PongMessage"
import UserConnection from "./Client/UserConnection"
import Session from "../Session"

export default class PacketManager
{

    private _packetList = new Map<ClientPacket, IncomingPacket>

    constructor() { 
        this._packetList = new Map<ClientPacket, IncomingPacket>()
        this.registerPacket()
    }

    public registerPacket(): void
    {
        this._packetList.set(ClientPacket.PING_MESSAGE, new PingMessage)
        this._packetList.set(ClientPacket.NEW_USER_CONNECTION, new UserConnection)
    }

    public handlePacket(session: Session, packetData: any): void {

        const packetIdentifier = packetData.packetId as ClientPacket
        const packetLogic = this._packetList.get(packetIdentifier)
        
        if(packetData.data)
        {
            packetLogic.setData(packetData.data)
        }

        console.log("[INCOMING PACKET : " + packetIdentifier + "]")

        packetLogic.triggerResponse(session)

    } 



}