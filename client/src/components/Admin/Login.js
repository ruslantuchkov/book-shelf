import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

function mapStateToProps({ user }) {
  return {
    user
  };
}

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    success: false
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.login.isAuth) {
      this.props.history.push('/user');
    }
  }

  render() {
    let { user } = this.props;
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Log in here</h2>
          <div className="form_element">
            <input
              type="email"
              name="email"
              placeholder="Enter your mail"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form_element">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit">Log in</button>
          <div className="error">
            {user.login ? <div>{user.login.message}</div> : null}{' '}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
