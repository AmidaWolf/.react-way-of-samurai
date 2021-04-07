import {connect} from "react-redux";

import WritePost from "./WritePost";
import {addPostActionCreator, updNewPostTextActionCreator} from "../../../../Redux/profile-reducer";


const mapStateToProps = (state) => {
    return {
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postChange: (text) => {
            dispatch(updNewPostTextActionCreator(text));
        }
    }
}

const WritePostContainer = connect(mapStateToProps, mapDispatchToProps) (WritePost)

export default WritePostContainer;
