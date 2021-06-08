import React, {useEffect, useState} from 'react';

import style from './UserStatus.module.css';

const UserStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
            setStatus(e.target.value)
    }

    const handleFocus = (event) => event.target.select()

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] )

        return (
            <div className={style.userStatusWrapper}>
                {!editMode ?
                    <div>
                        <span className={props.isOwner ? style.statusText : style.otherStatusText}
                            onClick={props.isOwner ? activateEditMode : null}>
                            {!props.status && props.isOwner ? 'Write u\'r status' : props.status}
                        </span>
                    </div> :
                    <div>
                        <input
                            type="text"
                            defaultValue={status}
                            onChange={onStatusChange}
                            onBlur={deactivateEditMode}
                            onFocus={handleFocus}
                            autoFocus={true}
                        />
                    </div>
                }
            </div>
        )
    }


export default UserStatusHooks;
