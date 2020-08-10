import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./views/App";

const Layout = () => {
    const basename = "/" || "";

    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter basename={basename}>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}