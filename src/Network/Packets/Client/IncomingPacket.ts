import OutgoingPacket from "../Server/OutgoingPacket"

export default class IncomingPacket
{

    private _response: OutgoingPacket

    constructor(response: OutgoingPacket)
    {
        this._response = response
    }

    public getResponse(): OutgoingPacket
    {
        return this._response;
    }
    
    public trigger(): void {
        this._response.trigger()
    }
    



}