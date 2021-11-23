import { Route, Switch } from 'react-router-dom'
import AllMeetups from "./pages/AllMeetups"
import Favorites from "./pages/Favorites"
import NewMeetup from "./pages/NewMeetup"
import Layout from "./components/layout/Layout"


function App() {
  return (
    // localhost:3000
    // mypage.com
    // /
    // /new-meetup
    // /favorites

    <Layout>
      {/* Use switch to tell the router that only one route should be active */}
      <Switch>

        {/* Use exact keyword to tell router to only match this route */}
        {/* Shorthand is just 'exact' but we can also set it to a truthy value */}
        <Route path='/' exact={true}>
          <AllMeetups />
        </Route>


        <Route path='/new-meetup' exact>
          <NewMeetup />
        </Route>


        <Route path='/favorites' exact>
          <Favorites />
        </Route>



      </Switch>
    </Layout>
  );
}

export default App;
