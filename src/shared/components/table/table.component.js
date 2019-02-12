import React, { Component } from 'react'

import './table.component.scss';

export default class TableCompinent extends Component {
  render() {
    const { persons } = this.props;

    return (
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
            persons.map(item => {
              return (
                <tr key={item.id}>
                  <td width="20">{item.id}</td>
                  <td width="100">
                    <img src={item.image} alt="{item.name}" width="50" />
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
    )
  }
}
