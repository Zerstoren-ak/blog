import React from 'react';
import './App.css';
import FormSignIn from "./components/FormSignIn/FormSignIn";
import FormRegistration from "./components/FormRegistration/FormRegistration";
import Blog from "./components/Blog/Blog";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyAQJjqtpORaJkyAM2EENr-rAok_vaePEBY",
        authDomain: "blog-react-dev.firebaseapp.com",
        databaseURL: "https://blog-react-dev.firebaseio.com",
        projectId: "blog-react-dev",
        storageBucket: "blog-react-dev.appspot.com",
        messagingSenderId: "599090741724",
        appId: "1:599090741724:web:3eab7d17a76764241dcf19"
    };
    firebase.initializeApp(firebaseConfig);

  return (
      <div className="App">
          <FormRegistration/>
          <FormSignIn/>
          <Blog/>
      </div>
  );
}

export default App;
