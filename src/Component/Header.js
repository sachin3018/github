import { Button, Container } from 'reactstrap'
import React,{ useState} from 'react'
import { FaGithub } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase';
import { toast, ToastContainer } from 'react-toastify';
const Header = ({signedin,signout}) => {

    const [redirect, setredirect] = useState(false)
    const [page, setpage] = useState("")
    const signupPage = (e) => {
        e.preventDefault();
        console.log("pressed")
        setpage('signup')
        setredirect(!redirect)
    }

    const signinPage = (e) => {
        e.preventDefault();
        console.log("pressed")
        setpage('login')
        setredirect(!redirect)
    }

    const getRedirect = () => {
        if(redirect){
            const tempage = "/" + page;
            return(
                <Redirect to={tempage}/>
            )
        }
    }

    const gotoHome = (e) => {
        e.preventDefault();
        console.log("pressed")
        setpage('')
        setredirect(!redirect)
    }

    const signOut = (e) => {
        e.preventDefault();
        firebase.auth()
                .signOut()
                .then(() => {
                    toast("Logged out succesfully",{
                        type : "success"
                    })
                    localStorage.clear();
                    setpage('login')
                    setredirect(!redirect)
                })
                .catch((error) => {
                    toast(error.message,{
                        type : "error"
                    })
          });
        console.log("pressed")
        
    }

    return(
        <Container fluid>
            <ToastContainer/>
            <div className="row bg-dark pt-3 pb-3">
            {getRedirect()}
            <div className="col-4" style={{alignSelf : "center"}}>
                <FaGithub 
                  size={40}
                  color="#fff"
                  className="ml-4"
                  onClick={gotoHome}
                />
            </div>
            <div className="col-4 text-center">
                <h2 className="text-success">Github Application</h2>
            </div>
            <div className="col-4" style={{alignSelf : "center"}}>
                {
                    signedin &&
                    <Button className="float-right  bg-success ml-1"  onClick={signinPage}>Login</Button>
                }
                {
                    signedin &&
                    <Button className="float-right  bg-success mr-1" onClick={signupPage}>SignUp</Button>
                }
                {
                    signout &&
                    <> 
                        <Button className="float-right  bg-danger mr-1" onClick={signOut}>Signout</Button>
                        <h6 className="float-right  text-success mt-2 mr-2">
                            ( {
                                localStorage.getItem("userName")
                            } )
                            </h6>
                    </>
                }
            </div>
    
    </div>
        </Container>
    )
}

export default Header;