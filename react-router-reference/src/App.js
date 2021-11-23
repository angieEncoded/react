import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import QuotesDetail from './components/pages/QuotesDetail';
import Layout from "./components/layout/Layout"
import NotFound from './components/pages/NotFound';

function App() {




  return (
    <Router>

      <Layout>
        <Switch>
          {/* This is how we do a redirect */}
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>


          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          {/* This one can't be exact or it won't match the comments route */}
          <Route path="/quotes/:quoteId">
            <QuotesDetail />
          </Route>

          <Route path="/new-quote" exact>
            <NewQuote />
          </Route>

          {/* Fall back route - must be last */}
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Layout>


    </Router>


  );
}

export default App;
