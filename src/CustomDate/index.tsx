import * as React from 'react';

function CustomDate() {
    let date: string = new Date().toDateString();
    return (
        <div>
            {date}
            <button>Get the Date</button>
        </div>
    )
}

export {
    CustomDate
}