import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment-js';
import { Link } from 'react-router-dom';
import { getUserPosts } from '../../actions';

function mapStateToProps({ user }) {
  return {
    user
  };
}

class UserReviews extends Component {
  componentDidMount() {
    this.props.dispatch(getUserPosts(this.props.user.login.id));
  }

  showUserPosts = user =>
    user.userPosts
      ? user.userPosts.map(({ _id, name, author, createAt }) => (
          <tr key={_id}>
            <td>
              <Link to={`user/edit-post/${_id}`}>{name}</Link>
            </td>
            <td>{author}</td>
            <td>{moment(createAt).format('DD/MM/YY')}</td>
          </tr>
        ))
      : null;

  render() {
    return (
      <div className="user_posts">
        <h4>Your reviews</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.showUserPosts(this.props.user)}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserReviews);
