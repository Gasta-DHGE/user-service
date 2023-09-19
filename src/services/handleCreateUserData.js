import { StatusCodes } from 'http-status-codes';
import { firestore } from '../firebase/firebase.js';

export default async function (request, reply) {
  const { firstName, lastName, birthDate, gender, diet, address } = request.body;
  const { uid } = request.headers;

  try {
    const newUser = {
      firstName,
      lastName,
      birthDate,
      gender,
      diet,
      address
    };

    await firestore
      .collection('users')
      .doc(uid)
      .set(newUser);

    const userSnapshot = firestore
      .collection('users')
      .doc(uid)
      .set(newUser);

    reply
      .code(200)
      .send(userSnapshot.data());
  } catch (error) {
    reply
      .code(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error);
  }
}
