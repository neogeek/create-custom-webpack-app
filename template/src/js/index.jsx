import React from 'react';
import ReactDOM from 'react-dom';

const HelloMessage = ({ name }) => {
    return <div>Hello {name}</div>;
};
ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.querySelector('#root')
);
