import React from 'react'
// import { Route, Link} from 'react-router-dom'


function switchParams(params){
    switch (params) {
      case 'email':
        return (
          <div>
          <h3> joha0033@gmail.com </h3>
        </div>)
      case 'phone':
        return(
          <div>
          <h3> (904) 304 7003 </h3>
        </div>)
      case 'pigeon':
      return(
        <div>
          <h3> Frank, he's my pigeon </h3>
        </div>)
      default:
      return(
        <div>
          <h3> no thanks </h3>
        </div>)
      }
}

function ContactInfo({ match }){
  return(
    <div>
      {switchParams(match.params.contactId)}
    </div>
  )
}

export default ContactInfo
