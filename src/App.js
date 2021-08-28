import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import AddStudent from './components/AddStudent/AddStudent';
import UpdateStudentDetails from './components/UpdateStudentDetails/UpdateStudentDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/addStudent">
          <AddStudent />
        </Route>
        <Route path="/updateStudent">
          <UpdateStudentDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
