import React from "react";
import {Switch, Route} from "react-router-dom";
import Calculator from "./views/calculator/Placeholder";
import Journal from "./views/journal/Journal";
import Landing from "./views/Landing";
import Navbar from "./Navbar";
import ListLanding from "./views/shitlist/list/ListLanding";

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/calculator" component={Calculator}/>
                <Route path="/journal" component={Journal}/>
                <Route path="/shitlist" component={ListLanding}/>
            </Switch>
        </div>
    )
}
