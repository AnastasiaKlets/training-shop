import React from 'react';
import './WomenPart.css';
import imgWom1 from "../../../img/imgWom1.svg";
import imgWom2 from "../../../img/imgWom2.svg";
import imgWom3 from "../../../img/imgWom3.svg";
import imgWom4 from "../../../img/imgWom4.svg";
import imgWom5 from "../../../img/imgWom5.svg";
import imgWom6 from "../../../img/imgWom6.svg";
import imgWom7 from "../../../img/imgWom7.svg";
import imgWom8 from "../../../img/imgWom8.svg";

function WomenPart(props) {
    return (
        <div className='contener womanPartContainer'>
            <div className='contentBtn'>
                <div className='titleText'>WOMEN’S</div>
                <div className='infoBtn'>
                    <div className='text'>NEW ARRIVALS</div>
                    <div className='text'>SPECIALS</div>
                    <div className='text'>BESTSELLERS</div>
                    <div className='text'>MOST VIEWED</div>
                    <div className='text'>FEATURED PRODUCTS</div>
                </div>                
            </div>

            <div className='contentImg1'>
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom1} alt="imgWom1" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div>                
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom2} alt="imgWom2" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div> 
                
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom3} alt="imgWom3" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div> 
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom4} alt="imgWom4" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div> 
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom5} alt="imgWom5" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div> 
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom6} alt="imgWom6" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div> 
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom7} alt="imgWom7" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div>
                <div className='itemContainer'>
                    <div className='imgContainer'><img src={imgWom8} alt="imgWom8" /></div>
                    <div className='info'>
                        <div className="text">Women's tracksuit Q109</div>
                        <div className="subinfo">
                            <div className="price">$ 30.00</div>
                            <div className="rating">ppppp</div>
                        </div> 
                    </div>
                </div>                  
            </div>
            <div >
                <button className='womenBtn'>See All</button>
            </div>            
        </div>
    );
}

export default WomenPart;