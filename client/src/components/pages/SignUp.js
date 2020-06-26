import React from 'react'
import { Form , Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignUp = () =>{
    return (
        <div className="Signup">
            <Card style={{width: "50%"}} className=" mx-auto my-5 py-5 px-3">
                <div class="container">
                    <h2 className="text-center">Signup</h2>
                    <Form>
                        
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Full name" />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="submit-div">
                            <Button variant="primary" type="submit">Submit</Button>
                            <Link to="/signin">Already an user? Signin </Link>
                        </div>  
                    </Form>
                </div>
            </Card>
        </div>
    )
}

export default SignUp