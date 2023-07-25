import Session from "../../Session";

export default interface OutgoingPacket
{

    sendResponse(session: Session): void;

}