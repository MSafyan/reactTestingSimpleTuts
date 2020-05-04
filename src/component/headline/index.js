import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Headline extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {header,desc}=this.props;

    if(!header){
      return null;
    }
    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">
          {desc}
        </p>
      </div>
    )
  }
}

Headline.propTypes={
  header:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  tempArr:PropTypes.arrayOf(PropTypes.shape({
    fName:PropTypes.string.isRequired,
    lName:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    onlineStatus:PropTypes.bool.isRequired
  }))
}

export default Headline
