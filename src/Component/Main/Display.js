import React,{ useEffect, useState } from 'react'
import {
 CardBody,
 Card,
 CardTitle,
 CardText,
 Button,
 Input,
 Form,
 FormGroup,
 InputGroup,
 InputGroupAddon
} from 'reactstrap'
import Axios from 'axios'
import { FaMapMarked, } from 'react-icons/fa'
import { IoIosContact,IoIosContacts,IoMdDocument } from 'react-icons/io'
import CardRepo from './CardRepo'
import { toast, ToastContainer } from 'react-toastify'
const Display = () => {

    const [list, setList] = useState([])
    const [repso, setRepso] = useState([])
    const [userName, setUserName] = useState("")

    useEffect(() => {
       
    }, [])

    const getData = async(e) => {
        e.preventDefault()
        getRepso()
             await Axios.get(`https://api.github.com/users/${userName}`)
                        .then(data => {
                            setList(data.data)
                        })
                        .catch(err => {
                            setList([])
                            setRepso([])
                            setUserName("")
                            toast("No result found try another username",{
                                type : "error"
                            })
                        })
    }

    const getRepso = async () => {
        try{
            const { data } = await Axios.get(`https://api.github.com/users/${userName}/repos`)
            setRepso(data)
            console.log(data)
            setUserName("")
        }catch(error){

        }
    }


    return(
      
        <div className="row" style={{width : "100%"}}>
            <ToastContainer/>
            <div className="col-12 mt-3 ml-2">
                <Form onSubmit={getData}>
                    <FormGroup>
                        <InputGroup>
                            <Input
                                placeholder="Enter the User-Name"
                                className="text-white"
                                style={{backgroundColor : "#1B98F5"}}
                                type="text"
                                id="username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <InputGroupAddon>
                                <Button
                                    onClick={getData} 
                                    className="bg-info ml-1">
                                        Search
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
            <div 
                className="text-center col-4 mb-3 mr-3 ml-3 mt-1"
                style={{paddingTop : 400}}>
                {
                    list.length !== 0 &&
                    <Card className="bg-dark border-danger">
                        <CardBody className="text-center">
                            <img 
                                height="150"
                                width ="150"
                                className="rounded-circle image-thumbnail border-error"
                                src={list.avatar_url}
                            />
                        </CardBody>
                        <CardTitle className="text-warning">
                            <h2>{list.name}</h2>
                        </CardTitle>
                        <CardText>
                            <div className="row ml-4 mr-4">
                                <div className="col-6">
                                    <IoMdDocument 
                                      color="green"
                                      size={25}
                                    />
                                    <p className="text-white mt-1">{repso.length}</p>
                                </div>
                                <div className="col-6">
                                    <FaMapMarked
                                      color="green"
                                      size={25}
                                    />
                                    <p className="text-white mt-1">{list.location}</p>
                                </div>
                                <div className="col-6">
                                    <IoIosContact
                                      color="green"
                                      size={25}
                                    />
                                    <p className="text-white mt-1">{list.following}</p>
                                </div>
                                <div className="col-6">
                                    <IoIosContacts
                                      color="green"
                                      size={25}
                                    />
                                    <h5 className="text-white mt-1">{list.followers}</h5>
                                </div>
                            </div>
                                    
                        </CardText>
                    </Card>
                
                }
            </div>
            <div className="row col-6 text-center mb-5">
              
               {
                   repso.map((project,index) => (
                       <div className="col-12 mr-5 ml-5" key={index}>
                         <CardRepo data={project}/>
                       </div>
                   ))
               }
            </div>
        
        </div>
    )
}

export default Display;