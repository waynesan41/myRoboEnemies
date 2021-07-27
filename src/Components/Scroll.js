import React from 'react';

const Scroll = (propsChild) => {
    console.log(propsChild);
    return (
        <div style={{overflowY: 'Scroll', border: '4px solid white', height: '500px'}}>
            {propsChild.children}
        </div>
    );
}

export default Scroll;