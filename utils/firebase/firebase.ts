import { firebaseConfig } from "./firebase.config";
import firebase from "firebase/compat/app";
import 'firebase/compat/analytics'

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const analytics = firebase.analytics;
  
  export { firebase, analytics };