import { DataSource } from "typeorm";

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
            database: 'canaan'
        })

        this._dataSource.initialize()
        .then(() => {
            console.log("DatabaseManager initialized")
        })
        .catch((error) => {
            console.log("Error during database initialization : ", error)
        })
    }


}