import React,{ useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // holds all of the appointments in the appointments array object, setAppointment adds a new object to the appoinments
  let [ appointments, setAppointment ] = useState([])
  let [ contacts, setContacts ] = useState([{
    name: "Brian H"
  }])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  // adding one contact object at a time
 const addContact = ( contact ) => {
  setContacts( prev => [...prev, contact]);
 }

 const addAppintment = ( appointment ) => {
  setAppointment( ( appointment ) => [ appointments, ...appointment ])
 }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
