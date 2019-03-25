import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class ShowCelebs extends Component {
  constructor() {
    super();
    this.state = {
      // contacts = first 5 contacts from contacts.json folder
      contacts: contacts.slice(0, 5),
      // set allContacts = .... all contacts
      allContacts: contacts
    };
  }

  // addCeleb function
  addCeleb() {
    //DO NOT MUTATE ORIGINAL STATE - CREATE A COPY
    // need a list of both allContacts and original contacts(first  5)
    const { allContacts, contacts } = this.state;
    const celebCopy = [...contacts];

    // Pick random celeb from contacts DB and assign to randomCeleb
    let randomCeleb =
      allContacts[Math.floor(Math.random() * allContacts.length)];

    // ** NEED TO ADD IF STATEMENT TO NOT ADD A CELEB THAT ALREADY EXISTS IN STATE

    // push randomCeleb into copied state
    celebCopy.push(randomCeleb);

    this.setState({
      // set original state to copied state
      contacts: celebCopy
    });
  }

  // sortName function
  sortName() {
    // DO NOT MUTUATE ORIGINAL STATE _ CREATE A COPY
    const { contacts } = this.state;
    const sortedCelebs = [...contacts];

    // sort celebs by name
    sortedCelebs.sort((a, b) => (a.name > b.name ? 1 : -1));

    this.setState({
      // set original state to copied state
      contacts: sortedCelebs
    });
  }

  // sortPopularity function ** same as above but sorted by .... popularity
  sortPopularity() {
    const { contacts } = this.state;
    const sortedPopularity = [...contacts];

    sortedPopularity.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));

    this.setState({
      contacts: sortedPopularity
    });
  }

  // deleteCeleb function
  deleteCeleb(index) {
    // DO NOT MUTATE ORIGINAL STATE _ CREATE A COPY
    const { contacts } = this.state;
    const contactsCopy = [...contacts];
    // splice selected index
    contactsCopy.splice(index, 1);

    this.setState({
      // set original state to copied state
      contacts: contactsCopy
    });
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {/* onClick action which points to above functions */}
        <button onClick={() => this.addCeleb()}>Add Random Celeb</button>
        <button onClick={() => this.sortName()}>Sort by Name</button>
        <button onClick={() => this.sortPopularity()}>
          Sort by Popularity
        </button>
        {/* map through contacts state and display each, assigning an index to each div */}
        {contacts.map((eachContact, index) => {
          return (
            <div key={index}>
              <img src={eachContact.pictureUrl} alt="" /> 
              {eachContact.name}
              {eachContact.popularity}
              <button onClick={() => this.deleteCeleb(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

// return this.state.contacts.map((eachContact, index)=>{

export default ShowCelebs;
