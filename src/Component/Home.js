import React,{ useState } from 'react'
import{
    Button,
    Container,
} from 'reactstrap'

import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'

const Home = () => {
    const [redirect, setredirect] = useState(false)

    const getStarted = (e) => {
        e.preventDefault();
        setredirect(!redirect)
    }

    const redirectToLogin = () => {
        if(redirect){
            return(
                <Redirect to="/login"/>
            )
        }
    }

    return(
        <div className="p-5">
            {redirectToLogin()}
            <Container className='text-center p-5'>
                <div className="row">
                        <div className="col-4">
                            <FaGithub 
                                size={350}
                                color="black"
                            />
                        </div>
                        <div className="col-8" style={{alignSelf : "center"}}>
                            <h1>Welcome to Github Application</h1>
                            <Button  className="ml-5 mr-5" color="success"  onClick={getStarted}>
                                Get Started
                                <FaArrowRight 
                                    size={15}
                                    color="success"
                                    className="ml-2"
                                />
                            </Button>
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default Home;