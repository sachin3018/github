import { Button } from 'reactstrap'
import React from 'react'
import { FaFacebook,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return(
        <div>
            <div style={phantom} />
            <div className="bg-dark p-5" style={style}>
               <div className="row mb-5" style={{justifyContent : "center"}}>
                    <div className="col-3">
                           <Button className="bg-dark">
                                    <a
                                     href="https://www.facebook.com/profile.php?id=100007516152193">
                                        <FaFacebook size={30} color="white"/>
                                     </a>
                           </Button>
                    </div>
                    <div className="col-3">
                            <Button className="bg-dark">
                                <a
                                     href="https://www.linkedin.com/in/sachin-singh-66642b106/">
                                        <FaLinkedin size={30} color="white"/>
                                     </a>
                            </Button>
                    </div>
               </div>
            </div>
        </div>
    )
}

var style = {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "140px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  
}

export default Footer;
