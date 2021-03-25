import * as React from 'react';

function CustomDate() {
    let [date, setDate] = React.useState(""); 
    let [time, setTime] = React.useState("");

    let getDate = () => {
        setDate(new Date().toDateString());
    }
    let getTime = function() {
        setTime(new Date().toTimeString());
    }

    let handleGetTimeDate = (e) => {
        getDate();
        getTime();
    } 

    return (
        <div>
            {date}
            <br/>
            {time}
            <br/>
            <button onClick={ handleGetTimeDate }>Get the Date and time</button>
        </div>
    )
}

export {
    CustomDate
}