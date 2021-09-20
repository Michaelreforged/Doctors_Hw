import './App.css';
import NavBar from './Components/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js';
import Doctors from './Pages/Doctors';
import Users from './Pages/Users';
import Appointments from './Pages/Appointment';
import newAppointments from './Pages/NewAppointments';
import EditPersonForm from './Pages/EditPerson';
import NewPersonForm from './Pages/NewPersonForm';

function App() {
  return (
   <>
   <NavBar/>
   <Container>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/doctors" component={Doctors} />
       <Route exact path="/users" component={Users} />
       <Route exact path="/doctors/new" component={NewPersonForm} />
       <Route exact path="/users/new" component={NewPersonForm} />
       <Route exact path="/doctors/:id" component={Doctors} />
       <Route exact path="/users/:id" component={Users} />
       <Route exact path="/doctors/:id/edit" component={EditPersonForm} />
       <Route exact path="/users/:id/edit" component={EditPersonForm} />
       <Route exact path="/appointments" component={Appointments} />
       <Route exact path="/appointments/new" component={newAppointments} />
       <Route component={() => <p>react router 404 path not found</p>} />
      </Switch>
   </Container>
   </>
  );
}

export default App;
