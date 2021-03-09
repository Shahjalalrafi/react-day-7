import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler("child")} >click me</button>
        </div>
    );
};

export default ChildComponent;