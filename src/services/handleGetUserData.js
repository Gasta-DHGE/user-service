import { StatusCodes } from 'http-status-codes';
import { firestore } from '../firebase/firebase.js';

export default async function (request, reply) {
  const { uid } = request.body;

  try {
    const userSnapshot = await firestore
      .collection('users')
      .doc(uid)
      .get();

    if (userSnapshot.exists === false) {
      return reply
        .code(StatusCodes.BAD_REQUEST)
        .send({
          statusCode: StatusCodes.BAD_REQUEST,
          message: 'this user does not exist'
        });
    }

    return reply
      .code(StatusCodes.OK)
      .send(userSnapshot.data());
  } catch (error) {
    return reply
      .code(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error);
  }
}
