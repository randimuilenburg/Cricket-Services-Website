import Calendar from "react-calendar";
import { useState } from "react";

const ApptCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} selectRange={true} />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Today's date:</span> {date.toDateString()}
        </p>
      )}
    </div>
  );
};

export default ApptCalendar;
