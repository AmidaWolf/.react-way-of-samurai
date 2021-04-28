import React from 'react';

import style from './UserStatus.module.css';

class UserStatus extends React.Component {
    state = {
        editMode : false
    };

    toggleEditMode = (status) => {
        this.setState( {
                editMode: status
            }
        )
    }

    handleFocus = (event) => event.target.select()

    render() {
        return (
            <div className={style.userStatusWrapper}>
                {!this.state.editMode ?
                    <div>
                        <span className={style.statusText}
                            onClick={()=>{this.toggleEditMode(true)}}>
                            {this.props.status}
                        </span>
                    </div> :
                    <div>
                        <input
                            type="text"
                            value={this.props.status}
                            onBlur={()=>{this.toggleEditMode(false)}}
                            onFocus={this.handleFocus}
                            autoFocus={true}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default UserStatus;
