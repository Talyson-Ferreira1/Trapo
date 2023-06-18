// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDdQ1KkqAHj0_D6p295JMvU0zx3VRCBEQA',
  authDomain: 'loja-trapo.firebaseapp.com',
  databaseURL: 'https://loja-trapo-default-rtdb.firebaseio.com',
  projectId: 'loja-trapo',
  storageBucket: 'loja-trapo.appspot.com',
  messagingSenderId: '553196252603',
  appId: '1:553196252603:web:3999e6c623076700b5689e',
  measurementId: 'G-EL3NDXWS2C',
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
