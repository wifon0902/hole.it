import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  useEffect(() => {
    const IntervalId = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setTime({
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0,
        });
        return;
      }

      setTime({
        seconds: Math.floor((difference / 1000) % 60),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      });
    }, 1000);

    return () => clearInterval(IntervalId);
  }, [targetDate]);

  return <div>{time.seconds}</div>;
};

export default Countdown;
