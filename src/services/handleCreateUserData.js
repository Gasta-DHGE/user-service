import { StatusCodes } from 'http-status-codes';
import { firestore } from '../firebase/firebase.js';

export default async function (request, reply) {
  const { firstName, lastName, birthDate, gender, diet, address } = request.body;
  const { uid } = request.headers;

  const userExists = await checkUserExists(request, reply);

  const userRef = await firestore
    .collection('users')
    .doc(uid);

  if (userExists) {
    return reply
      .code(StatusCodes.BAD_REQUEST)
      .send({
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'a user with this uid does already exist'
      });
  }

  try {
    const newUser = {
      firstName,
      lastName,
      birthDate,
      gender,
      diet,
      address
    };

    await userRef
      .set(newUser);

    const userSnapshot = await userRef
      .get();

    return reply
      .code(StatusCodes.CREATED)
      .send(userSnapshot.data());
  } catch (error) {
    return reply
      .code(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error);
  }
}

async function checkUserExists (request, reply) {
  const { uid } = request.headers;

  try {
    const userSnapshot = await firestore
      .collection('users')
      .doc(uid)
      .get();

    return userSnapshot.exists;
  } catch (error) {
    return reply
      .code(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error);
  }
}
