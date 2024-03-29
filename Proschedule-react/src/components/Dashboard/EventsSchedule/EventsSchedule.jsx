import React, { useState, useEffect } from "react";
import Header from "../designerBody/Header.jsx";
import { Container, Content } from "./styleEventsSchedule"; // Importe os estilos do arquivo separado

export const EventsPage = () => {
  const [allEvents, setAllEvents] = useState([
    {
      name: "Erick venites",
      scheduleEvent: "Reunião 45min",
      day: "30/03/2024",
      hours: "14:00",
      status: "Confirmed",
    },
    {
      name: "Erick venites",
      scheduleEvent: "Reunião 45min",
      day: "30/03/2024",
      hours: "14:00",
      status: "PendingApproval",
    },
    {
      name: "Erick venites",
      scheduleEvent: "Reunião 45min",
      day: "20/03/2024",
      hours: "14:00",
      status: "PendingApproval",
    },
  ]);

  const [events, setEvents] = useState(allEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(10);

  useEffect(() => {
    checkPastEvents();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [events]);

  useEffect(() => {
    filterConfirmedEvents(); // Esta linha foi adicionada
  }, []); // Executar apenas uma vez quando o componente é montado

  const renderEvents = (filteredEvents) => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = Math.min(
      startIndex + eventsPerPage,
      filteredEvents.length
    );
    const eventsOnPage = filteredEvents.slice(startIndex, endIndex);

    return eventsOnPage.map((event, index) => (
      <tr key={index}>
        <td>{event.name}</td>
        <td>{event.scheduleEvent}</td>
        <td>{event.day}</td>
        <td>{event.hours}</td>
        <td>
          {event.status === "Confirmed" && (
            <span style={{ color: "green" }}>Confirmado</span>
          )}
          {event.status === "PendingApproval" && (
            <>
              <button
                className="button-confirm"
                onClick={() => confirmEvent(event)}
              >
                Confirmar
              </button>
              <button
                className="button-denied"
                onClick={() => denyEvent(event)}
              >
                Negar
              </button>
            </>
          )}
          {event.status === "Past" || event.status === "Denied" ? (
            <span style={{ color: event.status === "Past" ? "orange" : "red" }}>
              {event.status === "Past" ? "Prazo ultrapassado" : "Negado"}
            </span>
          ) : null}
        </td>
      </tr>
    ));
  };

  const confirmEvent = (eventToConfirm) => {
    const updatedEvents = allEvents.map((event) =>
      event === eventToConfirm ? { ...event, status: "Confirmed" } : event
    );
    setAllEvents(updatedEvents);
    setEvents(updatedEvents.filter((event) => event.status === "Confirmed"));
  };

  const denyEvent = (eventToDeny) => {
    const updatedEvents = allEvents.map((event) =>
      event === eventToDeny ? { ...event, status: "Denied" } : event
    );
    setAllEvents(updatedEvents);
    setEvents(
      updatedEvents.filter(
        (event) =>
          event.status === "PendingApproval" ||
          event.status === "Past" ||
          event.status === "Denied"
      )
    );
  };

  const filterConfirmedEvents = () => {
    setEvents(allEvents.filter((event) => event.status === "Confirmed"));
  };

  const filterPendingApprovalEvents = () => {
    setEvents(allEvents.filter((event) => event.status === "PendingApproval"));
  };

  const filterPastEvents = () => {
    setEvents(
      allEvents.filter(
        (event) => event.status === "Past" || event.status === "Denied"
      )
    );
  };

  const checkPastEvents = () => {
    const now = new Date();
    const updatedEvents = allEvents.map((event) => {
      const [day, month, year] = event.day.split("/");
      const [hours, minutes] = event.hours.split(":");
      const eventDateTime = new Date(year, month - 1, day, hours, minutes);
      if (
        eventDateTime < now &&
        event.status !== "Past" &&
        event.status !== "Denied"
      ) {
        return { ...event, status: "Past" };
      }
      return event;
    });
    setAllEvents(updatedEvents);
  };

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className="pagination-button"
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <Container>
        <Header />
        <Content>
          <div className="content-menu">
            <button onClick={filterConfirmedEvents}>Confirmed</button>
            <button onClick={filterPendingApprovalEvents}>
              Pending approval
            </button>
            <button onClick={filterPastEvents}>Past</button>
          </div>

          <table>
            <div className="thead">
              <th>Nome</th>
              <th>Evento</th>
              <th>Dia</th>
              <th>Hora</th>
              <th>Status</th>
            </div>
            <div id="events">{renderEvents(events)}</div>
            <select
              id="eventsPerPage"
              value={eventsPerPage}
              onChange={(e) => setEventsPerPage(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </table>

          <div id="pagination">{paginationButtons}</div>
        </Content>
      </Container>
    </>
  );
};

export default EventsPage;
