// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/grecipe'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
          directory: __dirname + '/migrations'
        },
        seeds: {
          directory: __dirname + '/seeds'
        }
    }
};
