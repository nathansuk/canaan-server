import OutgoingPacket from "../Server/OutgoingPacket"

export default interface IncomingPacket
{

    triggerResponse(data?): void;
    setData(data): void
}