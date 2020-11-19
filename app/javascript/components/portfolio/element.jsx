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

    const url = `${iex.base_url}/stock/${this.props.symbol}/intraday-
    prices?ChartLast=1&token=${iex.api_token}`
    

    this.setState({
      data: {
        company: "default",
        shares: 5,
        cost: 20,
        current_price: 10,
      }
    })
  }

  render () {
    return (
    <tr>
      <td>Company</td>
      <td>{this.props.symbol}</td>
      <td>{this.state.data.shares}</td>
      <td>{this.state.data.cost}</td>
      <td>{this.state.data.current_price}</td>
      <td>{this.martket_value}</td>
      <td>{this.total_gain}</td>
    </tr>
    )
  }
}

export default Element;
 