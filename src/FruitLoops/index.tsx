import * as React from 'react';

function FruitLoops() {
    let fruit: Array<string> = ["red", "green", "blue", "yellow"];

    return (
        <React.Fragment>
            <ul>
                { fruit.map( (value, index) => {
                    return <li key={index} style={ { color: value } } > {value}  </li>
                }) }
            </ul>
        </React.Fragment>
    )
}

export {
    FruitLoops
}