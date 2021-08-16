import {Route , Switch, Redirect} from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import QuoteDetails from './Pages/QuoteDetails';
import NewQoute from './Pages/NewQoute';
import Layout from './components/layout/Layout';
import NotFound from './Pages/NotFound';
function App() {
  return (
    <>
    <Layout>
<Switch>
<Route path="/" exact>
    <Redirect to="/quotes"/>
  </Route>
  <Route path="/quotes" exact>
    <AllQuotes/>
  </Route>
  <Route path="/quotes/:quoteId" >
    <QuoteDetails/>
    </Route>
    <Route path="/new-quote">
    <NewQoute/>
    </Route>
    <Route path="*">
    <NotFound/>
    </Route>
</Switch>
</Layout>
    </>
  );
}

export default App;
