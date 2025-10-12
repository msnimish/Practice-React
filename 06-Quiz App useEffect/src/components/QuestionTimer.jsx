import { useState, useEffect } from 'react';

export default function QuestionTimer({timeout, onTimeout, mode}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {

        const timer = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <progress id="question-time" className={mode} value={remainingTime} max={timeout}/>
}