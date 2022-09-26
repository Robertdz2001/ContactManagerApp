import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <div className="contactImg"><img src={`${this.props.contact.photoUrl}`} height="180px" width="250px" /></div>
                <div className="contactInfo">
                    <table>
                        <tbody>
                            <tr><td>Name : {this.props.contact.name}</td></tr>
                            <tr><td>Mobile : {this.props.contact.mobile} </td></tr>
                            <tr><td>Email : {this.props.contact.email}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default Contact;