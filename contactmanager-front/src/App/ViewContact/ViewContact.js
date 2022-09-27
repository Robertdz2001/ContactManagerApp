import React from "react";
import "./ViewContact.css";
import { useNavigate, useParams } from "react-router-dom";
import { getContact } from "../UpdateContact/UpdateContact";
class ViewContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showedContact: {},
            onPageStart: true,
        }
    }
    async getOneContact() {
        const contact = await getContact(this.props.id);
        this.setState({ showedContact: contact, onPageStart: false });

    }

    render() {
        { this.state.onPageStart && this.getOneContact() }
        return (
            <div className="viewPage">
                <div className="viewContactImage"><img src={`${this.state.showedContact.photoUrl}`} height="350px" width="350px" /></div>
                <div className="viewContactInfo">
                    <table className="viewContactTable">
                        <tbody>
                            <tr><td>Name : {this.state.showedContact.name}</td></tr>
                            <tr><td>Mobile : {this.state.showedContact.mobile} </td></tr>
                            <tr><td>Email : {this.state.showedContact.email}</td></tr>
                            <tr><td>Company : {this.state.showedContact.company}</td></tr>
                            <tr><td>Title : {this.state.showedContact.title} </td></tr>
                            <tr><td>Group : {this.state.showedContact.group}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="backButton">
                    <button type="button" class="btn btn-warning btn-lg" onClick={() => { this.props.navigate('/') }}>Back</button>
                </div>
            </div>
        );
    }

}

export function ViewContactRouter() {
    let { id } = useParams();
    let navigate = useNavigate();
    return (
        <ViewContact navigate={navigate} id={id} />
    );
}

export default ViewContact;