import React, { useState} from 'react'
import { Form , Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const SignUp = () =>{
    
    const [values, setValues] = useState({pname:"", email: "", password:""})
    const [error, setError] = useState({status: false, msg: "",color: ""})

    const history = useHistory()
    const handleChange = e => {
        const {name, value} = e.target
        setError({status:false, msg:"",color:""})
        setValues({
            ...values,
            [name]: value
        })
        // console.log(name,value)
        
    }
    
    const formData = {
        name: values.pname,
        email: values.email,
        password: values.password
    }
    const uri="http://localhost:4000/signup"
    const PostSignupData = async (e) =>{
        e.preventDefault()
        if(values.name || values.email || values.password){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
                if(values.password.length > 5){
                    axios.post(uri,formData)
                    .then(response=> {
                        console.log(response)
                        setError({
                            status: false,
                            msg: response.data.message.msg,
                            color: "success"
                        })
                        history.push("/signin")
                    })
                    .catch(err =>{
                        console.log(err.response.data)
                        if(err.response.data.message.err){
                            setError({
                                status:true,
                                msg:err.response.data.message.msg,
                                color: "danger"
                            })
                        }
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
        <div className="Signup">
            <Card style={{width: "50%"}} className=" mx-auto my-5 py-5 px-3">
                <div className="container">
                    <h2 className="text-center">Signup</h2>
                    <Form onSubmit={(e)=>PostSignupData(e)} noValidate>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="pname" placeholder="Full name" value={values.pname} onChange={handleChange} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" value={values.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}/>
                        </Form.Group>
                        <h6 className={`text-center text-${error.color}`}>{error.status ? error.msg : error.msg}</h6>
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