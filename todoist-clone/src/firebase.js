import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDLMd3wI4nmnE0iUgsDzPklMSWqk8aBwIQ',
  authDomain: 'todoist-amy.firebaseapp.com',
  databaseURL: 'https://todoist-amy-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'todoist-amy',
  storageBucket: 'todoist-amy.appspot.com',
  messagingSenderId: '896896796192',
  appId: '1:896896796192:web:39ca5e22135395fbefde45',
};

export const firebase = initializeApp(firebaseConfig);
