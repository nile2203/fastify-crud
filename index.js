const fastify = require('fastify')({
    logger: true
});
const db = require('./db-index');
const PORT = 8081;

fastify.register(db);
fastify.register(require('./todo/routes'));

const startServer = () => {
    fastify.listen(PORT).then(() => {
        console.log('Server started on port 8081');
    }).catch(error => {
        fastify.log.error(error.message);
        process.exit(1);
    })
}

startServer();