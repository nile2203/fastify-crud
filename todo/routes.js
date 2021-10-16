const routes = async (fastify, options) => {
    fastify.get('/', async (request, response) => {
        response.send('Hello world');
    });
}

module.exports = routes;