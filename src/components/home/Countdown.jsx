import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 126,
    hours: 8,
    minutes: 45,
    seconds: 32
  });

  // Dummy countdown effect just for visual
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrapper">
      <div className="countdown-container">
        <h3 className="countdown-title">MAHOTSAV STARTS IN</h3>
        <div className="countdown-timer">
          <div className="countdown-box">
            <span className="countdown-value">{String(timeLeft.days).padStart(3, '0')}</span>
            <span className="countdown-label">DAYS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-box">
            <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">HOURS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-box">
            <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">MINUTES</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-box">
            <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
