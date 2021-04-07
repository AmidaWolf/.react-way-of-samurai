import {connect} from "react-redux";

import PostsWall from "./PostsWall";

const mapStateToProps = (props) => {
    return {
        posts : props.profilePage.postData
    }
}

const PostsWallContainer = connect(mapStateToProps) (PostsWall);

export default PostsWallContainer;
