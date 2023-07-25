import DatabaseManager from "./Database/DatabaseManager";
import SocketServer from "./Network/SocketServer";
import WebsocketServer from "./Network/SocketServer";

export default class Server 
{

    public static _socketServer: SocketServer = new SocketServer()
    public static _databaseManager: DatabaseManager = new DatabaseManager()

    public getSocketServer(): SocketServer
    {
        return Server._socketServer;
    }



}