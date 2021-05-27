import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    isLoaded: state.profilePage.isLoaded
})

export const withProfileRedirect = (Component) => {
    class RedirectedComponent extends React.Component {
        render() {
            debugger
            if(!this.props.isLoaded) {
                return <Redirect to={'/profile'}/>
            }

            return <Component {...this.props} />
        }
    }
    return connect(mapStateToProps)(RedirectedComponent);
}
