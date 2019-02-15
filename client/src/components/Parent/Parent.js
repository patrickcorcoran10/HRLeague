import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Stats from '../../pages/Stats';
import Draft from '../../pages/Draft';


export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/stats' component={Stats}/>
        <Route exact path='/draft' component={Draft}/>
      </div>
    )
  }
}
