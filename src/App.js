import React, {Component} from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore(); 

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainComponent/>
        </BrowserRouter>
      </Provider>
    );
  }
}




export default App;

