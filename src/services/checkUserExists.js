import { firestore } from '../firebase/firebase.js';

export default async function (request, reply) {
  const { uid } = request.headers;

  try {
    const userSnapshot = await firestore
      .collection('users')
      .doc(uid)
      .get();

    return userSnapshot.exists;
  } catch (error) {
    return false;
  }
}
