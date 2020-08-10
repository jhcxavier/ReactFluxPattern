import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

import App from "./views/App";
import SignIn from "./views/signin"

const Layout = () => {
    const basename = "/" || "";

    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter basename={basename}>
                <Switch>
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default injectContext(Layout);