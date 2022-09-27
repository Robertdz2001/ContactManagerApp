import React from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import { EyeFill, PenFill, TrashFill } from 'react-bootstrap-icons';
import { Navigate } from "react-router-dom";
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    async delete(e) {
        const url = "https://localhost:7173/contacts/";
        const idParam = this.props.contact.id;
        const urlFetch = url + idParam;
        await fetch(urlFetch, { method: 'DELETE' });
        window.location.reload(false);

    }

    render() {
        return (
            <div className="contact">
                <div className="contactImg"><img src={`${this.props.contact.photoUrl}`} height="180px" width="180px" /></div>
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
                    <div className="Button"><button type="button" className="btn btn-warning btn-lg"><EyeFill /></button></div>
                    <div className="Button"><button type="button" className="btn btn-primary btn-lg"><PenFill /></button></div>
                    <div className="Button"><button type="button" className="btn btn-danger btn-lg" onClick={this.delete}><TrashFill /></button></div>
                </div>
            </div>
        );
    }

}

export default Contact;