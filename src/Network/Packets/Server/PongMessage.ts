import Server from "../../../Server"
import OutgoingPacket from "./OutgoingPacket"

export default class PongMessage implements OutgoingPacket
{

    public sendResponse(): void {
        console.log('Response sent')
        Server._socketServer.send(1)
    }

}