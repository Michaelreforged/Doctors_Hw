import './App.css';
import NavBar from './Components/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './Components/Home.js';
import Doctors from './Components/Doctors';
import Users from './Components/Users';
import Appointments from './Components/Appointment';

function App() {
  return (
   <>
   <NavBar/>
   <Container>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/doctors" component={Doctors} />
       <Route exact path="/users" component={Users} />
       <Route exact path="/appointments" component={Appointments} />
       <Route component={() => <p>react router 404 path not found</p>} />
      </Switch>
   </Container>
   </>
  );
}

export default App;
