import React from 'react';
import './Navbar.css'
import { Container } from 'react-bootstrap';
const Navbar = () => {
    return (
        <div>
            <Container>
            <nav className='menu'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Service</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                            <ul>
                                <li><a href='#'>Azium</a></li>
                                <li><a href='#'>Azium</a></li>
                                <li><a href='#'>Azium</a></li>
                                <li><a href='#'>Azium</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>Electic</a>
                        </li>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                    </ul>
            </nav>
            </Container>
        </div>
    );
};

export default Navbar;