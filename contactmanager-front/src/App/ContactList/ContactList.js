import React from "react";
import "./ContactList.css";
import Contact from "../Contact/Contact";

class ContactList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<div className="ContactList">
            {this.props.contacts.map(contact => {
                return <Contact contact={contact} />;
            })}
        </div>);
    }
}
export default ContactList;