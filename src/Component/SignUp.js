import React from 'react'
import SignUpForm from './SignUp/SignUpForm';
import background from './background.jpg'
import Header from './Header';
import Footer from './Footer';


const SignUp = () => {


	

    return(
    <div style={{backgroundImage : `url(${background})`, width : "100%"}}>
          
        <Header signedin={true} signout={false}/>
        <SignUpForm/>
        <Footer/>

    </div>
    )
}

export default SignUp;