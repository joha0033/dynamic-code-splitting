import React from 'react';
import {
  Route,
  Link } from 'react-router-dom'

import ContactInfo from './contactInfo/contactInfo'

function Contact({ match }) {
  return (
    <div>
      <h1>Contact!</h1>
      <ul>
        <li>
          <Link to={`${match.url}/email`}>Email</Link>
        </li>
        <li>
          <Link to={`${match.url}/phone`}>Phone</Link>
        </li>
        <li>
          <Link to={`${match.url}/pigeon`}>pigeon</Link>
        </li>
      </ul>

      <Route path='/contact/:contactId' component={ContactInfo}/>
      <Route exact path={match.url} render={() => {
        return(<p>please select a contact method above.</p>)
      }}/>

    </div>
    );
}

export default Contact
