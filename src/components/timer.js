import React, { useState, useEffect } from "react";

const Timer = ({ time }) => {
  const [minutes, setMinutes] = useState(Number(time));
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let clearMinutes = setInterval(() => {
      let isFull = false;

      setSeconds(prev => {
        if (prev != 0) {
          return prev - 1;
        } else if (prev === 0) {
          isFull = true;
          return 60;
        }
      });

      if (isFull) {
        setMinutes(prev => {
          if (prev !== 0) {
            return prev - 1;
          } else if (prev === 0) {
            clearInterval(clearMinutes);
          }
        });
      }
    }, 1000);

    return () => {
      clearInterval(clearMinutes);
    };
  }, []);

  return (
    <div>
      <span>
        {minutes.toString().length >= 2 ? minutes : "0" + minutes}:
        {seconds.toString().length >= 2 ? seconds : "0" + seconds}
      </span>
    </div>
  );
};

export default Timer;
