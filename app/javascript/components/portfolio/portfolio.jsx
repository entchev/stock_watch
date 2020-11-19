import React from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}

  componentDidMount() {
    this.props.requestPortfolioItems();
    const pointerToThis = this;
    console.log(pointerToThis);
  }

  render() {

    return (
      <div>
        <h1>Investments</h1>
      </div>
    )
  }
}

export default Portfolio;
