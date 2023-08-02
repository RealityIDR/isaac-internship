import React, { useEffect, useState } from 'react'

function Countdown({expiryDate}) {

    const [timeLeft, setTimeLeft] = useState(expiryDate - Date.now())

    const secondsLeft = Math.floor(timeLeft / 1000)
    const minutesLeft = Math.floor(secondsLeft / 60)
    const hoursLeft = Math.floor(minutesLeft / 24)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(expiryDate - Date.now())
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    if (timeLeft < 0) {
        return <div className="de_countdown">EXPIRED</div>
    }

  return (
    <div className="de_countdown">{hoursLeft}h {minutesLeft % 60}m {secondsLeft % 60}s</div>
  )
}

export default Countdown