import React from 'react'

const Profile = () => {
    return(
        <div className="Profile">
            <div className="profile-wrapper">
                <div className="profile-img ">
                    <img src="https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80" alt="profile"/>
                </div>
                <div className="profile-content">
                    <h3>Cat Mary</h3>
                    <div className="profile-content-stats">
                        <h6>20 posts</h6>
                        <h6>30 followers</h6>
                        <h6>25 followings</h6>
                    </div>
                </div>
            </div>
            <div className="post-gallary">

            </div>
        </div>
    ) 
}

export default Profile