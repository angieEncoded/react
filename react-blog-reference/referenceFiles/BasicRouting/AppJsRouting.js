import Navigation from './Navigation';
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {

    return (

        <Router>
            <Navigation />

            <Switch>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </Router>





    );
}

export default App;