import React, {useEffect, useContext, createContext, useReducer} from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Switch, Route, useHistory} from 'react-router-dom'
import Home from './components/pages/Home'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Profile from './components/pages/Profile'
import Createpost from './components/pages/CreatePost'
import {reducer , initialState} from './reducers/userReducers'

export const UserContext = createContext()

const Routing = ()=>{

    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        
        // console.log(user)
        if(user){
            dispatch({type: "USER", payload: user})
            history.push("/")
        }else{
            history.push("/signin")
        }
    },[])
    return(
        <Switch>
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
            <Route path="/create">
                <Createpost />
            </Route>
        </Switch>
    )

}

const App = () =>{

    const [ state, dispatch ] = useReducer( reducer , initialState)

    return(
        <div>
           <UserContext.Provider value={{state,dispatch}}>
                <Router>
                    <NavBar />
                    <Routing />
                </Router>
           </UserContext.Provider>
        </div>
    )
}

export default App