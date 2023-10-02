import { StatusCodes } from 'http-status-codes';
import { firestore } from '../firebase/firebase.js';
import checkUserExists from './checkUserExists.js';

export default async function (request, reply) {
  const { uid } = request.headers;

  const userRef = firestore
    .collection('users')
    .doc(uid);

  try {
    const userExists = await checkUserExists(request, reply);

    if (userExists === false) {
      return reply
        .code(StatusCodes.BAD_REQUEST)
        .send({
          statusCode: StatusCodes.BAD_REQUEST,
          message: 'this user does not exist'
        });
    }

    const updateUser = buildUserUpdate(request.body);

    await userRef
      .set(updateUser, { merge: true });

    const userSnapshot = await userRef
      .get();

    return reply
      .code(StatusCodes.ACCEPTED)
      .send(userSnapshot.data());
  } catch (error) {
    return reply
      .code(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error);
  }
}

function buildUserUpdate ({ firstName, lastName, birthDate, gender, diet, address }) {
  const updateBody = {};

  if (firstName !== undefined) {
    updateBody.firstName = firstName;
  }
  if (lastName !== undefined) {
    updateBody.lastName = lastName;
  }
  if (birthDate !== undefined) {
    updateBody.birthDate = birthDate;
  }
  if (gender !== undefined) {
    updateBody.gender = gender;
  }
  if (diet !== undefined) {
    updateBody.diet = diet;
  }
  if (address !== undefined) {
    updateBody.address = address;
  }

  return updateBody;
}
