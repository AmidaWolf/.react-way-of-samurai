import React from 'react';

import style from './UserContacts.module.css';


const UserContacts = (props) => {
    let contactsList=[];
    Object.keys(props.contacts).forEach(function(key) {
        if (this[key] !== null) {
            contactsList.push(<p>{key + ': '}<a href={this[key]}>{this[key]}</a></p>)
        }
    }, props.contacts);

    return (
        <div className={style.contacts}>
            <p>Contacts: </p>
            {contactsList}
        </div>
    )
}

export default UserContacts;
