import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore, doc } from 'firebase/firestore';


const config = {
  apiKey: "AIzaSyCPCDac7K9XtvGGFWkUDL7u2BRGiAxvMXk",
  authDomain: "data-got-quiz.firebaseapp.com",
  projectId: "data-got-quiz",
  storageBucket: "data-got-quiz.appspot.com",
  messagingSenderId: "835825498700",
  appId: "1:835825498700:web:3daa2825ece20cb37152e9"
};

const app = initializeApp(config)
export const auth = getAuth(app);

export const firestore = getFirestore();

export const user = uid => doc(firestore,`users/${uid}`);


export default app


