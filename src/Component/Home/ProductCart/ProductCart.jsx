import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FakeData from '../../FakeData';
import img1 from '../../../assets/Image/91.jpg'
import './ProductCart.css'

const ProductCart = () => {
const [cart,setCart] = useState(FakeData)

    return (
        <Container>
            <Row>
                {
                    cart.map(cart => {
                        return (
                            <>
                                <Col md={3}>
                                    <div className='cart-area'>
                                        <div className='cart-img'>
                                            <img src={img1}></img>
                                        </div>
                                        <div className='add-btn'>
                                            <button>Add To Cart</button>
                                        </div>
                                        <div className='cart-title'>
                                            <h4>{cart.discraption}</h4>
                                            <p>{cart.name}</p>
                                            <span>{cart.price}</span>
                                        </div>
                                        <div className='view-btn'>
                                            <button>View Details</button>
                                        </div>
                                    </div>
                                    {/* <div className='view-btn'>
                                            <button>View Details</button>
                                    </div> */}
                                   
                                </Col>
                            </>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default ProductCart;