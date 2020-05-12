import React from 'react';
import { format } from 'date-fns';
class Contact extends React.Component {
  render() {
    const contact = this.props.data;

    const admissionDate = new Date(contact.admissionDate);
    return (
      <article data-testid="contact" className="contact">
        <img className="contact__avatar" data-testid="contact-avatar" src={contact.avatar} alt={contact.name} />
        <span className="contact__data" data-testid="contact-name"> {contact.name} </span>
        <span className="contact__data" data-testid="contact-phone"> {contact.phone} </span>
        <span className="contact__data" data-testid="contact-country"> {contact.country} </span>
        <span className="contact__data" data-testid="contact-date"> {format(admissionDate, "dd/MM/yyyy")} </span>
        <span className="contact__data" data-testid="contact-company"> {contact.company} </span>
        <span className="contact__data" data-testid="contact-department"> {contact.department} </span>
      </article>
    );
  }
}

export default Contact;
