import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateContact.css";

export const getContact = async (id) => {
    const urlFetch = `https://localhost:7173/contacts/${id}`;

    try {
        const response = await fetch(urlFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error("Request failed!");
    }
    catch (error) {
        console.log(error);
    }
}


class UpdateContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showedContact: {},
            onPageStart: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async getOneContact() {
        const contact = await getContact(this.props.id);
        this.setState({ showedContact: contact, onPageStart: false });

    }
    async handleSubmit(e) {
        this.props.navigate("/contacts");
        const updateContact = {
            name: e.target.name.value,
            photoUrl: e.target.photoUrl.value,
            mobile: e.target.mobile.value,
            email: e.target.email.value,
            company: e.target.company.value,
            title: e.target.title.value,
            group: e.target.group.value
        }
        console.log(updateContact);
        const url = "https://localhost:7173/contacts/";
        const id = this.props.id;
        const urlFetch = url + id;

        const response = await fetch(urlFetch,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateContact)
            })

    }


    render() {
        { this.state.onPageStart && this.getOneContact() }

        return (
            <div className="addPage">
                <div className="updateImage"><img src={"https://pic.onlinewebfonts.com/svg/img_328686.png"} height={"400px"} /></div>
                <div className="updateTitle"><h1>Update Contact</h1></div>
                <div className="addInputs">
                    <form onSubmit={this.handleSubmit}>
                        <input className="addInput" type="text" name="name" placeholder="Name" defaultValue={this.state.showedContact.name} required />
                        <input className="addInput" type="url" name="photoUrl" placeholder="Photo Url" defaultValue={this.state.showedContact.photoUrl} required />
                        <input className="addInput" type="tel" name="mobile" placeholder="Mobile" pattern="[0-9]{11}" defaultValue={this.state.showedContact.mobile} required />
                        <input className="addInput" type="email" name="email" placeholder="Email" defaultValue={this.state.showedContact.email} required />
                        <input className="addInput" type="text" name="company" placeholder="Company" defaultValue={this.state.showedContact.company} required />
                        <input className="addInput" type="text" name="title" placeholder="Title" defaultValue={this.state.showedContact.title} required />
                        <select className="addInput" name="group" id="group" placeholder={this.state.showedContact.group} required>
                            <option value="">Select Group..</option>
                            <option value="Colleague">Colleague</option>
                            <option value="Friend">Friend</option>
                            <option value="Family">Family</option>
                            <option value="Service">Service</option>
                            <option value="Community">Community</option>
                            <option value="Social">Social</option>
                        </select>

                        <input type="submit" className="btn btn-primary btn-lg addCreate addButtons" value="Update" />
                    </form>
                    <button className="btn btn-dark btn-lg addButtons" onClick={() => { this.props.navigate('/') }}>Cancel</button>

                </div>
            </div>
        );
    }

}

export function UpdateContactRouter() {
    let { id } = useParams();
    let navigate = useNavigate();
    return (
        <UpdateContact navigate={navigate} id={id} />
    );
}

export default UpdateContact;