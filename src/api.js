// const express = require('express');
// const axios = require('axios');

// const app = express();

// const API_KEY = 'H6XPR5H4XI8NZHAC';

// app.get('/stock/:symbol', async (req, res) => {
//   const { symbol } = req.params;
//   try {
//     const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
//     const data = response.data['Global Quote'];
//     const formattedData = {
//       symbol: data['01. symbol'],
//       price: parseFloat(data['05. price']).toFixed(2),
//       change: parseFloat(data['09. change']).toFixed(2),
//       percentChange: parseFloat(data['10. change percent']).toFixed(2),
//     };
//     res.json(formattedData);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch stock price.' });
//   }
// });

// app.listen(3001, () => {
//   console.log('Server listening on port 3001.');
// });
