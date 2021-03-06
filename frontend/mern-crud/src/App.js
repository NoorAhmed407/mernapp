import React from 'react';
import Header from './component/Header';
import StudentList from './component/studentList';
import EditStudent from './component/editstudent';
import DeleteStudent from './component/deletestudent';
import AddStudent from './component/addstudent';
import SignIn from './component/signIn';
import SignUp from './component/signUp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Switch>
          <Route path="/" exact component={StudentList} />
          <Route path="/signin"component={SignIn} />
          <Route path="/signup"component={SignUp} />
          <Route path="/edit/:id" component={EditStudent}/>
          <Route path="/delete/:id" component={DeleteStudent}/>
          <Route path="/add" component={AddStudent} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
