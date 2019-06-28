import React from 'react';
import './App.css';
import store from './Store'
import { Provider } from 'react-redux'
import FetchNews from './FetchNews';



function App() {
  return (
    <Provider store={store}>
      <div>
        <FetchNews />
      </div>
    </Provider>
  );
}

export default App;
