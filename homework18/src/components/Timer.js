import React, {useState, useEffect} from "react";

function Timer({startTime, step, autostart}) {
    let [lineWidth,setLineWidth] = useState(100);
    const [time,setTime] = useState(startTime);
    const [status, setStatus] = useState(autostart);

    useEffect(()=>{
        let interval;
        if(status && time > 0 ){
            setLineWidth(lineWidth - lineWidth / time * step / 1000);
            interval = setInterval(()=>{
                setTime((prev)=> {
                        return prev - step/1000
                    }
                )
            },step)
        }
        else{
            clearInterval(interval)
        }
        if(time === 0){
            setStatus(false);
            setLineWidth(100);
            setTime(startTime);
        }
        return() => clearInterval(interval)
    },[status , time, step]);
    
    function resetTimerHandler() {
        setLineWidth(100);
        setTime(startTime);
        setStatus(true)
    }
    
    function timerToggleHandler() {
        setStatus(!status);
    }
    
    
    
    return(
        <div className="timer-container">
            <div className="timer-controls">
                <button className="timer-toggle" onClick={timerToggleHandler}>{status ? "stop" : "start"}</button>
                <button className="timer-reset" onClick={resetTimerHandler}>Reset</button>
            </div>
            <div className="timer-wrapper">
                <div className="timer-line" style={{width: lineWidth + '%'}}></div>
            </div>            
        </div>
    );
}

export default Timer;
