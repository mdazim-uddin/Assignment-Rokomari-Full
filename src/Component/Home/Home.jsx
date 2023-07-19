import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Navbar from './Menu/Navbar';
import Slider from './Slider/Slider';
import BookArea from './BookArea/BookArea';
import Book from './Book/Book';
import ProductCart from './ProductCart/ProductCart';




const Home = () => {
    return (
        <div>
            <HeaderTop/>
            <Navbar/>
            <Slider/>
            {/* <BookArea/> */}
            <Book/>
            <ProductCart/>
        </div>
    );
};

export default Home;