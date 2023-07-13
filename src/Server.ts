import WebsocketServer from "./Network/WebsocketServer";

export default class Server 
{

    public static _socketServer: WebsocketServer = new WebsocketServer()

    public getSocketServer(): WebsocketServer
    {
        return Server._socketServer;
    }


}