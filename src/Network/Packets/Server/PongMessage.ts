import Server from "../../../Server"
import OutgoingPacket from "./OutgoingPacket"

export default class PongMessage extends OutgoingPacket
{
    
    public send(): void {
        console.log('Response sent')
        Server._socketServer.send(1)
    }

}