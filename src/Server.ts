import DatabaseManager from "./Database/DatabaseManager";
import WebsocketServer from "./Network/WebsocketServer";

export default class Server 
{

    public static _socketServer: WebsocketServer = new WebsocketServer()
    public static _databaseManager: DatabaseManager = new DatabaseManager()

    public getSocketServer(): WebsocketServer
    {
        return Server._socketServer;
    }



}