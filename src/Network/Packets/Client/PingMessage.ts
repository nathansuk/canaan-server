import OutgoingPacket from "../Server/OutgoingPacket";
import PongMessage from "../Server/PongMessage";
import IncomingPacket from "./IncomingPacket";
import Server from "../../../Server";

export default class PingMessage implements IncomingPacket
{

    constructor() {}

    public triggerResponse(): void
    {
        new PongMessage().sendResponse()
    }

    public setData(): void {}


}