const express = require('express');
const http = require('http');
const compression = require('compression');
const fs = require('fs');
const React = require('react');
const ReactDOM = require('react-dom/server');
const App = require('./src/app').default;
console.log(React, App);
const app = express();
const path = require('path'),
    colors = require('colors');

const port = process.env.PORT || 8080;

app.use(compression());
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'dist')));
// serve our static stuff like index.css
//app.use(express.static(path.join(__dirname, 'src')));

app.get('*', (req, res) => {
    let markup = ReactDOM.renderToString(<App />);
    console.log(markup);
    res.send(markup);
});


app.listen(port, function () {
    console.log('app running on localhost:' + port);
});
