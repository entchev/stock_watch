import React from 'react';
import iex from '../../util/api'

class Element extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentDidMount() {

    const url = `${iex.base_url}/stock/${this.props.symbol}/intraday-prices?chartLast=1&token=${iex.api_token}`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        data: data[data.length-1]
    })
  })
    
  
}

  render () {
    const amount = Number(this.props.amount)
    const cost = Number(this.props.cost)

    const mv = amount * this.state.data.close;
    const marketValue = Math.round((mv + Number.EPSILON) * 100) / 100

    const tg = this.state.data.close * amount - amount * cost;
    const totalGain = Math.round((tg + Number.EPSILON) * 100) / 100

    return (
    <tr>
      <td>{this.props.name}</td>
      <td>{this.props.symbol}</td>
      <td>{amount}</td>
      <td>{cost}</td>
      <td>{this.state.data.close}</td>
      <td>{marketValue}</td>
      <td>{totalGain}</td>
    </tr>
    )
  }
}

export default Element;
 