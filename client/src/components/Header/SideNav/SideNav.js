import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './SideNavItems';

const Nav = ({ showNav, onHideNav }) => {
  return (
    <SideNav
      showNav={showNav}
      onHideNav={onHideNav}
      navStyle={{
        backgroundColor: '#242424',
        maxWidth: '200px'
      }}
    >
      <SideNavItems />
    </SideNav>
  );
};

export default Nav;
