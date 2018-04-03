import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, registeUser } from '../../actions';

function mapStateToProps({ user }) {
  return {
    user
  };
}

class Register extends PureComponent {
  state = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.registed === false) {
      this.setState({ error: 'Error, try again.' });
    } else {
      this.setState({
        name: '',
        lastname: '',
        email: '',
        password: ''
      });
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.setState({ error: null });
    this.props.dispatch(registeUser(this.state, this.props.user.userList));
  };

  showUsers = () =>
    this.props.user.userList
      ? this.props.user.userList.map(({ _id, name, lastname, email }) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{email}</td>
          </tr>
        ))
      : null;

  render() {
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add user</h2>
          <div className="form_element">
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </div>
          <div className="form_element">
            <input
              name="lastname"
              type="text"
              placeholder="Enter lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
            />
          </div>
          <div className="form_element">
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form_element">
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit">Add user</button>
          <div className="error">{this.state.error}</div>
        </form>
        <div className="current_users">
          <h4>Current users:</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{this.showUsers()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Register);
