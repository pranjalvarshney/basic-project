import React, { useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link,useHistory  } from "react-router-dom"
import axios from 'axios'

const SignIn = () =>{

    const history = useHistory()
    const [values, setValues] = useState({email: "",password: ""})
    const [error , setError] = useState({status: false, msg: "", color: ""})

    const handleChange = (e) => {
        const {name, value} = e.target
        setError({
            status: false,
            msg: "",
            color: ""
        })
        setValues({
            ...values,
            [name]: value
        })
    }

    const formData = {
        email: values.email,
        password: values.password
    }
    const uri = "http://localhost:4000/signin"
    const PostSigninData = (e) => {
        e.preventDefault()
        if(values.email || values.password){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
                if(values.password > 5){
                    axios.post(uri,formData)
                    .then(response=> {
                        console.log(response)
                        setError({
                            status: false,
                            msg: response.data.message.msg,
                            color: "success"
                        })
                        history.push("/")
                    })
                    .catch(err=> {
                        // console.log(err.response)
                        setError({
                            status: true,
                            msg: err.response.data.message.msg,
                            color: "danger"
                        })
                    })
                }else{
                    setError({
                        status: true,
                        msg: "Password length should be greater than 5",
                        color: "danger"
                    })
                }
            }else{
                setError({
                    status: true,
                    msg: "Invalid e-mail",
                    color: "danger"
                })
            }
        }else{
            setError({
                status: true,
                msg: "One or more fields are empty",
                color: "danger"
            })
        }
    }

    return (
        <div className="Signin">
            <Card style={{width: "50%"}} className=" mx-auto my-5 py-5 px-3">
                <div className="container">
                    <h2 className="text-center">Signin</h2>
                    <Form onSubmit={e=>PostSigninData(e)}>     
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={values.email} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
                        </Form.Group>
                        <div className="submit-div">
                            <Button variant="primary" type="submit">Submit</Button>
                            <Link to="/signup">New? Create an account</Link>
                        </div>
                        <h6 className={`mt-3 text-center text-${error.color}`}>{error.status ? error.msg : null}</h6>                       
                    </Form>
                </div>
            </Card>
        </div>
    )
}

export default SignIn