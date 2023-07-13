import OutgoingPacket from "./OutgoingPacket";

export default class UserConnectionResponse implements OutgoingPacket
{

    private _username: string

    constructor() {}

    public sendResponse(): void {
        console.log(this._username)
    }

    public setData(data: any): void
    {
        console.log("Outgoing packet datas " + data)
        this._username = data
    }



}