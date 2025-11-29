// Firebase configuration placeholder
// Replace the values below with your project's Firebase configuration.
// Keep this file out of version control or replace values from env vars in production.
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

let firebaseApp: FirebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  // if already initialized, reuse the first app
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  firebaseApp = getApps()[0]!;
}

export const auth = getAuth(firebaseApp);
export default firebaseApp;
