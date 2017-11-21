import React from 'react';
import '../App.css';

function BookItem(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.bookList.map((book) =>
                        book.shelf === props.shelf && (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{ backgroundImage: 'url(' + book.imageLinks.thumbnail + ')', backgroundSize: '100% 100%' }}
                                        ></div>
                                        <div className="book-shelf-changer">
                                            <ul>
                                                <li>Move to...</li>
                                                <li
                                                    onClick={() => { props.changeReadState(book, 'currentlyReading') }}
                                                    className={`book-shelf-changer__${book.shelf === 'currentlyReading' ? 'active' : 'li'}`}
                                                >Currently Reading</li>
                                                <li
                                                    onClick={() => { props.changeReadState(book, 'wantToRead') }}
                                                    className={`book-shelf-changer__${book.shelf === 'wantToRead' ? 'active' : 'li'}`}
                                                >Want to Read</li>
                                                <li
                                                    onClick={() => { props.changeReadState(book, 'read') }}
                                                    className={`book-shelf-changer__${book.shelf === 'read' ? 'active' : 'li'}`}
                                                >Read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    {book.authors.map((author) => (
                                        <div key={author} className="book-authors">{author}</div>
                                    ))}
                                </div>
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    )
}

export default BookItem;
