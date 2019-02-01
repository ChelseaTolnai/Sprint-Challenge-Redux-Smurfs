import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import Loader from 'react-loader-spinner';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurf = smurf => {
    this.props.addSmurf(smurf);
  }

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {(this.props.fetchingSmurfs || this.props.addingSmurf) && <Loader type="ThreeDots" color="#88CCFF" height="60" width="60" />}
        {this.props.error ? <div>{this.props.error}</div> :
        <Smurfs smurfs={this.props.smurfs}/>
        }
        <SmurfForm 
          addSmurf={this.addSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
