import React, { Component } from 'react';
import faker from 'faker/index';

import './App.scss';

class App extends Component {
  mockpersons = Array(20).join(0).split(0).map((v, i) => i + 1).map((item) => {
    return {
      id: item,
      image: faker.image.avatar(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    }
  });

  state = {
    searchkey: '',
    persons: [].concat(this.mockpersons)
  }


  // constructor(props) {
  //   super(props);
  // }
 
  onChange = (e) =>  {
   const searchkey = e.target.value;
   this.setState({searchkey: e.target.value});
  //  console.log(searchkey, this.state.searchkey);

  //  this.setState((prev, props) => {
  //    console.log(prev, props);
  //  })

  let persons = this.filter(searchkey);
  this.setState({persons: persons})
 }

  filter(key)  {
    if (key && key !== '') {
     return this.mockpersons.filter(person => {
       const searchKey = key.toLowerCase();
      return person.name.toLowerCase().includes(searchKey) | person.email.toLowerCase().includes(searchKey) | person.phone.toLowerCase().includes(searchKey)
     });
    } else {
      return this.mockpersons;
    }
  }

  

  render() {
    return (
      <div className="App container">
        <h1>React Contact book</h1>
        <form>
          <h3>Search in your contact list</h3>
          <input className="input-field" type="text"  onChange={(e) => this.onChange(e)} />
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.persons.map(item => {
                return (
                <tr key={item.id}>
                  <td width="20">{item.id}</td>
                  <td width="100">
                  <img src={item.image} alt="{item.name}" width="50"/>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    );
  }
}

export default App;
