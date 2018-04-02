import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './SideNav/SideNav';

class Header extends Component {
  state = {
    showNav: false
  };

  render() {
    return (
      <header>
        <div className="open_nav">
          <FontAwesome
            name="bars"
            onClick={() => this.setState({ showNav: true })}
            style={{ color: '#fff', padding: '10px', cursor: 'pointer' }}
          />
        </div>
        <Nav
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
        <Link to="/" className="logo">
          The Book Shelf
        </Link>
      </header>
    );
  }
}

export default Header;
