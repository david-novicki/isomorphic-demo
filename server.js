const express = require('express');
const http = require('http');
const compression = require('compression');
const fs = require('fs');
const React = require('react-dom/server');
const App = require('./src/app');
//console.log(React, App);
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
    let markup = React.renderToStaticMarkup(App);
    console.log(markup);
    //res.sendFile(path.join(__dirname, './index-main.html'));
});


app.listen(port, function () {
    console.log('app running on localhost:' + port);
});
