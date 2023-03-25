const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

const API_KEY = 'H6XPR5H4XI8NZHAC';

app.use(cors()); // Enable CORS middleware

app.get('/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data['Global Quote']) {
      const stockData = {
        symbol: data['Global Quote']['01. symbol'],
        price: data['Global Quote']['05. price'],
        change: data['Global Quote']['09. change'],
        changePercent: data['Global Quote']['10. change percent']
      };
      res.json(stockData);
    // console.log(response)
    // const price = response.data['Global Quote']['05. price'];
    // res.json({ symbol, price });
  } else {
    res.status(404).json({ error: 'Stock not found' });
  }
  }catch (error) {
    console.error(error);
    res.status(500).send('Error fetching stock price');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
