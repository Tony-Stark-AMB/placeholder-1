import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60), // Секунди не відображаються у Figma, але для логіки вони потрібні
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasCountdownEnded, setHasCountdownEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.values(newTimeLeft).every(val => val === 0)) {
        setHasCountdownEnded(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Функція для відображення двозначних чисел у вигляді окремих цифр
  const renderTwoDigitNumber = (num) => {
    const paddedNum = num < 10 ? `0${num}` : `${num}`;
    return (
      <div className="digit-block-wrap">
        <span className="digit-block" style={paddedNum.charAt(0) == 1 ? {justifyContent: "flex-start"} : {justifyContent: "center"}}>{paddedNum.charAt(0)}</span>
        <span className="digit-block" style={paddedNum.charAt(1) == 1 ? {justifyContent: "flex-start"} : {justifyContent: "center"}}>{paddedNum.charAt(1)}</span>
      </div>
    );
  };

  return (
    <div className="countdown-container">
      {hasCountdownEnded ? (
        <div className="countdown-ended">
          <h2>Ми вже тут!</h2>
          <p>Ласкаво просимо на оновлений сайт!</p>
        </div>
      ) : (
        <div className="countdown-timer">
          <div className="countdown-group">
            {renderTwoDigitNumber(timeLeft.days)}
            <span className="countdown-label">Днів</span>
          </div>
          {/* Розділювач, якщо потрібен (на Figma його немає між днями/годинами) */}
          {/* <div className="separator">:</div> */}
          <div className="countdown-group">
            {renderTwoDigitNumber(timeLeft.hours)}
            <span className="countdown-label">Годин</span>
          </div>
          {/* <div className="separator">:</div> */}
          <div className="countdown-group">
            {renderTwoDigitNumber(timeLeft.minutes)}
            <span className="countdown-label">Хвилин</span>
          </div>
          {/* Згідно Figma, секунд немає, але якщо б були, то так: */}
          {/* <div className="countdown-group">
            {renderTwoDigitNumber(timeLeft.seconds)}
            <span className="countdown-label">Секунд</span>
          </div> */}
         
        </div>
      )}
    </div>
  );
};

export default Countdown;