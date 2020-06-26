import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Profile from './components/pages/Profile'

const App = () =>{
    return(
        <div>
            <Router>
                <NavBar />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                
            </Router>
        </div>
    )
}

export default App