import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import FileReader from "./FileReader";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div >
          <header >
            <h3 style={{marginLeft: '70px'}} >Average Interest</h3>
          </header>
          <FileReader />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;