import OutgoingPacket from "../Server/OutgoingPacket";
import IncomingPacket from "./IncomingPacket";

export default class UserConnection implements IncomingPacket
{
    constructor()
    {
    }

    public triggerResponse(): void {
        new UserConnection()
    }

}