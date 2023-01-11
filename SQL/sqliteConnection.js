const sqliteConnection = {
    client: 'sqlite3',
    connection: {
            filename:"./sqliteDB/ecommerce.sqlite",
            useNullAsDefault: true
    }
}

module.exports = sqliteConnection