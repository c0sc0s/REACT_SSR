import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Home from './Home';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<Home />);
  res.send(`
    <html>
      <head>
        <title>SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

app.use('/client.js', express.static('dist/client.js'));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});