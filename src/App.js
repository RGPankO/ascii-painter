import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col s8 green lighten-2">
                    <Grid />
                </div>
                <div className="col s4 blue lighten-2">123</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
