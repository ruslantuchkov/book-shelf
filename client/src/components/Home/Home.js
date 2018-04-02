import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions';
import BookItem from '../../widgetsUI/BookItem';

function mapStateToProps({ books }) {
  return {
    books
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getBooks(1, 0, 'desc'));
  }

  renderItems = books =>
    books.list
      ? books.list.map(book => <BookItem {...book} key={book._id} />)
      : null;

  loadmore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(getBooks(1, count, 'desc', this.props.books.list));
  };

  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div className="loadmore" onClick={this.loadmore}>
          Load More
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
