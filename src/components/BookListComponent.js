import React from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItemComponent';
import '../App.css';

function BookList(props){
    const bookShelf = ['currentlyReading', 'wantToRead', 'read'];
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookShelf.map((shelf) => (
                    <BookItem
                        key={shelf}
                        shelf={shelf}
                        bookList={props.bookList}
                        changeReadState={props.changeReadState}
                    />
                ))}
            </div>
            <Link
                to='/search'
            >
                <div className="open-search">
                    <span>Add a book</span>
                </div>
            </Link>
        </div>
    )
}

export default BookList;
