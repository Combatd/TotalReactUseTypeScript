import * as React from 'react';

function Header(props) {
    return (
        <h1 className="primary-header" >{props.text}</h1>
    )
}

export default Header;