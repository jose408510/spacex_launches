import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import './App.css';


const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
        {/* <img src={logo} alt="spacex" style={{ width: 300, display: 'block', margin: 'auto'}}></img> */}
        <h1>SpaceX</h1>
        <Route exact path="/" component={Launches}/>
        <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
    );
  }
}

export default App;
