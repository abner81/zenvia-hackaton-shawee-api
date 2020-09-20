// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/infra/db/knex/database.sqlite'
        }
    },
    migrations: {
        directory: './src/infra/db/knex/migrations/'
    },
    useNullAsDefault: true
}