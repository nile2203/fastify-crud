const fastify = require('fastify')({
    logger: true
});

const PORT = 8081;

fastify.register(require('./todo/routes'));

fastify.get('/', (request, response) => {
    response.send('Hello world');
});

const startServer = () => {
    fastify.listen(PORT).then(() => {
        console.log('Server started on port 8081');
    }).catch(error => {
        fastify.log.error(error.message);
        process.exit(1);
    })
}

startServer();