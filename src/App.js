import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid'
import Legend from './Legend'
import Leaderboard from './Leaderboard'


class App extends Component {

  state ={
    nodes: [],
    bots: [],

  }
  componentDidMount(){
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData(){
    fetch('http://headlight-tournament-3.herokuapp.com/nodes')
    .then(res => res.json())
    .then(nodeData => this.setState({nodes: nodeData.Nodes}))

    fetch('http://headlight-tournament-3.herokuapp.com/bots')
    .then(res => res.json())
    .then(botData =>{this.setState({bots: botData.Bots})})
  }

  render() {
    return (
      <div className="App">
        <Legend />
        <Leaderboard bots={this.state.bots}/>
        <Grid nodes={this.state.nodes} bots={this.state.bots}/>
      </div>
    );
  }
}

export default App;
