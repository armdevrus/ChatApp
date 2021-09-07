import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import Registration from "./pages/Registration/Registration";

function App() {
    return (
        <>
           <Link to="/registration">Registration</Link>
            <Switch>
                <Route path="/registration">
                    <Registration/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
