import {Switch,Link, Route} from "react-router-dom";
import './App.css';
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path='/' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
