import Navigation from './Navigation';
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NewEntry from './NewEntry';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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

        {/* Use /:id to get a dynamic value - similar to how express does it */}
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>

        {/* Match any route that wasn't already matched */}
        <Route path="*">
          <NotFound />
        </Route>


      </Switch>
    </Router>





  );
}

export default App;