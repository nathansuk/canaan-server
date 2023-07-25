export default class Player 
{

    private _id: number
    private _username: string

    constructor(id: number, username: string)
    {
        this._id = id
        this._username = username
    }

    public getId(): number
    {
        return this._id
    }

    public getUsername(): string
    {
        return this._username
    }


}