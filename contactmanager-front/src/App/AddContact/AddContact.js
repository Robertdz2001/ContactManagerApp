import React from "react";
import "./AddContact.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import {
    Navigate,
} from "react-router-dom";


class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        this.props.navigate("/contacts");
        const newContact = {
            name: e.target.name.value,
            photoUrl: e.target.photoUrl.value,
            mobile: e.target.mobile.value,
            email: e.target.email.value,
            company: e.target.company.value,
            title: e.target.title.value,
            group: e.target.group.value
        }
        const urlFetch = "https://localhost:7173/contacts";

        const response = await fetch(urlFetch,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newContact)
            }
        );


    }


    render() {

        return (
            <div className="addPage">
                <div className="addImage"><img src={'https://www.seekpng.com/png/detail/202-2026059_add-contact-icon-new-contact-icon.png'} /></div>
                <div className="addTitle"><h1>Create Contact</h1></div>
                <div className="addInputs">
                    <form onSubmit={this.handleSubmit}>
                        <input className="addInput" type="text" name="name" placeholder="Name" required />
                        <input className="addInput" type="url" name="photoUrl" placeholder="Photo Url" required />
                        <input className="addInput" type="tel" name="mobile" placeholder="Mobile" pattern="[0-9]{11}" required />
                        <input className="addInput" type="email" name="email" placeholder="Email" required />
                        <input className="addInput" type="text" name="company" placeholder="Company" required />
                        <input className="addInput" type="text" name="title" placeholder="Title" required />
                        <select className="addInput" name="group" id="group" required>
                            <option value="">Select Group..</option>
                            <option value="Colleague">Colleague</option>
                            <option value="Friend">Friend</option>
                            <option value="Family">Family</option>
                            <option value="Service">Service</option>
                            <option value="Community">Community</option>
                            <option value="Social">Social</option>
                        </select>
                        <input type="submit" className="btn btn-success btn-lg addCreate addButtons" value="Create" />
                    </form>
                    <button className="btn btn-dark btn-lg addButtons" onClick={() => { this.props.navigate('/contacts') }}>Cancel</button>

                </div>
            </div>
        );
    }
}

export function AddContactRouter(props) {
    const navigate = useNavigate();
    return <AddContact navigate={navigate} />
}

export default AddContact;