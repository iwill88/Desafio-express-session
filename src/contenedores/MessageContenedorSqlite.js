const knex = require("knex");

const config = {
    client: 'sqlite3',
    connection: {
            filename:"./sqliteDB/ecommerce.sqlite",
            useNullAsDefault: true
    }
}


class MessageContenedorSqlite {
    constructor(table) {
        this.database = knex(config);
        this.table = table;
    }

    async save(message) {
        const id = await this.database(this.table).insert(message, ['id']);
        
        return id;
      }

    async getAll() {
        return await this.database.select().from(this.table);
    }
}



module.exports = MessageContenedorSqlite