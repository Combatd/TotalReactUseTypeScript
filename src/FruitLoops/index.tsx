import * as React from 'react';

type FruitLoopsProps = {
    fruit: Array<string>
}

function FruitLoops(props: FruitLoopsProps) {

    return (
        <React.Fragment>
            <ul>
                { props.fruit.map( (value, index) => {
                    return <li key={index} style={ { color: value } } > {value}  </li>
                }) }
            </ul>
        </React.Fragment>
    )
}

export {
    FruitLoops
}