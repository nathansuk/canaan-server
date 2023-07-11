import OutgoingPacket from "../Server/OutgoingPacket"

export default interface IncomingPacket
{
    triggerResponse(): void;
}