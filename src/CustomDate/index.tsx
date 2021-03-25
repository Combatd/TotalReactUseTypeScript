import * as React from 'react';

function CustomDate() {
    let date: string = "";

    let getDate = () => {
        date = new Date().toDateString();
    }

    return (
        <div>
            {date}
            <button onClick={ getDate }>Get the Date</button>
        </div>
    )
}

export {
    CustomDate
}