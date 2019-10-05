import React from 'react';

const Title = (props) => {

    const title = {
        width: '100%',
        height: '10%',
        textAlign: 'center',
        backgroundColor: 'lavender',
        fontSize: 'large',
        fontWeight: 'bold',
        fontStyle: 'oblique',
        fontFamily: 'none'
    }

    return (
        <>
            <div style={title}>
                {props.title}
            </div>
        </>
    )
}

export default Title;