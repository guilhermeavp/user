
import { initRoutes, server } from './routes';
import { connectToDatabase } from './services/database.service';
import { initConsul } from './util/consul';

const init = async () => {
    await server.start();
    initRoutes();

    connectToDatabase()
    .then(async () => {
        try {
            console.log(`Server started at http://${server.info.host}:${server.info.port}`);
        } catch (error) {
            console.log('Server not started,', error);
        }
    })
    .catch((error: Error) => {
        console.error('Database connection failed', error);
        process.exit();
    });
    //TODO
    initConsul();
};

init();