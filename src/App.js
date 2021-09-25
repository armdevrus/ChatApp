import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";

function App() {
    return (
        <>
           <Link to="/registration">Registration</Link>
            <br/>
           <Link to="/authorization">Authorization</Link>
            <Switch>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/authorization">
                    <Authorization/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
