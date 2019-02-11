import React, { Component } from 'react';
import faker from 'faker/index';

import './App.scss';

class App extends Component {
  persons = Array(7).join(0).split(0).map((v, i) => i + 1).map((item) => {
    return {
      id: item,
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar()
    }
  });

  render() {
    return (
      <div className="App">
        <h1>React Contact book</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {
              this.persons.map(item => {
                return (
                <tr key={item.id}>
                  <td width="20">{item.id}</td>
                  <td width="100">
                  <img src={item.image} alt="{item.name}" width="50"/>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
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
