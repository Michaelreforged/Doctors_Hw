import './App.css';
import NavBar from './Components/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home.js';
import Doctors from './Pages/Doctors';
import Users from './Pages/Users';
import Appointments from './Pages/Appointment';

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
