import {connect} from "react-redux";

import OnlineFriends from "./OnlineFriends";

const mapStateToProps = (state) => {
    return {
        onlineFriends : state.navigationBlock.onlineFriends
    }
}

const OnlineFriendsContainer = connect(mapStateToProps) (OnlineFriends);

export default OnlineFriendsContainer;
