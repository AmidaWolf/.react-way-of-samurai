import React from 'react';

import style from './UserStatus.module.css';

class UserStatus extends React.Component {
    state = {
        editMode : false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState( {
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    handleFocus = (event) => event.target.select()

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status : this.props.status
            })
        }
    }

    render() {
        return (
            <div className={style.userStatusWrapper}>
                {!this.state.editMode ?
                    <div>
                        <span className={style.statusText}
                            onClick={()=>{this.activateEditMode()}}>
                            {!this.props.status ? 'Write u\'r status' : this.props.status}
                        </span>
                    </div> :
                    <div>
                        <input
                            type="text"
                            defaultValue={this.state.status}
                            onChange={this.onStatusChange}
                            onBlur={()=>{this.deactivateEditMode()}}
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
