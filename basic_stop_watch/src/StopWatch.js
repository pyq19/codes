import React, { Component, Fragment } from 'react';

import MajorClock from './components/MajorClock';
import ControlButtons from './components/ControlButtons';
import SplitTimes from './components/SplitTimes';


class StopWatch extends Component {
  // constructor() {
  //   super(...arguments);
  //   this.onSplit = this.onSplit.bind(this);
  //   this.onStart = this.onStart.bind(this);
  //   this.onPause = this.onPause.bind(this);
  //   this.onReset = this.onReset.bind(this);
  // }

  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: [],
  }

  onSplit = () => {
    this.setState({
      splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
    });
  }


  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date(),
    });

    this.intervalHandle = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000 / 60);
  }

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false,
    });
  }

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: [],
    });
  }

  render() {
    return (
      <Fragment>
        <MajorClock milliseconds={this.state.currentTime - this.state.startTime} />
        <ControlButtons
          activated={this.state.isStarted}
          onStart={this.onStart}
          onPause={this.onPause}
          onSplit={this.onSplit}
          onReset={this.onReset}
        />
        <SplitTimes value={this.state.splits} />
      </Fragment>
    );
  }
}


export default StopWatch;
