import React,{useEffect,useState} from 'react'
import { Card } from 'react-bootstrap'
import StarBorder from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios'

const Home = () =>{

    const [data,setData] = useState([])

    const uri = "http://localhost:4000/allposts"
    
    useEffect(()=>{
        axios.get(uri,{
            headers:{
                "Content-Type" : "application/json",
                "Authorization": 'Bearer ' +  localStorage.getItem('jwt')
            }
        })
        .then(response =>{
            console.log(response.data.message.data)
            setData(response.data.message.data)
            
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div className="Home">
            
            {
                data.map((item,index)=>{
                    return(
                        <Card className="post-card" key={index}>
                
                        <div className="post-img">
                            <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        </div>
                        <div className="post-content">
                            <div className="post-top-row">
                                <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                                <h5>{item.postedby.name}</h5>
                            </div>
                            <div className="post-actions">
                                <StarBorder className="post-star-icon"/>
                                <ChatBubbleOutlineIcon className="post-comment-icon"/>
                                <SendIcon className="post-send-icon"/>
                            </div>
                            <div className="post-body">
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                            </div>
                            <div className="post-comment">
                                <form>
                                    <input
                                        type="text"
                                        placeholder="add comment..."
                                    />
                                    <button type="submit"><SendIcon className="post-btn-icon" /></button>
                                </form>
                            </div>
                        </div>
                        
                    </Card>                        
                    )
                })
            }

           
        </div>
    )
}

export default Home