import React from 'react'
import { Card } from 'react-bootstrap'

const Createpost = () =>{
    return (
        <div className="CreatePost">
            <Card className="create-post">
                <h3>Create Post</h3>
                <input className="title-input" placeholder="title"/>
                <input className="caption-input" placeholder="caption"/>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" />
                    <label class="custom-file-label" for="customFile">Select Image</label>
                </div>
            </Card>
        </div>
    )
}

export default Createpost