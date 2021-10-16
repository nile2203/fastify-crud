const routes = async (fastify, options) => {
    const client = fastify.db.client;
    fastify.get('/', async (request, response) => {
        const { rows } = await client.query("select * from todos");
        response.send({ rows });
    });
}

module.exports = routes;