import React from 'react';

import { StyledMessage } from './message.styles';

const Message = ({ greeting = 'Hello', name }) => {
    return (
        <StyledMessage>
            {greeting} {name}
        </StyledMessage>
    );
};

export default Message;
