import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import BookList from "./component/Book/BookList";
import home from "./component/home"
import Navigationbar from "./component/Navigationbar";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
        <Router>
          <div> <Navigationbar/>

            <div>
              <switch>
                <Route path="/" exact component={home} />
                <Route path="/BookList" component={BookList} />

              </switch>


            </div>

          </div>
        </Router>
      </Provider>
  );
}

export default App;
