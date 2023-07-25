import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const Root = () => (
  <Provider store={store}> 
     <Router>
      <App />
    </Router>
  </Provider>     
);

ReactDOM.render(<Root />, document.getElementById('root'));
  
     
