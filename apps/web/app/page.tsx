import { Button, Header } from "ui";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOtbjY3An-HOrILVTx8whwlNc_fXVwB1U",
  authDomain: "monorepo-full-stack.firebaseapp.com",
  projectId: "monorepo-full-stack",
  storageBucket: "monorepo-full-stack.appspot.com",
  messagingSenderId: "180178861630",
  appId: "1:180178861630:web:67765b8e5b47d0e8f15b6f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default function Page(): JSX.Element {
  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}
