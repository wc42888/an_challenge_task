import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import store from '../redux/store';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Route
                exact
                path="/"
                render={() => (
                  <Redirect
                    component={Products}
                    to="/products/page/1"
                  />
                )
                }
              />
              <Route
                exact
                path="/products/page/:pageNumber"
                render={({ match }) => (
                  <Products
                    pageNumber={Number(match.params.pageNumber)}
                  />
                )}
              />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
