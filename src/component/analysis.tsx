import React from 'react';

interface Stock {
  symbol: string;
  currentPrice: number;
  purchasePrice: number;
}

interface Props {
  stocks: Stock[];
}

const StockReturnsTable: React.FC<Props> = ({ stocks }) => {
  const calculateReturn = (currentPrice: number, purchasePrice: number, memo: Map<string, number>): number => {
    const memoKey = `${currentPrice}:${purchasePrice}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey)!;
    }

    const returnPercentage = ((currentPrice - purchasePrice) / purchasePrice) * 100;
    const returnRounded = parseFloat(returnPercentage.toFixed(2));
    memo.set(memoKey, returnRounded);
    return returnRounded;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Stock Symbol</th>
          <th>Purchase Price</th>
          <th>Current Price</th>
          <th>Return</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <tr key={stock.symbol}>
            <td>{stock.symbol}</td>
            <td>{stock.purchasePrice}</td>
            <td>{stock.currentPrice}</td>
            <td>{calculateReturn(stock.currentPrice, stock.purchasePrice, new Map<string, number>())}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockReturnsTable;
