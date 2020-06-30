import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

const Createpost = () =>{

    const [values,setValues] = useState({title:"", caption: ""})

    const handleChange = (e) =>{
        const { name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }   
    const formData = {
        title: values.title,
        body: values.caption
    }
    const uri = "http://localhost:4000/createpost"
    const handleCreatePost = (e) => { 
        e.preventDefault()
        axios.post(uri,formData,{
            headers:{
                "Content-Type" : "application/json",
                "Authorization": 'Bearer ' +  localStorage.getItem('jwt')
            }
        })
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err.response)
        }) 
    }

    return (
        <div className="CreatePost">
            <Card className="create-post">
                <h3>Create Post</h3>
                <form onSubmit={e=>handleCreatePost(e)}>
                    <input className="title-input" name="title" value={values.title} onChange={handleChange} placeholder="title"/>
                    <input className="caption-input" name="caption" value={values.caption} onChange={handleChange} placeholder="caption"/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" />
                        <label className="custom-file-label" >Select Image</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit post</button>
                </form>
            </Card>
        </div>
    )
}

export default Createpost