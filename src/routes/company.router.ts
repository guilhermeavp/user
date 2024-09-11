import { server as HapiServer } from '@hapi/hapi';
import { User } from '../models/user';
import { userCreate } from '../controller/user';
import { failAction } from '../util/actionHandler';

export const server = HapiServer();

const user = new User();

const userRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: (_, reply) => reply.response('').code(200)
  },
  {
    method: 'GET',
    path: '/api/',
    handler: () => user.getAll()
  },
  {
    method: 'POST',
    path: '/api/',
    options: {
      validate: {
          payload: userCreate,
          failAction: failAction
      }
    },
    handler: req => user.create(req.payload)
  },
  {
    method: 'POST',
    path: '/api/valid',
    options: {
      validate: {
          payload: userCreate,
          failAction: failAction
      }
    },
    handler: req => user.validUser(req.payload)
  },
  {
    method: 'PUT',
    path: '/api/{id}',
    handler: req => user.update(req.payload,req.params.id)
  },
  {
    method: 'DELETE',
    path: '/api/{id}',
    handler: req => user.delete(req.params.id)
  },
  {
    method: 'GET',
    path: '/api/{id}',
    handler: req => user.getID(req.params.id)
  }
];

export default userRoutes;
