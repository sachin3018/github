import firebase from 'firebase';
import React,{ useState } from 'react'
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
import { FaGithub } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setredirect] = useState(false)

	const signup = (e) => {
		e.preventDefault();
		console.log("entered")
		firebase
			.auth()
			.signInWithEmailAndPassword(email,password)
			.then(res => {
				toast("Logged In succesfully",{
					type : "success"
				})
				localStorage.setItem("user",true);
				localStorage.setItem("userName",email)
				console.log(res)
				setredirect(!redirect)
			})
			.catch(err => {
				toast(err.message,{
					type : "error"
				})
			})
	}

	const redirectPart = (e) => {
		if(redirect){
			return(
				<Redirect to="/search"/>
			)
		}
	}

    return(
        <div className="p-5">
			{redirectPart()}
            <Container className='text-center p-5'>
			<Row>
				<ToastContainer/>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card className="bg-dark">
						<Form onSubmit={signup}>
							<CardHeader className='text-white'>
								<FaGithub
										size={25}
										color="white"
										className="mr-4"
									/>Log In
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
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='success'>
									Sign In
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

export default LoginForm;