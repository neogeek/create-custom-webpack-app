import React from 'react';

const Message = ({ greeting = 'Hello', name }) => {
    return (
        <div>
            {greeting} {name}
        </div>
    );
};

export default Message;
