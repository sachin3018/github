import firebase from 'firebase';
import React,{ useState } from 'react'
import Header from './Header';
import LoginForm from './Login/LoginForm'
import background from './background.jpg'
import Footer from './Footer';



const Login = () => {

    return(
		<div style={{backgroundImage : `url(${background})`, width : "100%"}}>
          
			<Header signout={false} signedin={true}/>
			<LoginForm/>
			<Footer/>

    	</div>
    )
}

export default Login;