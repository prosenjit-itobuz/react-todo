import React, { Component } from 'react';
import axios from 'axios';

import { SearchComponent } from './shared/components/search/search.component';
import TableCompinent from './shared/components/table/table.component';
import { AppLoaderComponent } from './shared/components/loader-app/loader.component';

import './App.scss';


class App extends Component {
  mockpersons = [];

  state = {
    searchkey: '',
    persons: [].concat(this.mockpersons),
    loader: true
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
        const name = Object.keys(person.name).map((c) => person.name[c]).reduce((a , c) => a + c);
        return name.toLowerCase().includes(searchKey)
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
        {
          loader ? <AppLoaderComponent /> : null
        }
        
      </div>
    );
  }

  componentDidMount() {
    axios(`https://randomuser.me/api/?results=10&page=2`)
      .then(response => response.data)
      .then(response => {
        console.log(response)
        this.mockpersons = response.results;
        console.log(this.mockpersons)
        this.setState({ persons: this.mockpersons, loader: false });
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default App;
