import React from "react";
import Entry from "./Entry";

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class EntriesContainer extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.getEntries(nextProps.location.pathname);
        }
    }

    componentWillMount() {
        this.props.getEntries(this.props.location.pathname);
    }

    genEntries() {
        return this.props.entries.map((entry, i) => {
            return (
                <Entry
                        key={entry._id}
                        entry={entry}
                        count={i + 1}
                        getEntries={this.props.getEntries}
                        pathname={this.props.location.pathname}/>
            )
        });
    }

    render() {

        const containerStyles = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "65%",
            padding: "25px",
            marginTop: "50px"
        }
        const entries = this.genEntries();
        return (
            entries.length >= 0 ?
                <div style={containerStyles}>{entries}</div> :
                <Redirect to="/journal"/>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(EntriesContainer);