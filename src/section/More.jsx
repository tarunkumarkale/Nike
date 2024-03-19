import React, { useState } from 'react';
import { Inside, Popularproduct } from '.';
import { AllBUYDetails } from '../constants/index2';
import { allproducts } from '../constants';

const More = () => {
    const [first, setFirst] = useState(false);
    const [Forbuy, setForbuy] = useState(AllBUYDetails);
    const [Allinside, setAllinside] = useState(null);

    const handlechange = () => {
        console.log(AllBUYDetails[0].rate);
        setFirst(prev => !prev);
        
        // setAllinside(
        //     Forbuy.map((Element, index) => (
        //         <Inside key={index} Name={Element.Name} />
        //     ))
        // );
        
        console.log(AllBUYDetails[0].Name);
    };

    return (
        <div>
            {/* {first ? (
                <Inside closePopup={handlechange} />
            ) : (
                <Popularproduct pass={handlechange} />
            )} */}
            {first ? Forbuy.map((Element, index) => (
    <Inside key={index} Name={Element.Name} closePopup={handlechange}/>
)) : <Popularproduct pass={handlechange} />}

        </div>
    );
};

export default More;
