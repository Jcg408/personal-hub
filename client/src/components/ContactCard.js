import React from 'react';


 

const ContactCard =({contact}) => (
    <div key={contact.id} className="ContactCard">
        <h2>{contact.firstname} {contact.lastname}</h2>
       
    </div>
)




export default ContactCard;