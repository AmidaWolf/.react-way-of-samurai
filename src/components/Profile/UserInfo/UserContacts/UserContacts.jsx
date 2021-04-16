import React from 'react';

import style from './UserContacts.module.css';


const UserContacts = (props) => {
    let contactsList=[];

    if (Object.values(props.contacts).every(o => o === null)) {
        contactsList.push(<li key={'base'}>User dont add any contacts</li>);
    }

    Object.keys(props.contacts).forEach(function(key) {
        if (this[key] !== null) {
            contactsList.push(<li key={this[key]}>{key + ': '}<a href={this[key]}>{this[key]}</a></li>)
        }
    }, props.contacts);

    return (
        <>
            <p>Contacts:</p>
            <ul className={style.contacts}>
                {contactsList}
            </ul>
        </>
    )
}

export default UserContacts;
