import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions';
import { setTimeout } from 'timers';

function mapStateToProps({ books }) {
  return {
    books
  };
}

class EditReview extends PureComponent {
  state = {
    formdata: {
      _id: this.props.match.params.id,
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: ''
    }
  };

  componentDidMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.dispatch(clearBook());
  }

  componentWillReceiveProps(nextProps) {
    const {
      book: { _id, name, author, review, pages, rating, price }
    } = nextProps.books;

    this.setState({
      formdata: {
        _id,
        name,
        author,
        review,
        pages,
        rating,
        price
      }
    });
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
    this.props.dispatch(updateBook(this.state.formdata));
  };

  deletePost = () => {
    this.props.dispatch(deleteBook(this.props.match.params.id));
  };

  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push('/user/user-reviews');
    }, 1000);
  };

  render() {
    const { name, author, review, pages, rating, price } = this.state.formdata;
    const { updateBook, book, bookDeleted } = this.props.books;
    return (
      <div className="rl_container article">
        {updateBook ? (
          <div className="edit_confirm">
            Post updated,{' '}
            <Link to={`/books/${book._id}`}>click here to see your post.</Link>
          </div>
        ) : null}
        {bookDeleted ? (
          <div className="red_tag">Post Deleted {this.redirectUser()}</div>
        ) : null}
        <form onSubmit={this.submitForm}>
          <h2>Edit review</h2>
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
          <button type="submit">Edit review</button>
          <div className="delete_post">
            <div className="button" onClick={this.deletePost}>
              Delete review
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EditReview);
