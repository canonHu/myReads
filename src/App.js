import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './components/BookListComponent';
import Search from './components/SearchComponent';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    bookList: [],
    searchBookList: []
  };

  /**
  * @description Get all the data from server
  */
  getData() {
    BooksAPI.getAll().then((bookList) => {
      this.setState({ bookList });
    })
  }

  componentDidMount() {
    this.getData();
  }

  /**
  * @description Change read state
  * @param {object} book - Information about a book that need to be changed
  * @param {string} shelf - The state of a book that need to be changed
  */
  changeReadState = (book, shelf) => {
    this.setState((state) => {
      /* eslint-disable */
      bookList: state.bookList.forEach(value => value.id === book.id ? value.shelf = shelf : value.shelf )
    })
    BooksAPI.update(book, shelf)
  }

  /**
  * @description Change read state
  * @param {object} book - Information about a book that need to be changed
  * @param {string} shelf - The state of a book that need to be changed
  */
  updateReadState = (index, book, shelf) => {
    this.setState((state) => {
      /* eslint-disable */
      bookList: state.bookList.forEach(value => value.id === book.id ? value.shelf = shelf : value.shelf)
    })
    BooksAPI.update(book, shelf);
    this.setState((state) => {
      /* eslint-disable */
      searchBookList: state.searchBookList[index].shelf = shelf;
    });
  }

  searchBooks = (query) => {
    query && BooksAPI.search(query)
      .then((searchBookList) => {
        if (searchBookList.error) {
          alert(searchBookList.error);
        } else {
          this.setState((state) => {
            /* eslint-disable */
            bookList: state.bookList.forEach(book => {
              searchBookList.forEach((value) => {
                if (book.title === value.title) {
                  value.shelf = book.shelf;
                }
              });
            })
          });
          this.setState({ searchBookList });
        }
      });
  }

  close = () => {
    this.getData();
    this.setState({ searchBookList: [] });
  } 

  render() {
    return (
      <div className="app">
        <Route exact path='/'
          render={() => (
            <BookList
              changeReadState={this.changeReadState}
              bookList={this.state.bookList}
            />
          )}
        />
        <Route path='/search'
          render={() => (
            <Search
              close={this.close}
              bookList={this.state.bookList}
              searchBookList={this.state.searchBookList}
              searchBooks={this.searchBooks}
              updateReadState={this.updateReadState}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
