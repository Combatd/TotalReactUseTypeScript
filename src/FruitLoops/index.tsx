import * as React from 'react';

function FruitLoops() {
    let fruit: String[] = ['red', 'green', 'blue', 'yellow'];

    return (
        <React.Fragment>
            <ul>
                { fruit.map( (value, index) => {
                    return <li key={index}> {value}  </li>
                }) }
            </ul>
        </React.Fragment>
    )
}

export {
    FruitLoops
}