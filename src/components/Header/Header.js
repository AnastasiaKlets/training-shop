import React from 'react';
import './Header.css';
import lupa from "../../img/lupa.svg";
import planeta from "../../img/planeta.svg";
import korzina from "../../img/korzina.svg";
import head from "../../img/head.svg";
import body from "../../img/body.svg";
import phone from "../../img/phone.svg";
import location from "../../img/location.svg";
import clock from "../../img/clock.svg";
import facebook from "../../img/faceBook.svg";
import twiter from "../../img/twiter.svg";
import inst from "../../img/inst.svg";
import pint from "../../img/pint.svg";

function Header() {
    return (
        <>
        <div className='topBar'>
            <div className='contInf'>
                <div className='namber'>
                    <div className='contImg'><img src = {phone} alt = 'phone'/></div>
                    <div> +375 29 100 20 30 </div>                
                </div>
                <div className='address'>
                    <div className='contImg'><img src = {location} alt = 'location'/></div>
                    <div> Belarus, Gomel, Lange 17 </div>
                </div>
                <div className='timeWork'>
                    <div className='contImg'><img src = {clock} alt = 'clock'/></div>
                    <div> All week 24/7 </div>
                </div>
            </div>
            <div className='imgSoc'>
                <div className='imgSocItem'><img src = {facebook} alt = 'facebook'/></div> 
                <div className='imgSocItem'><img src = {twiter} alt = 'twiter'/></div> 
                <div className='imgSocItem'><img src = {inst} alt = 'inst'/></div> 
                <div className='imgSocItem'><img src = {pint} alt = 'pint'/></div> 
            </div>
        </div>
        <div className='nav'>            
            <div className='mainBtn'>CleverShop</div>
            <div className='content'>  
                <div className='info'>About Us</div>
                <div className='info'>Women</div>
                <div className='info'>Men</div>
                <div className='info'>Beauty</div>
                <div className='info'>Accessories</div>
                <div className='info'>Blog</div>
                <div className='info'>Contact</div>
            </div>
            <div className='mainImg'>
                <div className='info'><img src = {lupa} alt = 'lupa'/></div>
                <div className='info'><img src = {planeta} alt = 'planeta'/></div>
                <div className='person info'>
                    <img src = {head} alt = 'head'/>
                    <img src = {body} alt = 'body'/>
                </div>
                <div className='info'><img src = {korzina} alt = 'korzina'/></div> 
            </div>
        </div>
        <div className='line'/>
        </>
    );
}

export default Header;