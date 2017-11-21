import '../App.css';
import React from 'react';
import { Debounce } from 'react-throttle';
import { Link } from 'react-router-dom';

function SearchComponent(props) {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    onClick={props.close}
                    to='/'
                    className="close-search"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <Debounce time="200" handler="onChange">
                        <input
                            type="text"
                            onChange={(event) => { props.searchBooks(event.target.value) }}
                            placeholder="Search by title or author"
                        />
                    </Debounce>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {props.searchBookList.map((searchBook, index) => (
                        <li key={searchBook.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ backgroundImage: 'url(' + searchBook.imageLinks.thumbnail + ')', backgroundSize: '100% 100%' }}></div>
                                    <div className="book-shelf-changer">
                                        <ul>
                                            <li>Move to...</li>
                                            <li onClick={() => {
                                                props.updateReadState(index, searchBook, 'currentlyReading') }}
                                                className={`book-shelf-changer__${searchBook.shelf === 'currentlyReading' ? 'active' : 'li'}`}
                                                >Currently Reading</li>
                                            <li onClick={() => {
                                                props.updateReadState(index, searchBook, 'wantToRead') }}
                                                className={`book-shelf-changer__${searchBook.shelf === 'wantToRead' ? 'active' : 'li'}`}
                                                >Want to Read</li>
                                            <li
                                            onClick={() => { props.updateReadState(index, searchBook, 'read') }}
                                                className={`book-shelf-changer__${searchBook.shelf === 'read' ? 'active' : 'li'}`}
                                            >Read</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="book-title">{searchBook.title}</div>
                                {searchBook.authors && searchBook.authors.map((auth) => (
                                    <div key={auth} className="book-authors">{auth}</div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default SearchComponent;
