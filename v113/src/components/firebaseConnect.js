// Initialize Firebase
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCN_8HXinCJzoBgNpAR7rb_XRt20-yFunI",
    authDomain: "thuynoteapp.firebaseapp.com",
    databaseURL: "https://thuynoteapp.firebaseio.com",
    projectId: "thuynoteapp",
    storageBucket: "thuynoteapp.appspot.com",
    messagingSenderId: "66969164974"
  };
firebase.initializeApp(config);
export const noteData = firebase.database().ref('dataforNote');
