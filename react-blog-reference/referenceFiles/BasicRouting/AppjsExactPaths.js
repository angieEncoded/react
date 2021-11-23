import Navigation from './Navigation';
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NewEntry from './NewEntry';


function App() {

  return (

    <Router>
      <Navigation />

      <Switch>

        {/* Use exact to prevent this from matching also with /new */}
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/new">
          <NewEntry />
        </Route>



      </Switch>
    </Router>





  );
}

export default App;