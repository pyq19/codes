import React, { Component, PropTypes } from 'react';

class StopWatch extends Component {
  render() {
    return (
      <div>
        <MajorClock></MajorClock>
        <ControlButton></ControlButton>
        <SplitTimes></SplitTimes>
      </div>
    );
  }
}

const MajorClock = ({milliseconds}) => {
  // TODO: 返回数字时钟JSX
};

const ControlButton = (props) => {
  // TODO: 返回两个按钮JSX
};

const SplitTimes = (props) => {
  // TODO: 返回所有计次时间JSX
};

MajorClock.propTypes = {
  milliseconds: PropTypes.number.isRequired
};

ControlButton.propTypes = {
  activated: PropTypes.bool,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

SplitTimes.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number)
};

export default StopWatch;
