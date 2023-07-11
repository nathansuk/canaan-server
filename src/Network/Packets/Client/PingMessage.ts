import OutgoingPacket from "../Server/OutgoingPacket";
import PongMessage from "../Server/PongMessage";
import IncomingPacket from "./IncomingPacket";

export default class PingMessage implements IncomingPacket
{

    constructor() {
    }

    public triggerResponse(): void
    {
        new PongMessage()
    }


}