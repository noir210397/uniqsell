import { useState } from "react";

const Limitedoffer = () => {
  const endDate = new Date("december 30 2023").getTime();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const timeFunction = () => {
    let startDate = new Date().getTime();
    let difference = endDate - startDate;
    if (difference <= 0) {
      clearInterval(countdownTimer);
      setDay("00");
      setHour("00");
      setMinute("00");
      setSecond("00");
    }
    let days = Math.floor(difference / (60 * 60 * 1000 * 24));
    let hours = Math.floor(
      (difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    setDay(days);
    setHour(hours);
    setMinute(minutes);
    setSecond(seconds);
  };
  const countdownTimer = setInterval(timeFunction, 1000);
  return (
    <div className="max-w-sm p-2">
      <p>Limited Offers</p>
      <p>Quality Armchair</p>
      <div className="flex my-2">
        <div className="flex flex-col  me-2">
          <p className="text-xl font-extrabold">{day}</p>
          <p>Days</p>
        </div>
        <div className="h-full flex justify-center items-center text-lg font-extrabold">
          :
        </div>
        <div className="flex flex-col items-center justify-center mx-2">
          <p className="text-xl font-extrabold">{hour}</p>
          <p>Hours</p>
        </div>
        <div className="h-full flex justify-center items-center text-lg font-extrabold">
          :
        </div>
        <div className="flex flex-col items-center justify-center mx-2">
          <p className="text-xl font-extrabold">{minute}</p>
          <p>Minutes</p>
        </div>
        <div className="h-full flex justify-center items-center text-lg font-extrabold">
          :
        </div>
        <div className="flex flex-col items-center justify-center mx-2">
          <p className="text-xl font-extrabold">{second}</p>
          <p>Seconds</p>
        </div>
      </div>
      <button className="capitalize text-lg px-2 py-1 bg-white text-blue-950  rounded-lg">
        visit store
      </button>
    </div>
  );
};

export default Limitedoffer;
