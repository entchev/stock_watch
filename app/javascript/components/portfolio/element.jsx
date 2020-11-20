import React from 'react';
import iex from '../../util/api'

class Element extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }

    this.martket_value = (this.state.cost * this.state.current_price);
    this.total_gain = (this.state.current_price * this.state.shares) - (this.state.shares * this.state.cost)
  }

  componentDidMount() {

  //   const url = `${iex.base_url}/stock/${this.props.symbol}/intraday-prices?chartLast=1&token=${iex.api_token}`

  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     this.setState({
  //       data: data[data.length-1]
  //   })
  // })
}

  render () {
    return (
    <tr>
      <td>{this.props.name}</td>
      <td>{this.props.symbol}</td>
      <td>{this.props.amount}</td>
      <td>{this.props.cost}</td>
      <td>{this.state.data.current_price}</td>
      <td>{this.martket_value}</td>
      <td>{this.total_gain}</td>
    </tr>
    )
  }
}

export default Element;
 