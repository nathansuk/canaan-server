import OutgoingPacket from "../Server/OutgoingPacket";
import PongMessage from "../Server/PongMessage";
import IncomingPacket from "./IncomingPacket";
import Server from "../../../Server";
import Session from "../../Session";

export default class PingMessage implements IncomingPacket
{

    constructor() {}

    public triggerResponse(session: Session): void
    {
        new PongMessage().sendResponse(session)
    }

    public setData(): void {}


}