import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center text-white">
      <div>
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-sm uppercase">Dni</div>
      </div>
      <div>
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm uppercase">Godziny</div>
      </div>
      <div>
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm uppercase">Minuty</div>
      </div>
      <div>
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm uppercase">Sekundy</div>
      </div>
    </div>
  );
};

export default Countdown;
