import React,{useState, useContext, useEffect} from 'react'
import { UserContext } from '../../App'
import Axios from 'axios'

const Profile = () => {

    const [data, setdata] = useState([])
    const {state,dispatch} = useContext(UserContext)

    const uri = "http://localhost:4000/myposts"
    useEffect(()=>{
        Axios.get(uri,{
            headers:{
                "Authorization" : "Bearer " + localStorage.getItem('jwt')
            }
        })
        .then(res => {
            // console.log(res)
            setdata(res.data.message.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return(
        <div className="Profile">
            <div className="profile-wrapper">
                <div className="profile-img ">
                    <img src="https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80" alt="profile"/>
                </div>
                <div className="profile-content">
                    <h3>{state ? state.name : "Loading" }</h3>
                    <div className="profile-content-stats">
                        <h6>20 posts</h6>
                        <h6>30 followers</h6>
                        <h6>25 followings</h6>
                    </div>
                </div>
            </div>

            <div className="post-gallary">
                {
                    data.map((item)=>{
                        return(
                            <div key={item._id} >
                                <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ) 
}

export default Profile