const sqlite3 = require('sqlite3').verbose();

class db {

    static #db;

    static open() {
        if (this.#db == undefined) {
            this.#db = new sqlite3.Database('../db/db-unefa-WMS.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_FULLMUTEX, (error) => {
                if (error) {
                    console.error(error.message);
                } else {
                    console.log('Database connected...');
                }
            })
        }
        return this.#db;
    }

    static close() {
        if (this.#db != undefined) {
            this.#db.close();
            console.log('Database closed!');
        }
    }
}

module.exports = db;