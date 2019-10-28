import React, { Component } from 'react';
import 'App.css';

import Header from 'containers/Header';
import Main from 'containers/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      catchNum: null,
    }
    this._setCatchNum = this._setCatchNum.bind(this);
  }

  render() {
    return (
      <div className="App l-col">
        <Header setCatchNum={this._setCatchNum}/>
        <Main/>
      </div>
    )
  }

  _setCatchNum(event) {
    let num = event.target.value;
    this.setState({
      catchNum: num
    });
  }
}

export default App;
