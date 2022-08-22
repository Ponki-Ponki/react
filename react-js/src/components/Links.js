import React from 'react';
import { NavLink } from 'react-router-dom';



function Links(props) {
  return (
    <  >
      <NavLink className={ 
      (({isActive})=> isActive ? 'links' : 'noActiveLinks')} 
      to={props.to}>{props.name}</NavLink>
    </>
  );
}

function LinksChats(props) {
  return (
    <  >
      <NavLink className={ 
      (({isActive})=> isActive ? '' : '')} 
      to={props.to}>{props.name}</NavLink>
    </>
  );
}

export default Links;