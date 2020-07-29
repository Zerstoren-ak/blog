import React from 'react';
import './App.css';
import FormSignIn from "./components/FormSignIn/FormSignIn";
import FormRegistration from "./components/FormRegistration/FormRegistration";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <FormSignIn/>
      <FormRegistration/>
    </div>
  );
}

export default App;
