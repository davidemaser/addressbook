import React, { Component } from 'react';
import './stylesheets/App.css';
import Request from 'react-http-request';
import SortData from "./components/SortData";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Request
              url='https://davidemaser.github.io/data/temp-address.json'
              method='get'
              accept='application/json'
              verbose={false}
          >
              {
                  ({error, result, loading}) => {
                      if (loading) {
                          return <div>loading...</div>;
                      } else {
                          return <SortData data={result.body.address}/>
                      }
                  }
              }
          </Request>
      </div>
    );
  }
}

export default App;
