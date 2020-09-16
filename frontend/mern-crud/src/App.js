import React from 'react';
import Header from './component/Header';
import StudentList from './component/studentList'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StudentList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
