import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Loader from 'react-loader-spinner';
import Smurfs from './Smurfs';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {this.props.fetchingSmurfs && <Loader type="ThreeDots" color="#88CCFF" height="60" width="60" />}
        <Smurfs smurfs={this.props.smurfs}/>
        {this.props.error && <div>{this.props.error}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
