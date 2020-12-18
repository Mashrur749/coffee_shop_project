import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./components/Login.js"
import Register from "./components/Register"
import NotFound from "./components/NotFound"
import NavBar from "./components/NavBar"
import Menu from "./components/Menu"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/> 
          <Switch>
            <Route path="/" component={Menu} exact/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
