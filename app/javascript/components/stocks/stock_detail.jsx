import React from 'react';
import Plot from 'react-plotly.js';

class StockDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }

  componentDidMount() {
    this.fetchStock();
    this.props.requestSingleStock(this.props.match.params.stockId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.stockId !== this.props.match.params.stockId) {
      this.props.requestSingleStock(this.props.match.params.stockId);
      this.fetchStock();
    }
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "154C2C345E8ASOJP";  // The API Key is free, available from the Alpha Vantage website
    let StockSymbol = this.props.stock.symbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    this.StockSymbol = StockSymbol;

    fetch(API_Call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {
    const stock = this.props.stock;

    if (!stock) return null; 

    return (
      <div>
        <figure>
          <img src={stock.image_url} alt={stock.name} />
        </figure><br />

        <h1>Stock Price (100 days)</h1><br />
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'green' },
            }
          ]}
          layout={{ width: 720, height: 440, title: stock.name }}
        />
        <br/><br/>
        <ul>
          <li className="summary"><b>Company Summary</b></li>
          <li className="summary">{stock.stock_desc}</li>
        </ul>
      </div>
    )
  }
}

export default StockDetail;
