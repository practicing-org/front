
import './App.css';
import CounterContainer from "./containers/CounterContainer"

import {Route,Link} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Profiles from "./components/Profiles"
import History from "./components/History"


function App() {
  return (
      <div className="App">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/profiles">profiles</Link></li>
          <li><Link to="/history">history</Link></li>
        </ul>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles}  />
        <Route path="/history" component={History}  />
      </div>
  );
}

export default App;
