import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return(
    <div className="profile-sidebar">
      <section className="sidebar-content">
        <Link to={`profile/details`} className={props.currentPage==='details' ? '' : 'active'}>Details</Link>
        <Link to={`profile/favorites`} className={props.currentPage==='favorites' ? '' : 'active'}>Favorites</Link>
        <Link to={`profile/reservations`} className={props.currentPage==='reservations' ? '' : 'active'}>Reservations</Link>
      </section>
    </div>
  );
};
