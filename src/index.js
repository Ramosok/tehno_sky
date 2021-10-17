import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// настройки плагина
import './i18n';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <App/>
            </Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();


