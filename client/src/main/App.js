import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { verify } from "./views/login/redux/login.js";
import { connect } from "react-redux";

import ProtectedRoute from "./ProtectedRoutes";
import Calculator from "./views/calculator/Calculator";
import Journal from "./views/journal/Journal";
import Landing from "./views/Landing";
import ListLanding from "./views/shitlist/list/ListLanding";
import Signin from "./views/login/signin/Container";
import Signup from "./views/login/signup/Container";

class App extends React.Component {
    componentDidMount() {
        this.props.verify(this.props.history, this.props.history.location.pathname);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                    <ProtectedRoute exact path="/" component={Landing}/>
                    <ProtectedRoute path="/calculator" component={Calculator}/>
                    <ProtectedRoute path="/journal" component={Journal}/>
                    <ProtectedRoute path="/shitlist" component={ListLanding}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, {verify})(App));
