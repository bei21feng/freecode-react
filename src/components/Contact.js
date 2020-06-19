import React from 'react';

const Contact = (props) => {
  return (
    <div>
      <h3>{props.contact.name}</h3>
      <p>{props.contact.phone}</p>
    </div>
  );
};

export default Contact;
