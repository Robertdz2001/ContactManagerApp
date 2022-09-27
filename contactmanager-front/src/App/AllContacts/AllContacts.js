import React from "react";
import "./AllContacts.css";
import ContactList from "../ContactList/ContactList";
import 'bootstrap/dist/css/bootstrap.css';
import { PlusCircle } from 'react-bootstrap-icons';
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

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
            showedContacts: [{}],
            onPageStart: true
        }
        this.changeShowed = this.changeShowed.bind(this);
    }

    async getAll() {
        const all = await getAllContacts();
        this.setState({ allContacts: all, onPageStart: false, showedContacts: all });
        console.log(this.state.allContacts);
    }

    changeShowed(contacts) {

        this.setState({ showedContacts: contacts });

    }


    render() {
        { this.state.onPageStart && this.getAll() }
        return (
            <div>

                <div className="button">
                    <button type="button" className="btn btn-success btn-lg" onClick={() => this.props.navigate("/contacts/add")}>
                        <div className="plusCircle"><PlusCircle /></div>
                        <div className="newButton">New</div>
                    </button>
                </div>

                <div className="SearchBar">
                    <SearchBar changeShowed={this.changeShowed} allContacts={this.state.allContacts} />

                </div>
                <div className="contactList">
                    <ContactList contacts={this.state.showedContacts} />
                </div>
            </div>

        );
    }

}

export function AllContactsRouter(props) {
    const navigate = useNavigate();
    return <AllContacts navigate={navigate} />
}

export default AllContacts;