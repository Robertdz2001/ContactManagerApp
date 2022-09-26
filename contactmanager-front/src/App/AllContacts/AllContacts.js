import React from "react";
import "./AllContacts.css";
import ContactList from "../ContactList/ContactList";

const getAllContacts = async () => {
    const urlFetch = "https://localhost:7173/contacts";
    try {
        const response = await fetch(urlFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error("Request failed!");
    } catch (error) {
        console.log(error);
    }
}


class AllContacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allContacts: [{}],
            onPageStart: true
        }
    }

    async getAll() {
        const all = await getAllContacts();
        this.setState({ allContacts: all, onPageStart: false });
        console.log(this.state.allContacts);
    }


    render() {
        { this.state.onPageStart && this.getAll() }

        return (
            <div>
                <div>
                    <button>New</button>
                </div>

                <div className="contactList">
                    <ContactList contacts={this.state.allContacts} />
                </div>
            </div>

        );
    }

}
export default AllContacts;