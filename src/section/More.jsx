// import React, { useState } from 'react';
// import { Inside, Popularproduct } from '.';
// import { AllBUYDetails } from '../constants/index2';
// import { allproducts } from '../constants';

// const More = () => {
//     const [first, setFirst] = useState(false);
   
//      const [Forbuy, setForbuy] = useState(AllBUYDetails);
//     const [Allinside, setAllinside] = useState(null);
//     const [testBuyNow, settestBuyNow] = useState(null);


//     const handlechange = () => {
        
//         setFirst(prev => !prev);

       

      
//     };
    
//     return (
//         <div>
//             {/* {first ? (
//                 <Inside closePopup={handlechange} />
//             ) : (
//                 <Popularproduct pass={handlechange} />
//             )} */}
//             {first ? Forbuy.map((Element, index) => (
//     <Inside key={index}  id={index} Name={Element.Name} price={Element.price} discount={Element.discount} afterDiscount={Element.afterDiscount} Data={Element.Data}     closePopup={handlechange}/>
// )) : <Popularproduct pass={handlechange} />}

//         </div>
//     );
// };

// export default More;


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { Inside, Popularproduct } from '.';
// import { AllBUYDetails } from '../constants/index2';
// import { allproducts } from '../constants';
// import { star } from '../assets/icons';

// const More = () => {
//     const [first, setFirst] = useState(false);
//     const [Forbuy, setForbuy] = useState(AllBUYDetails);
//     const [Allinside, setAllinside] = useState(null);
//     const [testBuyNow, settestBuyNow] = useState(null);

//     const handlechange = (arg) => {
//         setFirst(prev => !prev);
// console.log(arg)
//         // Ensure Allinside is not null before filtering
 
//     };
    
//     return (
//         <div>
//             {first ? 
//                 Forbuy.map((Element, index) => (
//                     <Inside 
//                         key={index}  
//                         id={index} 
//                         Name={Element.Name} 
//                         price={Element.price} 
//                         discount={Element.discount} 
//                         afterDiscount={Element.afterDiscount} 
//                         Data={Element.Data}     
//                         closePopup={() => handlechange(index)} // Pass index to handlechange
//                     />
//                 )) 
//                 : 
//                 <Popularproduct pass={() => handlechange(index)} /> // Pass null or any value you want as index
//             }
//         </div>
//     );
// };

// export default More;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Inside, Popularproduct } from '.';
import { AllBUYDetails } from '../constants/index2';
import { allproducts } from '../constants';
import { star } from '../assets/icons';

const More = () => {
    const [first, setFirst] = useState(false);
    const [Forbuy, setForbuy] = useState(AllBUYDetails);
    const [Allinside, setAllinside] = useState(null);
    const [testBuyNow, settestBuyNow] = useState(null);

    const handlechange = (arg) => {
        
        setFirst(prev => !prev);
        console.log(AllBUYDetails[0].id);
        // Ensure Allinside is not null before filtering
    };
    
    return (
        <div>
            {first ? 
                Forbuy.map((Element, index) => (
                    <Inside 
                        key={index}  
                        id={index} 
                        Name={Element.Name} 
                        price={Element.price} 
                        discount={Element.discount} 
                        afterDiscount={Element.afterDiscount} 
                        Data={Element.Data}     
            checking={Element.id}
                        closePopup={handlechange} // Pass index to handlechange
                    />
                )) 
                : 
                <Popularproduct pass={ handlechange} /> // Pass null or any value you want as index
            }
        </div>
    );
};

export default More;
