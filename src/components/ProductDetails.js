import React from 'react';

import data from '../DATA/data';

const ProductDetails = (props) => {
    
    let details = data.filter((v) => {
        return v.id === props.match.params.id
    });

    return (
        <>
            {
                console.log(details)
            }
        </>
    )
}

export default ProductDetails;