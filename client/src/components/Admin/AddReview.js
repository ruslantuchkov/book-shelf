import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addReview, clearNewBook } from '../../actions';

function mapStateToProps({ books }) {
  return {
    books
  };
}

class AddReview extends Component {
  state = {
    formdata: {
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: ''
    }
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewBook());
  }

  handleInput = event => {
    this.setState({
      formdata: {
        ...this.state.formdata,
        [event.target.name]: event.target.value
      }
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.dispatch(
      addReview({
        ...this.state.formdata,
        ownerId: this.props.user.login.id
      })
    );
  };

  showNewBook = book =>
    book.post ? (
      <div className="conf_link">
        <Link to={`/books/${book.bookId}`}>
          Click the link to see the post.
        </Link>
      </div>
    ) : null;

  render() {
    const { name, author, review, pages, rating, price } = this.state.formdata;

    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>
          <div className="form_element">
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={this.handleInput}
            />
          </div>
          <div className="form_element">
            <input
              name="author"
              type="text"
              placeholder="Enter author"
              value={author}
              onChange={this.handleInput}
            />
          </div>
          <textarea name="review" value={review} onChange={this.handleInput} />
          <div className="form_element">
            <input
              name="pages"
              type="number"
              placeholder="Enter pages"
              value={pages}
              onChange={this.handleInput}
            />
          </div>
          <div className="form_element">
            <select name="rating" value={rating} onChange={this.handleInput}>
              <option val="1">1</option>
              <option val="2">2</option>
              <option val="3">3</option>
              <option val="4">4</option>
              <option val="5">5</option>
            </select>
          </div>
          <div className="form_element">
            <input
              name="price"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit">Add review</button>
          {this.props.books.newBook
            ? this.showNewBook(this.props.books.newBook)
            : null}
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddReview);
