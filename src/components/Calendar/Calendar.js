import { Fragment, useCallback, useEffect, useState } from "react";

// import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import * as bootstrap from "bootstrap";

import "../CSS/Calendar.css";

const CalendarEmp = () => {
  const [eventSource, setSource] = useState([]);
  const [employeeAtt, setEmpAtt] = useState([]);
  // const [popover, setPopover] = useState(false);
  // console.log(eventSource);
  // const navigate = useNavigate();
  // console.log(navigate);
  const getEvent = useCallback(async () => {
    await axios.get("/events").then(async (result) => {
      setSource(result.data);
    });
  }, []);
  const getEmployeeAttendtance = useCallback(async () => {
    await axios.get("/employeeAttendance").then(async (result) => {
      setEmpAtt(await result.data);
    });
  }, []);
  useEffect(() => {
    getEvent();
    getEmployeeAttendtance();
  }, [getEvent, getEmployeeAttendtance]);

  const selectDate = (start, end, allDay) => {
    let title = prompt("title");
    if (title) {
      axios
        .post("/addEvent", {
          title: title,
          start: moment(start.startStr).format("Y-MM-DD HH:mm:ss"),
          end: moment(start.endStr).format("Y-MM-DD HH:mm:ss"),
        })
        .then(async (result) => {
          getEvent();
        });
    }
  };

  const popoveInformation = (info) => {
    // console.log(info.event);
    const time = info.event;
    return new bootstrap.Popover(info.el, {
      html: true,
      placement: "right",
      trigger: "hover",
      delay: 200,
      title: info.event.title,
      content: ` <div>
                  <div class="mb-2">Description : ${
                    time.extendedProps.description
                  } </div>
                  <div>Start : ${moment(time.start).format(
                    "MMMM D YYYY, h:mm a"
                  )}</div>
                  <div>End : ${moment(time.end).format(
                    "MMMM D YYYY, h:mm a"
                  )}</div>
                  <div class="mt-2">Author: ${
                    time.extendedProps.department
                  }</div>
               </div>`,
    });
  };

  return (
    <Fragment>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // events={calendarEvents}
          initialView="dayGridMonth"
          selectable={true}
          // dateClick={handleDateClick}
          // select={handleSelectClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          eventSources={[eventSource, employeeAtt]}
          navLinks={true}
          selectMirror={true}
          select={selectDate}
          themeSystem="bootstrap5"
          eventDidMount={popoveInformation}
          // dayMaxEvents={true}
        />
      </div>
      ;
    </Fragment>
  );
};

export default CalendarEmp;
