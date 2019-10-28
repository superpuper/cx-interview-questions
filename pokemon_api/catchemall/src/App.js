import React, { Component } from 'react';
import 'App.css';

import Header from 'containers/Header';
import Main from 'containers/Main';

import config from 'config';

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
      catchNum: modes.MANY,
    }
    this._setCatchNum = this._setCatchNum.bind(this);
  }

  render() {
    return (
      <div className="App l-col">
        <Header {...this.state} modes={modes} setCatchNum={this._setCatchNum}/>
        { this.state.loading ? '' : <Main {...this.state}/> }
      </div>
    )
  }

  _setCatchNum(event) {
    const num = event.target.value;
    this.setState({
      catchNum: num
    });
  }

  componentDidMount() {
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
