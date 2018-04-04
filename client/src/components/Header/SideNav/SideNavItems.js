import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

function mapStateToProps({ user }) {
  return {
    user
  };
}

const SideNavItems = ({ user }) => {
  const items = [
    {
      type: 'navItem',
      icon: 'home',
      text: 'Home',
      link: '/',
      restricted: false
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'My profile',
      link: '/user',
      restricted: true
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'Add admins',
      link: '/user/register',
      restricted: true
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'Login',
      link: '/login',
      restricted: false,
      exclude: true
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'My reviews',
      link: '/user/user-reviews',
      restricted: true
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'Add review',
      link: '/user/add',
      restricted: true
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'Logout',
      link: '/user/logout',
      restricted: true
    }
  ];

  const element = ({ type, text, link, icon }, i) => (
    <div key={text} className={type}>
      <Link to={link}>
        <FontAwesome name={icon} />
        {text}
      </Link>
    </div>
  );

  const showItems = () =>
    user.login
      ? items.map((item, i) => {
          if (user.login.isAuth) {
            return !item.exclude && element(item, i);
          } else {
            return !item.restricted && element(item, i);
          }
        })
      : null;

  return <div>{showItems()}</div>;
};

export default connect(mapStateToProps)(SideNavItems);
