import React, { Component } from 'react';
import faker from 'faker/index';

import { SearchComponent } from './shared/components/search/search.component';
import TableCompinent from './shared/components/table/table.component';

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

  onChange = (e) => {
    const searchkey = e.target.value;
    this.setState({ searchkey: e.target.value });

    let persons = this.filter(searchkey);
    this.setState({ persons: persons })
  }

  filter(key) {
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
        <SearchComponent onChange={this.onChange} placeholder="Search here" />
        <TableCompinent persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
