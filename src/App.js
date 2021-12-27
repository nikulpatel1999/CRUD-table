import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notfound from "./components/Notfound";
import EditUser from "./components/EditUser";
// import EditUser from "./components/EditUser";

function App() {                 
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={AllUser} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
