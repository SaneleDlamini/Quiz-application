import { useState, useEffect } from 'react'

const QustionTimer = ({timeout, onTimeout}) => {

  const [ remainingTime, setRemainingTime ] = useState(timeout)

  useEffect(() => {
    const timer = setTimeout(()=> {
        onTimeout()
    }, timeout)

    return () => {
        clearTimeout(timer)
    }
  },[timeout, onTimeout]);

  useEffect(()=> {
    const interval = setInterval(()=>{
        setRemainingTime(prevState => prevState - 100)
    }, 100);

    return () => {
        clearInterval(interval)
    }
  })

  return (
    <div>
        <progress id='progress-bar' max={timeout} value={remainingTime} />
    </div>
  )
}

export default QustionTimer