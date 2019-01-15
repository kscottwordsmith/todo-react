import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import '../styles/App.css'

import Tasks from './Tasks'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="container">
            <Route path="/" exact component={Tasks} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
