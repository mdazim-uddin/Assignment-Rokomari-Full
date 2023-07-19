import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import './Book.css'
import FakeData from '../../FakeData';
const Book = () => {
const [pd,setPd] = useState(FakeData)
    return (
        <Container>
                  <div className='book-area'>
 <div className='box-1'>
<div className='title'>
 <h3>Boook</h3>
 </div>
 <div className='a'>
{
 pd.map((p ,index )=> {
 return (
<>
 <article key={index} className="b">
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
</article>
 </>
 );
 })}
</div>
</div>
<div className='box-1'>
<div className='title'>
 <h3>Boook</h3>
 </div>
 <div className='a'>
{
 pd.map((p ,index )=> {
 return (
<>
 <article key={index} className="b">
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
</article>
 </>
 );
 })}
</div>
</div>
<div className='box-1'>
<div className='title'>
 <h3>Boook</h3>
 </div>
 <div className='a'>
{
 pd.map((p ,index )=> {
 return (
<>
 <article key={index} className="b">
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
<div className='boxc1'>
<div className='img'>
<img src={p.image1}></img>
</div>
 <div className='w'>
 <h1 className='h'>{p.titlee}</h1>
 <p className='p'>{p.paragrap1}</p>
 </div>
 <div className='y'>
    <h4>icon</h4>
 </div>
</div>
</article>
 </>
 );
 })}
</div>
</div>

                        

                        
                    
                  </div>
        </Container>
    );
};

export default Book;