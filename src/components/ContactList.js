import React from 'react';

const ContactList = ({persons, filterName}) => {
    return (
        <div>
            <h2>My Contacts</h2>
            {
                persons
                    .filter((person) => person.name.includes(filterName))
                    .map(person => <p key={person.name}><strong>Contact: </strong> {person.name} - {person.number}</p>)
            }
        </div>
    );
};

export default ContactList;