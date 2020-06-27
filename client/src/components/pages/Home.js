import React from 'react'
import { Card } from 'react-bootstrap'
import StarBorder from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';

const Home = () =>{
    return (
        <div className="Home">
            <Card className="post-card">
                
                <div className="post-img">
                    <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                </div>
                <div className="post-content">
                    <div className="post-top-row">
                        <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        <h5>Cat Parry</h5>
                    </div>
                    <div className="post-actions">
                        <StarBorder className="post-star-icon"/>
                        <ChatBubbleOutlineIcon className="post-comment-icon"/>
                        <SendIcon className="post-send-icon"/>
                    </div>
                    <div className="post-body">
                        <h6>Title</h6>
                        <p>Body</p>
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
            <Card className="post-card">
                
                <div className="post-img">
                    <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                </div>
                <div className="post-content">
                    <div className="post-top-row">
                        <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        <h5>Cat Parry</h5>
                    </div>
                    <div className="post-actions">
                        <StarBorder className="post-star-icon"/>
                        <ChatBubbleOutlineIcon className="post-comment-icon"/>
                        <SendIcon className="post-send-icon"/>
                    </div>
                    <div className="post-body">
                        <h6>Title</h6>
                        <p>Body</p>
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
            <Card className="post-card">
                
                <div className="post-img">
                    <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                </div>
                <div className="post-content">
                    <div className="post-top-row">
                        <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        <h5>Cat Parry</h5>
                    </div>
                    <div className="post-actions">
                        <StarBorder className="post-star-icon"/>
                        <ChatBubbleOutlineIcon className="post-comment-icon"/>
                        <SendIcon className="post-send-icon"/>
                    </div>
                    <div className="post-body">
                        <h6>Title</h6>
                        <p>Body</p>
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
        </div>
    )
}

export default Home