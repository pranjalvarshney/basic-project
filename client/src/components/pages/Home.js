import React,{useEffect,useState,useContext} from 'react'
import { Card } from 'react-bootstrap'
import Star from '@material-ui/icons/Star';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios'
import {UserContext} from '../../App'

const Home = () =>{

    const [data,setData] = useState([])
    const [like,setLike] = useState(false)
    const [comment, setcomment] = useState("")
    const {state,dispatch} = useContext(UserContext)

    
    const uri = "http://localhost:4000/allposts"
    
    
    const handleCommentSubmit = (e,id) =>{
        e.preventDefault()
        makeComment(id)

    }
    const makeComment = (id) => {

        axios.put("http://localhost:4000/comment",{text: comment,postId: id},{
            headers:{
                "Authorization": 'Bearer ' +  localStorage.getItem('jwt')
            }

        })
        .then(response =>{
            console.log(response)
        })
        .catch(err => {
            console.log(err.response)
        })
    }


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

    },[like])
    
    const likePost = (id) =>{ 

        axios.put("http://localhost:4000/like",{postId:id},{
            headers:{
                "Authorization" : "Bearer " + localStorage.getItem('jwt')
            }
        })
        .then(response => {
            setLike({like:false})
        })
        .catch(err => console.log(err.response))
    }
    const unlikePost = (id) =>{ 
        axios.put("http://localhost:4000/unlike",{postId:id},{
            headers:{
                "Authorization" : "Bearer " + localStorage.getItem('jwt')
            }
        })
        .then(response => {
            setLike({like:false})
        })
        .catch(err => console.log(err.response))
    }

    
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
                            {
                                !item.likes.includes(state._id)
                                ?
                                <Star className="post-star-icon" style={{color: "lightgrey"}} onClick={()=>likePost(item._id)}/>
                                :
                                <Star className="post-star-icon" style={{color:"red"}} onClick={()=>unlikePost(item._id)}/>

                            }
                            </div>
                            <h6 className="ml-3">{item.likes.length} Stars</h6>
                            <div className="post-body">
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                            </div>
                            <div className="post-comment">
                                <form onSubmit={e=>handleCommentSubmit(e,item._id)}>
                                    <input
                                        value={comment}
                                        onChange={e=>setcomment(e.target.value)}
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