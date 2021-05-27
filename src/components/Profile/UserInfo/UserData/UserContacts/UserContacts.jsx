import React from 'react';

import style from './UserContacts.module.css';


const UserContacts = ({contacts}) => {
    let contactsList=[];

    if (Object.values(contacts).every(o => o === null)) {
        contactsList.push(<li key={'base'}>User dont add any contacts</li>);
    }

    Object.keys(contacts).forEach(key => {
        if (contacts[key] !== null) {
            contactsList.push(
                <li key={contacts[key]}>
                    {key + ': '}
                    <a href={contacts[key]}>{contacts[key]}</a>
                </li>)
        }
    }, contacts);

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
