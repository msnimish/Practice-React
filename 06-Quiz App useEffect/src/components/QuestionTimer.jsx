import { useState, useEffect } from 'react';

export default function QuestionTimer({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log("Setting Timeout");
        
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("Setting Interval");

        const timer = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <progress id="question-time" value={remainingTime} max={timeout}/>
}