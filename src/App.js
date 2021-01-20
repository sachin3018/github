import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import background from './Component/background.jpg'

import firebase from 'firebase/app'
import firebaseconfig from './Config/firebaseconfig';
import Home from './Component/Home';

!firebase.apps.length ? firebase.initializeApp(firebaseconfig) : firebase.app();

function App() {

  return (
    <div style={{backgroundImage : `url(${background})`, width : "100%"}}>
          
        <Header signedin={true} signout={false}/>
        <Home/>
        <Footer/>

    </div>
  );
}



export default App;
