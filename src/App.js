import React from 'react';
import Home from './Home';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import List from './List';

function App() {
  return (
    <Router>
    <div className="App">
        hello
        <Route path="/" component={Home}  exact/>
        <Route path="/list/:id" component={List}  />
    </div>
    </Router>
  );
}

export default App;
