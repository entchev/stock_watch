import React from 'react';
import iex from '../../util/api'

class WatchlistElement extends React.Component {
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
          data: data[data.length - 1]
        })
      })
  }

  render() {

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.symbol}</td>
        <td>{this.state.data.close}</td>
      </tr>
    )
  }
}

export default WatchlistElement;
