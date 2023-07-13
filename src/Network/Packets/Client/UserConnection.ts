import OutgoingPacket from "../Server/OutgoingPacket";
import UserConnectionResponse from "../Server/UserConnectionResponse";
import IncomingPacket from "./IncomingPacket";

export default class UserConnection implements IncomingPacket
{

    private _data: any

    constructor(){}

    public triggerResponse(data: any): void {
        const outgoingPacket: UserConnectionResponse = new UserConnectionResponse()
        outgoingPacket.setData(this._data)
        outgoingPacket.sendResponse()
    }

    public setData(data: any): void
    {
        this._data = data
    }

}