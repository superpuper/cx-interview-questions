import React, { Component } from 'react';
import 'App.css';

import Header from 'containers/Header';
import Main from 'containers/Main';

import config from 'config';
import { shuffleRenew } from 'utils';

const modes = {
  ONE: 1,
  MANY: 10,
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pokemons: [],
      modes,
      catchNum: modes.MANY,
    }
    this._setCatchNum = this._setCatchNum.bind(this);
  }

  render() {
    return (
      <div className="App l-col">
        <Header {...this.state}/>
        <Main {...this.state} setCatchNum={this._setCatchNum}/>
      </div>
    )
  }

  _setCatchNum(event) {
    shuffleRenew();
    const num = event.target.value;
    this.setState({
      catchNum: num
    });
  }

  componentDidMount() {
    shuffleRenew();
    fetch(config.POKEMONS_JSON_URL)
      .then(res => res.json())
      .then(res => this.setState({
        pokemons: res.results,
        loading: false
      })
    );
  }
}

export default App;
