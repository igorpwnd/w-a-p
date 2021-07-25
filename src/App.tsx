import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NeedForSpeed from './page/need-for-speed/need-for-speed';

import Presentation from './page/presentation/presentation';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/need-for-speed">
          <NeedForSpeed />
        </Route>
        <Route path="/">
          <Presentation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
