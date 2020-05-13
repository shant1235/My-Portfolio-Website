import React from 'react';

import BuckS from '../assets/images/BuckS.png'
import BuckB from '../assets/images/BuckB.png'

function BuckPage(props){
    return (
        <div>
            <img className="sch2-image" src={BuckS} alt = {BuckS} />
            <img className="brd2-image" src={BuckB} alt = {BuckB} />
        </div>
    );
    
}
export default BuckPage;