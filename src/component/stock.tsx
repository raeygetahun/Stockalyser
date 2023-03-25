import React, { useState,useEffect  } from 'react';
import '../styles/stock.css';


interface StockPriceData {
  symbol: string;
  change: string;
  changePercent: string;
  price: string;
}

interface StockPriceProps {
  symbols: string[];
}

const StockPrice: React.FC<StockPriceProps> = ({ symbols }) => {
  const [prices, setPrices] = useState<{ [symbol: string]: StockPriceData }>({});

  const fetchStockPrices = async () => {
    const newPrices: { [symbol: string]: StockPriceData } = {};

    for (const symbol of symbols) {
      try {
        const response = await fetch(`http://localhost:4000/stock/${symbol}`);
        const data: StockPriceData = await response.json();
        newPrices[symbol] = data;
      } catch (error) {
        console.error(error);
      }
    }

    setPrices(newPrices);
  };
  useEffect(() => {
    fetchStockPrices();
  }, []);
  

  return (
    <div className='stockprices'>
      <h2>Stock Prices</h2>
      <table className='stocktable'>
        <thead>
          <tr>
            <th >Symbol</th>
            <th >Price</th>
            <th >Change</th>
            <th >Change Percent</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(prices).map(([symbol, data]) => (
            <tr key={symbol}>
              <td >{symbol}</td>
              <td >{data.price}</td>
              <td >{data.change}</td>
              <td >{data.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockPrice;
