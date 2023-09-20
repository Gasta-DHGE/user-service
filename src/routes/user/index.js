import createUserDataBody from '../../schemas/createUserData/createUserDataBody.js';
import createUserDataHeader from '../../schemas/createUserData/createUserDataHeader.js';
import createUserDataResponse from '../../schemas/createUserData/createUserDataResponse.js';
import handleCreateUserData from '../../services/handleCreateUserData.js';
import validateApiAccess from '../../services/validateApiAccess.js';
import handleGetUserData from '../../services/handleGetUserData.js';
import getUserDataHeader from '../../schemas/getUserData/getUserDataHeader.js';
import getUserDataBody from '../../schemas/getUserData/getUserDataBody.js';
import updateUserDataHeader from '../../schemas/updateUserData/updateUserDataHeader.js';
import updateUserDataBody from '../../schemas/updateUserData/updateUserDataBody.js';
import updateUserDataResponse from '../../schemas/updateUserData/updateUserDataResponse.js';
import getUserDataResponse from '../../schemas/getUserData/getUserDataResponse.js';
import handleUpdateUserData from '../../services/handleUpdateUserData.js';

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

  fastify.post('/data', {
    schema: {
      headers: getUserDataHeader,
      body: getUserDataBody,
      response: getUserDataResponse
    }
  }, async function (request, reply) {
    await validateApiAccess(request, reply);

    return handleGetUserData(request, reply);
  });

  fastify.put('/', {
    schema: {
      headers: updateUserDataHeader,
      body: updateUserDataBody,
      response: updateUserDataResponse
    }
  }, async function (request, reply) {
    await validateApiAccess(request, reply);

    return handleUpdateUserData(request, reply);
  });
}
