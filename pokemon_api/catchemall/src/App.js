import React, { Component } from 'react';
import 'App.css';

import Header from 'containers/Header';
import Main from 'containers/Main';

const POKEMONS_JSON_URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pokemons: [],
      catchNum: null,
    }
    this._setCatchNum = this._setCatchNum.bind(this);
  }

  render() {
    return (
      <div className="App l-col">
        <Header {...this.state} setCatchNum={this._setCatchNum}/>
        { this.state.loading ? '' : <Main/> }
      </div>
    )
  }

  _setCatchNum(event) {
    let num = event.target.value;
    this.setState({
      catchNum: num
    });
  }

  componentDidMount() {
    fetch(POKEMONS_JSON_URL)
      .then(res => res.json())
      .then(res => this.setState({
        pokemons: res.results,
        loading: false
      })
    );
  }
}

export default App;
