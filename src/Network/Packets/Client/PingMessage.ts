import OutgoingPacket from "../Server/OutgoingPacket";
import PongMessage from "../Server/PongMessage";
import IncomingPacket from "./IncomingPacket";

export default class PingMessage extends IncomingPacket
{

    constructor(response: OutgoingPacket) {
        super(response)
    }


}