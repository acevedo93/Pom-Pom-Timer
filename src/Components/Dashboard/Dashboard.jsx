import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RoutesDashboard from '../RoutesDashboard'


// import { } from '../../firebase/firebase'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <RoutesDashboard />
        </BrowserRouter>
      </div>
    )
  }
}


export default Dashboard 
