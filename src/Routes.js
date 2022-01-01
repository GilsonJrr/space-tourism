import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import Header from './Pages/Headers';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Destination" component={Destination}/>
          <Route path="/Crew" component={Crew}/>
          <Route path="/Technology" component={Technology}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;