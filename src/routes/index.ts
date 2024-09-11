import { server as HapiServer } from '@hapi/hapi';
import userRoutes from './user.router';

export const server = HapiServer(
    {       
    routes: {
        cors: {
            origin: ['http://192.168.1.13:4200'],
            headers: ['Accept', 'Content-Type'],
            additionalHeaders: ['X-Requested-With']
        }
    }
}
);

export const initRoutes = async () => {
    const routesMicroService = [...userRoutes];
     server.route(routesMicroService);
  };
