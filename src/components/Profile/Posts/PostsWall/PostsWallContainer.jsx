import {connect} from "react-redux";

import PostsWall from "./PostsWall";
import {deletePostActionCreator} from "../../../../Redux/profile-reducer";

const mapStateToProps = (props, ownProps) => {
    return {
        posts : props.profilePage.postData,
        isOwner : ownProps.isOwner
    }
}

const PostsWallContainer = connect(mapStateToProps, {deletePostActionCreator}) (PostsWall);

export default PostsWallContainer;
