import React, { Component } from 'react'

import './search.component.scss';

export class SearchComponent extends Component {
  input = null;

  render() {
    const { value, onChange, placeholder } = this.props;
    return (
      <form>
        <h3>Search in your contact list</h3>
        <input className="input-field" type="text" 
          value={value} placeholder={placeholder}
          onChange={(e) => onChange(e)}
          ref = {(node) => this.input = node }
          />
      </form>
    )
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }
}

