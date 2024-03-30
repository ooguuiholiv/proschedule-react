import React, { useState, useEffect } from "react";
import Header from "../designerBody/Header.jsx";
import { Content } from "./styleEventsSchedule";

export const EventsPage = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("Confirmed");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/eventsSchedule");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        console.log("events", data);
        setAllEvents(data);
        filterConfirmedEvents(data); // Inicializar eventos filtrados por "Confirmed"
        checkPastEvents(data); // Chamar a função checkPastEvents com os dados recuperados
      } catch (error) {
        console.log("error fetching events", error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [events]);

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
    filterConfirmedEvents(updatedEvents); // Atualizar eventos confirmados
  };

  const denyEvent = (eventToDeny) => {
    const updatedEvents = allEvents.map((event) =>
      event === eventToDeny ? { ...event, status: "Denied" } : event
    );
    setAllEvents(updatedEvents);

    if (activeTab === "Past") {
      // Se a aba ativa for "Past", filtrar eventos confirmados e negados
      setEvents(
        updatedEvents.filter(
          (event) =>
            event.status === "Confirmed" ||
            event.status === "Denied" ||
            event.status === "Past"
        )
      );
    } else {
      // Caso contrário, filtrar apenas eventos confirmados
      filterConfirmedEvents(updatedEvents);
    }
  };

  const filterConfirmedEvents = (eventsData) => {
    const filteredEvents = eventsData.filter(
      (event) => event.status === "Confirmed"
    );
    setEvents(filteredEvents);
    setActiveTab("Confirmed");
  };

  const filterPendingApprovalEvents = () => {
    const filteredEvents = allEvents.filter(
      (event) => event.status === "PendingApproval"
    );
    setEvents(filteredEvents);
    setActiveTab("PendingApproval");
  };

  const filterPastEvents = () => {
    const filteredEvents = allEvents.filter(
      (event) =>
        event.status === "Past" ||
        event.status === "Denied" ||
        event.status === "Confirmed"
    );
    setEvents(filteredEvents);
    setActiveTab("Past");
  };

  const checkPastEvents = (eventsData) => {
    const now = new Date();
    const updatedEvents = eventsData.map((event) => {
      const [day, month, year] = event.day.split("/");
      const [hours, minutes] = event.hours.split(":");
      const dayInt = parseInt(day);
      const monthInt = parseInt(month) - 1;
      const yearInt = parseInt(year);
      const hoursInt = parseInt(hours);
      const minutesInt = parseInt(minutes);
      const eventDateTime = new Date(
        yearInt,
        monthInt,
        dayInt,
        hoursInt,
        minutesInt
      );
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

    if (activeTab === "Past") {
      // Se a aba ativa for "Past", filtrar eventos confirmados e negados
      setEvents(
        updatedEvents.filter(
          (event) =>
            event.status === "Confirmed" ||
            event.status === "Denied" ||
            event.status === "Past"
        )
      );
    }
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
          <thead>
            <tr>
              <th>Nome</th>
              <th>Evento</th>
              <th>Dia</th>
              <th>Hora</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="events">{renderEvents(events)}</tbody>
        </table>

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

        <div id="pagination">{paginationButtons}</div>
      </Content>
    </>
  );
};

export default EventsPage;
