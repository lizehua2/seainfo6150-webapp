import React from 'react';

const Button = props => {
    return (
        <button onClick={() => alert(props.slug)}>
                show article slug
            </button>
    );
};


export default Button;
