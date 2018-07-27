import React from 'react';
import './Wrapper.css'

const Wrapper = props => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Wrapper;