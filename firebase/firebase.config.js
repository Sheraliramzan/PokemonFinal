import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_NAME,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_APP_ID,
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);