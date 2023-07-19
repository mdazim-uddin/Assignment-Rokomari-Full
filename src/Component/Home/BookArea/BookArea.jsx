import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FakeData from '../../FakeData';
import Book from '../Book/Book';

const BookArea = () => {
const [book,setBook] = useState(FakeData)

    return (
        <Container>
            {
            book.map( bk=> <Book pd={bk}></Book>)
            }
        </Container>
    );
};

export default BookArea;