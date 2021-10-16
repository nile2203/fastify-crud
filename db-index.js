const fastifyPlugin = require('fastify-plugin');
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'hello-world',
    host: 'localhost',
    port: 5432,
    database: 'todo'
});

const dbConnector = async (fastify, options) => {
    try {
        await client.connect();
        console.log('Database connected successfully');
        fastify.decorate('db', {client});
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = fastifyPlugin(dbConnector);