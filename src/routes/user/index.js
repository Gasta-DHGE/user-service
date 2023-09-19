import createUserDataBody from '../../schemas/createUserData/createUserDataBody.js';
import createUserDataHeader from '../../schemas/createUserData/createUserDataHeader.js';
import createUserDataResponse from '../../schemas/createUserData/createUserDataResponse.js';
import handleCreateUserData from '../../services/handleCreateUserData.js';
import validateApiAccess from '../../services/validateApiAccess.js';
import handleGetUserData from '../../services/handleGetUserData.js';

export default async function (fastify, opts) {
  fastify.post('/', {
    schema: {
      body: createUserDataBody,
      headers: createUserDataHeader,
      response: createUserDataResponse
    }
  }, async function (request, reply) {
    await validateApiAccess(request, reply);

    return handleCreateUserData(request, reply);
  });

  fastify.get('/', async function (request, reply) {
    await validateApiAccess(request, reply);

    return handleGetUserData(request, reply);
  });

  fastify.put('/', async function (request, reply) {
    await validateApiAccess(request, reply);

    return 'update user data';
  });
}
