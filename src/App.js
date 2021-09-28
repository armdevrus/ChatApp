import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import ChatList from "./pages/ChatList/ChatList";
import Chat from "./pages/Chat/Chat";

function App() {
    return (
        <>
            <Link to="" style={{padding:'10px'}}>Authorization</Link>
            <Link to="/registration" style={{padding:'10px'}}>Registration</Link>
            <Link to="/chat_list" style={{padding:'10px'}}>Chat_List</Link>
            <Link to="/chat" style={{padding:'10px'}}>Chat</Link>
            <Switch>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/chat_list">
                    <ChatList/>
                </Route>
                <Route path="/chat">
                   <Chat/>
                </Route>
                <Route path="">
                    <Authorization/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
