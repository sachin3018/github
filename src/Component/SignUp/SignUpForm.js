import firebase from 'firebase';
import React,{ useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import{
    Card,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    Button,
    CardBody
} from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from 'react-icons/fa'
import { Redirect } from 'react-router-dom';

const SignUpForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmpassword, setConfirmpassword] = useState("")
	const [redirect, setRedirect] = useState(false)
	
	const signup = (e) => {
		e.preventDefault();
		if(confirmpassword === password){
			firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(res => {
				setTimeout(() => {
					setRedirect(!redirect)
				}, 1000);
				toast("User Created Successfully",{
					type : "success"
				})
			})
			.catch(error => {
				console.log(error.message);
			});
		}
		else{
			toast("Password didn't matched",{
				type : "error"
			})
		}
	}

	const redirectPart = (e) => {
		if(redirect){
			return(
				<Redirect to="/login"/>
			)
		}
	}

    return(
        <div className="p-5">
			<ToastContainer/>
			{
				redirectPart()
			}
            <Container className='text-center p-5'>
			<Row>
			
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card className="bg-dark">
						<Form onSubmit={signup}>
							<CardHeader className='text-white'>
								<FaGithub
									size={25}
									color="white"
									className="mr-4"
								/>Sign Up
							</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
                                <FormGroup row>
									<Label for='password' sm={3}>
										Confirm Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='confirmpassword'
											id='confirmpassword'
											placeholder='your password here'
											value={confirmpassword}
											onChange={e => setConfirmpassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='success'>
									Sign Up
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
        </div>
    )
}

export default SignUpForm;