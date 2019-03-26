import React, { Component, Fragment } from "react";
import contacts from "./contacts";
import ContactCard from "./ContactCard";

class CardContainer extends Component {

  state = { contacts: contacts.slice(0, 5), allContacts: contacts };

  addRandomContact = () => {
    //DO NOT MUTATE ORIGINAL STATE - CREATE A COPY ***** in order to rerender state ******
    // need a list of both allContacts and original contacts(first  5)
    const { allContacts, contacts } = this.state;
    const celebCopy = [...contacts];

    // Pick random celeb from contacts DB and assign to randomCeleb
    let randomCeleb =
      allContacts[Math.floor(Math.random() * allContacts.length)];

    // While loop to keep randomizing celeb if alreayd in array
    while (contacts.indexOf(randomCeleb) !== -1) {
      randomCeleb = allContacts[Math.floor(Math.random() * allContacts.length)];
    }

    celebCopy.push(randomCeleb);

    this.setState({
      // set original state to copied state
      contacts: celebCopy
    });
  };

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
      // React method for a container instead of <div> => <div> adds a margin | <Fragment> does not
      <Fragment>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortName()}>Sort by Name</button>
        <button onClick={() => this.sortPopularity()}>
          Sort by Popularity
        </button>

        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {contacts.map((eachContact, index) => {
              return (

                  <ContactCard key={index} index={index} contact={eachContact} celebDelete = { index  => this.deleteCeleb(index)} />



              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default CardContainer;
