import React from "react";
import "./ContactList.css";
import Contact, { ContactRouter } from "../Contact/Contact";

class ContactList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<div className="ContactList">
            {this.props.contacts.map(contact => {
                return <ContactRouter contact={contact} />;
            })}
        </div>);
    }
}
export default ContactList;