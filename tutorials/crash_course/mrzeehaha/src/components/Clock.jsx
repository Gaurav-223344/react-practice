
import React, { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("Clock mounted");
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
        console.log("Clock unmounted");
            clearInterval(interval);
        }
    },[time])

    // function showDate(){
    //     setTime(new Date().toString());
    // }

    // setInterval(showDate, 1000);

    return <h1>{time}</h1>;
    // return <div>{new Date.toString()}</div>;
    // return <div>{new Date().toString()}</div>;
    
}

export default Clock;




