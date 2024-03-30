import React, { useState, useEffect } from "react";
import MeetingScheduled from "./MeetingScheduledCard";
import Header from "./designerBody/Header.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [eventsSchedule, setEventsSchedule] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:3000/appointments");
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await response.json();
        console.log("Appointments:", data); // Verifique os dados recebidos
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    const fetchEventsSchedule = async () => {
      try {
        const response = await fetch("http://localhost:3000/eventsSchedule");
        if (!response.ok) {
          throw new Error("Failed to fetch eventsSchedule");
        }
        const data = await response.json();
        console.log("Events Schedule:", data); // Verifique os dados recebidos
        setEventsSchedule(data);
      } catch (error) {
        console.error("Error fetching eventsSchedule:", error);
      }
    };

    const fetchMeetingsScheduled = () => {
      const meetings = eventsSchedule.map((event, index) => (
        <div className="meeting-card" key={index}>
          <MeetingScheduled
            key={index}
            meeting={{
              scheduleEvent: event.scheduleEvent,
              hours: event.hours,
              name: event.name,
              day: event.day,
            }}
          />
          <p className="data">{event.day}</p>
        </div>
      ));
      setEventsSchedule(meetings);
    };
    fetchAppointments();
    fetchMeetingsScheduled();
    fetchEventsSchedule();
  }, []);

  // Função para obter a data do último atendimento
  const getLastAppointmentDate = (appointments) => {
    if (appointments.length === 0) return null;
    const lastAppointmentDate = new Date(
      Math.max(...appointments.map((appointment) => new Date(appointment.date)))
    );
    const monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const month = monthNames[lastAppointmentDate.getMonth()];
    const year = lastAppointmentDate.getFullYear();
    return `${month} de ${year}`;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [meetingsPerPage, setMeetingsPerPage] = useState(3);

  const indexOfLastMeeting = currentPage * meetingsPerPage;
  const indexOfFirstMeeting = indexOfLastMeeting - meetingsPerPage;
  const currentMeetings = eventsSchedule.slice(
    indexOfFirstMeeting,
    indexOfLastMeeting
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(eventsSchedule.length / meetingsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <div className="cards">
          <div className="months-agenda">
            <p className="agenda-header">Agenda do mês</p>
            {/* Card de Atendimentos Realizados */}
            <div className="agenda-cards-container">
              <div className="agenda-card made">
                <span className="circle-green"></span>
                <h3>Atendimentos Realizados</h3>
                <p>Você efetuou {appointments.length} atendimento(s)</p>
                <p className="data">
                  <img src="../src/assets/calendar3.svg" alt="" />
                  {getLastAppointmentDate(appointments)}
                </p>
              </div>

              {/* Card de Atendimentos Cancelados */}
              <div className="agenda-card canceled">
                <span className="circle-red"></span>
                <h3>Atendimentos Cancelados</h3>
                <p>Você cancelou {appointments.length} atendimento(s)</p>
                <p className="data">
                  <img src="../src/assets/calendar3.svg" alt="" />
                  {getLastAppointmentDate(appointments)}
                </p>
              </div>

              {/* Card de Atendimentos Adiados */}
              <div className="agenda-card postponed">
                <span className="circle-blueLight"></span>
                <h3>Atendimentos Adiados</h3>
                <p>Você adiou {appointments.length} atendimento(s)</p>
                <p className="data">
                  <img src="../src/assets/calendar3.svg" alt="" />
                  {getLastAppointmentDate(appointments)}
                </p>
              </div>
            </div>
          </div>
          {/* Card de Reuniões Marcadas */}
          <div className="meetings">
            <p className="meetings-header">Reuniões Marcadas</p>
            <div className="meetings-cards-container">
              {currentMeetings.map((event, index) => (
                <div className="agenda-card" key={index}>
                  <p>
                    <strong>{event.scheduleEvent}</strong> -{event.hours}
                  </p>
                  <p>
                    <strong>Reunião solicitada por: </strong>
                    {event.name}
                  </p>
                  <p></p>
                  <p>
                    <img src="../src/assets/calendar3.svg" alt="" />
                    {event.day}
                  </p>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button onClick={prevPage}>
                {" "}
                <img src="../src/assets/arrow_back.svg" alt="" />
              </button>
              {Array.from(
                { length: Math.ceil(eventsSchedule.length / meetingsPerPage) },
                (_, i) => (
                  <button key={i} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                )
              )}
              <button onClick={nextPage}>
                {" "}
                <img src="../src/assets/arrow_forward.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
