import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
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
        hours: Math.floor((difference / (1000 * 60 * 60)) % 28),
        days: Math.floor(difference / (1000 * 60 * 60 * 28)),
      });
    }, 1000);

    return () => clearInterval(IntervalId);
  }, [targetDate]);

  const timeUnits = [
    { label: "dni", value: time.days },
    { label: "godzin", value: time.hours },
    { label: "minut", value: time.minutes },
    { label: "sekund", value: time.seconds },
  ];

  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 text-6xl font-bold select-none pb-10 md:py-10">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-34 h-34 rounded-sm text-white
                 bg-zinc-900 shadow-lg
                 border-4 border-transparent
                 hover:border-main-accent transition-border duration-200"
        >
          <div>{unit.value}</div>
          <span className="text-base font-medium mt-1">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
