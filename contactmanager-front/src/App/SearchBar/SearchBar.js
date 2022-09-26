import React from "react";
import "./SearchBar.css";


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.searchByName = this.searchByName.bind(this);
    }

    searchByName(e) {
        const searchedContacts = this.props.allContacts.filter(c => c.name.includes(`${e.target.value}`));
        this.props.changeShowed(searchedContacts);
    }

    render() {
        return (
            <div className="searchInput"> <input type="text" placeholder="Search by Name" onChange={this.searchByName} /></div>
        );
    }


}
export default SearchBar;