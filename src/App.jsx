import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import { SignUpPage } from './features/sign-up/SignUpPage';

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/">
          <Redirect to='/sign-up' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
