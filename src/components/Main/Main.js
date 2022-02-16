import React from 'react';
import Baner from './Baner/Baner';
import './Main.css';
import InfAfterBaner from './InfAfterBaner/InfAfterBaner';
import WomenPart from './WomenPart/WomenPart';
import MenPart from './MenPart/MenPart';
import InfOfColection from './InfOfCollection/InfOfCollection';
import Sales from './Sales/Sales';
import AnotherInf from './AnotherInf/AnotherInf';


function Main(props) {
    return (
        <>           
            <div className='contenMain'>
                <Baner/> 
                <InfAfterBaner/>
                <WomenPart/> 
            </div>
                     

        </>
    );
}

export default Main;