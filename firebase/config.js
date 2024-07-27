import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACHSi1w4VVq0jKZKHcb2F1xziw60E9iqg",
    authDomain: "testing-db-53942.firebaseapp.com",
    projectId: "testing-db-53942",
    storageBucket: "testing-db-53942.appspot.com",
    messagingSenderId: "958628210492",
    appId: "1:958628210492:web:58c08f16c0b287cc882039"
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);

export { projectFirestore };