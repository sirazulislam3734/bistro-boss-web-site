// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCVpv-GZ7PiEGUVmqhHRQL_5BXDaeEAjXE',
  authDomain: 'bistro-boss-1e985.firebaseapp.com',
  projectId: 'bistro-boss-1e985',
  storageBucket: 'bistro-boss-1e985.firebasestorage.app',
  messagingSenderId: '766701466058',
  appId: 'cc2f27dc153138749c9f33'
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth}