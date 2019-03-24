import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class ShowContacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <div>
        {contacts.map((eachContact, index) => {
          return (
            <div key={index}>
            <table className="tableStyle"> 
                  <tr>
                    <td>
                      <img src={ eachContact.pictureUrl } alt=""/>
                    </td>
                    <td>{ eachContact.name }</td>
                    <td>{ eachContact.popularity }</td>
                  </tr>
                  </table>
            </div>
          );
        })}
      </div>
    );
  }
}

// return this.state.contacts.map((eachContact, index)=>{

export default ShowContacts;
