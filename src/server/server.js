import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared/app/app.jsx';
const app = express();
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../shared/app/redux/reducers/combine';
import { StaticRouter as Router, matchPath } from 'react-router';
import thunk from '../shared/app/redux/middleware/thunk';
import routeBank from '../shared/routes/routes';

app.use('/dist', express.static('./dist'));

app.get('*', (req, res) => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    let foundPath = null;
    let { path, component } = routeBank.routes.find(
        ({ path, exact }) => {
            foundPath = matchPath(req.url,
                {
                    path,
                    exact,
                    strict: false
                }
            )
            return foundPath;
        }) || {};
    if (!component)
        component = {};
    if (!component.fetchData)
        component.fetchData = () => new Promise((resolve, reject) => resolve());
    component.fetchData({ store, params: (foundPath ? foundPath.params : {}) }).then(() => {
        let preloadedState = store.getState();
        let context = {};
        const html = ReactDOM.renderToString(
            <Provider store={store}>
                <Router context={context} location={req.url}>
                    <App />
                </Router>
            </Provider>
        )
        const helmetData = helmet.renderStatic();
        if (context.url)
            res.redirect(context.status, 'http://' + req.headers.host + context.url);
        else if (foundPath && foundPath.path == '/404')
            res.status(404).send(renderFullPage(html, preloadedState, helmetData))
        else
            res.send(renderFullPage(html, preloadedState, helmetData))
    });
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
    console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
    return `
    <!doctype html>
    <html>
      <head>
        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/assets/app.bundle.js"></script>
      </body>
    </html>
    `
}