import React, { Component } from "react";
import PropTypes from "prop-types";

export class SharedButton extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={() => this.submitEvent()} data-test="buttonComponent">
        {buttonText}
      </button>
    );
  }
}
SharedButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  emitEvent: PropTypes.func.isRequired,
};

export default SharedButton;
