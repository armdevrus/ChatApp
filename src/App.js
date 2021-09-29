import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import ChatList from "./pages/ChatList/ChatList";
import Chat from "./pages/Chat/Chat";
import ResurrectionPassword from "./pages/ResurectionPassword/ResurrectionPassword";
import Settings from "./pages/Settings/Settings";

function App() {
    return (
        <>
            <Link to="" style={{padding:'10px'}}>Authorization</Link>
            <Link to="/registration" style={{padding:'10px'}}>Registration</Link>
            <Link to="/chat_list" style={{padding:'10px'}}>Chat_List</Link>
            <Link to="/chat" style={{padding:'10px'}}>Chat</Link>
            <Link to="/resurrection" style={{padding:'10px'}}>Resurrection_Password</Link>
            <Link to="/settings" style={{padding:'10px'}}>Settings</Link>
            <Switch>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/chat_list">
                    <ChatList/>
                </Route>
                <Route path="/chat">
                   <Chat/>
                </Route><Route path="/resurrection">
                   <ResurrectionPassword/>
                </Route>
                <Route path="/settings">
                   <Settings/>
                </Route>
                <Route path="">
                    <Authorization/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
