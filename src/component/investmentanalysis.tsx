import React, { useState,useEffect  } from 'react';

interface Stock {
    ticker: string;
    purchasePrice: number;
    currentPrice: number;
  }
  
  interface Portfolio {
    stocks: Stock[];
    weights: number[];
    expectedReturn: number;
    risk: number;
  }
  
  // Calculate the expected return of a single stock
  function calculateExpectedReturn(stock: Stock): number {
    return (stock.currentPrice - stock.purchasePrice) / stock.purchasePrice;
  }
  
  // Calculate the covariance between two stocks
  function calculateCovariance(stock1: Stock, stock2: Stock, returns: number[][]): number {
    const returns1 = returns.map(r => r[0]);
    const returns2 = returns.map(r => r[1]);
    const mean1 = calculateMean(returns1);
    const mean2 = calculateMean(returns2);
    const deviations1 = returns1.map(r => r - mean1);
    const deviations2 = returns2.map(r => r - mean2);
    const sum = deviations1.reduce((acc, dev1, i) => acc + dev1 * deviations2[i], 0);
    return sum / (returns.length - 1);
  }
  
  // Calculate the mean return of a set of returns
  function calculateMean(returns: number[]): number {
    return returns.reduce((acc, r) => acc + r, 0) / returns.length;
  }
  
  // Calculate the expected return and risk of a portfolio
  function calculatePortfolioRiskAndReturn(portfolio: Portfolio, returns: number[][]): Portfolio {
    const expectedReturns = portfolio.stocks.map(calculateExpectedReturn);
    const meanReturn = calculateMean(expectedReturns);
    const covarianceMatrix = portfolio.stocks.map(stock1 =>
      portfolio.stocks.map(stock2 => calculateCovariance(stock1, stock2, returns))
    );
    const variance = portfolio.weights.reduce((acc, weight, i) =>
      acc + weight * covarianceMatrix[i][i] * weight
    , 0);
    const covariance = portfolio.weights.reduce((acc, weight, i) =>
      acc + portfolio.weights.reduce((innerAcc, innerWeight, j) =>
        innerAcc + weight * covarianceMatrix[i][j] * innerWeight
      , 0)
    , 0);
    const risk = Math.sqrt(variance + 2 * covariance + portfolio.weights.reduce((acc, weight) => acc + weight ** 2, 0));
    const expectedReturn = portfolio.weights.reduce((acc, weight, i) =>
      acc + weight * expectedReturns[i]
    , 0);
    return {
      ...portfolio,
      expectedReturn: meanReturn * 12,
      risk: risk * Math.sqrt(12),
    };
  }
  
  // Generate all possible portfolios of a given set of stocks
  function generatePortfolios(stocks: Stock[], maxWeight: number): Portfolio[] {
    const portfolios: Portfolio[] = [];
    const generate = (remainingStocks: Stock[], weights: number[]) => {
      if (remainingStocks.length === 0) {
        const sum = weights.reduce((acc, w) => acc + w, 0);
        if (sum <= maxWeight) {
          const portfolio: Portfolio = {
            stocks,
            weights,
            expectedReturn: 0,
            risk: 0,
          };
          portfolios.push(portfolio);
        }
      } else {
        const stock = remainingStocks[0];
        const remaining = remainingStocks.slice(1);
        for (let i = 0; i <= maxWeight; i++) {
          generate(remaining, [...weights, i]);
        }
      }
    };
    generate(stocks, []);
    return portfolios;
  }
  
  // Find the portfolio
  