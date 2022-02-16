import React from 'react';
import './InfAfterBaner.css';
import truck from "../../../img/truck.svg";
import update from "../../../img/update.svg";
import brauser from "../../../img/brauser.svg";

function InfAfterBaner(props) {
    return (
        <div className='contener'>
            <div className='contentTtuc content'>
                <div className='imgTruck img'> <img src = {truck} alt = 'truck'/> </div>                 
                <div className='textTruck '> 
                    <div className='title'> FREE SHIPPING </div>  
                    <div><div className='text'> On all UA order or order above $100 </div></div>                
                </div> 
            </div>
            <div className='contentUpdate content'>
                <div className='imgUpdate img'> <img src = {update} alt = 'update'/> </div>
                <div className='textUpdate'>   
                    <div className='title'> 30 DAYS RETURN </div>
                    <div><div className='text'> Simply return it within 30 days for an exchange </div></div>
                </div> 
            </div>
            <div className='contentBrauser content'>
                <div className='imgBrauser img'> <img src = {brauser} alt = 'brauser'/> </div> 
                <div className='textBrauser'>
                    <div className='title'> SUPPORT 24/7 </div>
                    <div className='text'> Contact us 24 hours a day, 7 days a week </div>
                </div>
            </div>
        </div>
    );
}

export default InfAfterBaner;