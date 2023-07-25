import { DataSource } from "typeorm";
import { Player } from "./Entities/Player";

export default class DatabaseManager
{

    private _dataSource: DataSource

    constructor()
    {
        this.initializeDatasource()
    }

    private initializeDatasource()
    {
        this._dataSource = new DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'canaan',
            entities: [Player]
        })

        this._dataSource.initialize()
        .then(() => {
            console.log("DatabaseManager -> Initialized")
        })
        .catch((error) => {
            console.log("Error during database initialization : ", error)
        })

    }


}