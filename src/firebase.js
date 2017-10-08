// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAZBUXOsr9HGVKXV_MGaFPDmYmvi0uwTO4',
  authDomain: 'homecake-b0aa9.firebaseapp.com',
  databaseURL: 'https://homecake-b0aa9.firebaseio.com',
  projectId: 'homecake-b0aa9',
  storageBucket: 'homecake-b0aa9.appspot.com',
  messagingSenderId: '352819721581'
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
