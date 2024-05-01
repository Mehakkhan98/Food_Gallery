
import { getAuth } from '@react-native-firebase/auth';
import { initializeApp } from '@react-native-firebase/app';
import { getFirestore } from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-qquyKPt5AB4wRFFIpjC21s_vNuSTgF0",
    authDomain: "foodgallery-fbf97.firebaseapp.com",
    projectId: "foodgallery-fbf97",
    appId: "1:690735744651:android:9cdae817d22922e371b68e",
    storageBucket:"foodgallery-fbf97.appspot.com",
    messagingSenderId:"690735744651",
};
try{
    initializeApp(firebaseConfig);
}
catch(error){
    console.log("Error",error)
}
export const auth=getAuth();
export const database=getFirestore();
// console.log("api key:",API_KEY,"domain",AUTH_DOMAIN,"projectid",PROJECT_ID,"bucket",STORAGE_BUCKET,"senderid",MESSAGING_SENDER_ID);