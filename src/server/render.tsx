import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

export default (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  console.log(html);
  res.send(`
    <html>s
      <head> 
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
}