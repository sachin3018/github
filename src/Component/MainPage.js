import React from 'react'
import background from './background.jpg'
import Header from './Header';
import Footer from './Footer';
import Display from './Main/Display';


const MainPage = () => {
    return(
        <div style={{backgroundImage : `url(${background})`, width : "100%",height : "100%"}}>
            
            <Header signedin={false} signout={true}/>
            <Display/>
            <Footer/>

        </div>
    )
}

export default MainPage;
