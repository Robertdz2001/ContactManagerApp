import React from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import { EyeFill, PenFill, TrashFill } from 'react-bootstrap-icons';
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
                <div className="contactButtons">
                    <div className="Button"><button type="button" class="btn btn-warning btn-lg"><EyeFill /></button></div>
                    <div className="Button"><button type="button" class="btn btn-primary btn-lg"><PenFill /></button></div>
                    <div className="Button"><button type="button" class="btn btn-danger btn-lg"><TrashFill /></button></div>
                </div>
            </div>
        );
    }

}

export default Contact;