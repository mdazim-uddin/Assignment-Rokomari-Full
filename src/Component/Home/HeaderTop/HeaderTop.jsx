import React from 'react';
import logo from '../../../assets/Image/rokomari_logo.png'
import { Col, Container, Image, Row } from 'react-bootstrap';
import {BsSearch,BsCart4} from 'react-icons/bs'
import {GrNotification} from 'react-icons/gr'
import './Header.css'

const HeaderTop = () => {
    return (
        <div className='hd-top-area'>
        <Container>
          <Row>
                <Col md={2}>
                        <Image src={logo} fluid />
                </Col>
                <Col md={6}>
                   <div className='Hd-tp-search-area'>
                   <input className='seach-input' type="text" placeholder="Search.."/>
                    <div className='headerTop-searchbar'>
                        <BsSearch/>
                    </div>
                   </div>
                </Col>
                <Col md={2}>
                    <GrNotification className='notification'/>
                    <BsCart4 className='cart-icon'/>
                </Col>
                <Col>
                   <div className='src-btn'>
                   <button className='src-btn1'>Login</button>
                   </div>
                </Col>
          </Row>
        </Container>
        </div>
          
        
    );
};

export default HeaderTop;