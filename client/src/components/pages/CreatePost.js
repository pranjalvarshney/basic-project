import React from 'react'
import { Card } from 'react-bootstrap'

const Createpost = () =>{
    return (
        <div className="CreatePost">
            <Card className="create-post">
                <h3>Create Post</h3>
                <form>
                    <input className="title-input" placeholder="title"/>
                    <input className="caption-input" placeholder="caption"/>
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