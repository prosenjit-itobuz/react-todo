import React, { Component } from 'react'

import { ReactComponent as Loader } from './loader.svg';
import './loader.component.scss';

export class AppLoaderComponent extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <Loader></Loader>
      </div>
    )
  }
}
