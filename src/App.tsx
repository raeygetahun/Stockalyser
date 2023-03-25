import React, { Component } from 'react';
import Piechart from './component/piechart'
import StockPrice from './component/stock';
import Widget from './component/widget'
import Navbar from './component/navigation';
import Analysis from './component/analysis'
import data from  './component/portfolio';
import './styles/App.css';


const stocks = [
  { symbol: 'AAPL', currentPrice: 158.9300, purchasePrice: 158 },
  { symbol: 'MSFT', currentPrice: 277.6600, purchasePrice: 250 },
  { symbol: 'NVDA', currentPrice: 271.9100, purchasePrice: 271 },
  { symbol: 'GOOGL', currentPrice: 105.6000, purchasePrice: 128 },
  { symbol: 'AMZN', currentPrice: 98.7100, purchasePrice: 115 }
];

// interface IState {
//   data: ServerRespond[],
//   showGraph: boolean,
// }

class App extends Component<{}> {
  render() {
    const symbols = ['AAPL', 'MSFT','NVDA','GOOGL', 'AMZN'];
    return (
      <div className="App">
        <div className='pie'>
        <Navbar logo="https://app.divizend.com/static/media/logo.a55771ef.svg" />
          {/* <div style={{color:"rgb(60, 157, 155)",fontWeight:'bold'}}> 
          Welcome to Divizend
          </div>  */}
        <Piechart/>
        <StockPrice symbols={symbols}/>
        </div>
        <Widget/>
        <div className="analysis">
          <Analysis stocks={stocks} />;

        </div>
      </div>
    )
  }
}

export default App;
