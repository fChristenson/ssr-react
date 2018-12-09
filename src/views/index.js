const html = (jsx, state = {}) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  
  <body>
    <!-- The content in this element will be replaced by identical React nodes -->
    <div id="root">${jsx}</div>
    <script>window.__STATE__ = ${JSON.stringify(state)};</script>
    <script src="/bundle.main.js"></script>
  </body>
  
  </html>`;
};

module.exports = html;
