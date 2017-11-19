import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import xyj from './img/xyj.jpg'
import hlm from './img/hlm.jpg';
import shz from './img/shz.jpg';
import sgyy from './img/sgyy.jpg';
import ltxz from './img/ltxz.jpg'
import zztj from './img/zztj.jpg';
import hte from './img/hte.jpg';
import jianai from './img/jianai.jpg';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    booksList: {
      currentlyReading: [
        {
          urlImg: ltxz,
          name: '骆驼祥子',
          author: '老舍'
        }, {
          urlImg: zztj,
          name: '资治通鉴',
          author: '司马光'
        }
      ],
      wantToRead: [
        {
          urlImg: hte,
          name: '黑天鹅',
          author: 'Nassim Nicholas Taleb'
        }, {
          urlImg: jianai,
          name: '简爱',
          author: 'Charlotte Brontë'
        }
      ],
      read: [
        {
          urlImg: xyj,
          name: '西游记',
          author: '吴承恩'
        },
        {
          urlImg: hlm,
          name: '红楼梦',
          author: '曹雪芹'
        },
        {
          urlImg: sgyy,
          name: '三国演义',
          author: '罗贯中'
        },
        {
          urlImg: shz,
          name: '水浒传',
          author: '施耐庵'
        }
      ]
    },

    showSearchPage: false
  }

  render() {
    console.log(this.state.booksList.read[1].urlImg)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.booksList.currentlyReading.map((book) =>(
                        <li>
                        <div className="book">
                          <div className="book-top">
                              <div className="book-cover" style={{ backgroundImage: 'url(' + book.urlImg + ')', backgroundSize: '100% 100%' }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">西游记</div>
                          <div className="book-authors">吴承恩</div>
                        </div>
                      </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.booksList.wantToRead.map((book) => (
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ backgroundImage: 'url(' + book.urlImg + ')', backgroundSize: '100% 100%' }}></div>
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                          <div className="book-title">1776</div>
                          <div className="book-authors">David McCullough</div>
                        </div>
                      </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.booksList.read.map((book) => (
                        <li>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ backgroundImage: 'url(' + book.urlImg + ')', backgroundSize: '100% 100%' }}></div>
                                <div className="book-shelf-changer">
                                  <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                            <div className="book-title">{book.name}</div>
                            <div className="book-authors">{book.author}</div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
