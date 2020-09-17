import React from 'react';
import Header from './component/Header';
import StudentList from './component/studentList';
import EditStudent from './component/editstudent';
import DeleteStudent from './component/deletestudent';
import AddStudent from './component/addstudent';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StudentList} />
        <Route path="/edit/:id" component={EditStudent}/>
        <Route path="/delete/:id" component={DeleteStudent}/>
        <Route path="/add" component={AddStudent} />
      </BrowserRouter>
    </div>
  );
}

export default App;
