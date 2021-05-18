import {connect} from "react-redux";

import PostsWall from "./PostsWall";
import {deletePostActionCreator} from "../../../../Redux/profile-reducer";

const mapStateToProps = (props) => {
    return {
        posts : props.profilePage.postData
    }
}

const PostsWallContainer = connect(mapStateToProps, {deletePostActionCreator}) (PostsWall);

export default PostsWallContainer;
