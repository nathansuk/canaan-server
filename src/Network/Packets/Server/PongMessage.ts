import Server from "../../../Server"
import Session from "../../Session"
import OutgoingPacket from "./OutgoingPacket"

export default class PongMessage implements OutgoingPacket
{

    public sendResponse(session: Session): void {
        console.log('Response sent')
        session.send(this)
    }

}