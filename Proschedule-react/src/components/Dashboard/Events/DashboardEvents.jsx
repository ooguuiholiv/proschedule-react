import React, { useState } from "react";
import "./style.css";
import Header from "../designerBody/Header.jsx";
function DashboardEvents() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [daysOfWeek, setDaysOfWeek] = useState({
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  });

  const [events, setEvents] = useState([]); // State para armazenar os eventos

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  function handleDayToggle(day) {
    setDaysOfWeek((prevDaysOfWeek) => ({
      ...prevDaysOfWeek,
      [day]: !prevDaysOfWeek[day],
    }));
  }

  function handleSubmit() {
    if (!title || !content || !time) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const selectedDays = Object.keys(daysOfWeek).filter(
      (day) => daysOfWeek[day]
    );
    console.log("Dias disponíveis:", selectedDays);

    const newEvent = { title, content, time, selectedDays };
    setEvents([...events, newEvent]);

    setTitle("");
    setContent("");
    setTime("");
    setDaysOfWeek({
      seg: false,
      ter: false,
      qua: false,
      qui: false,
      sex: false,
      sab: false,
      dom: false,
    });
    setShowModal(false);

    alert("Evento criado com sucesso!");
  }
  return (
    <div className="dashboard">
      <Header />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div id="formContainer">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Titulo do Evento"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                name="content"
                id="content"
                cols="20"
                rows="5"
                placeholder="Qual a descrição do evento?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div>
                <ul>
                  <li>
                    <span>SEG</span>
                    <div className="check-slider">
                      <input
                        type="checkbox"
                        id="seg"
                        checked={daysOfWeek.seg}
                        onChange={() => handleDayToggle("seg")}
                      />
                      <label htmlFor="seg" className="switch">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>TER</span>
                    <div className="check-slider">
                      <input
                        type="checkbox"
                        id="ter"
                        checked={daysOfWeek.ter}
                        onChange={() => handleDayToggle("ter")}
                      />
                      <label htmlFor="ter" className="switch">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>QUA</span>
                    <div className="check-slider">
                      <input
                        type="checkbox"
                        id="qua"
                        checked={daysOfWeek.qua}
                        onChange={() => handleDayToggle("qua")}
                      />
                      <label htmlFor="qua" className="switch">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>QUI</span>
                    <div className="check-slider">
                      <input
                        type="checkbox"
                        id="qui"
                        checked={daysOfWeek.qui}
                        onChange={() => handleDayToggle("qui")}
                      />
                      <label htmlFor="qui" className="switch">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>SEX</span>
                    <div className="check-slider">
                      <input
                        type="checkbox"
                        id="sex"
                        checked={daysOfWeek.sex}
                        onChange={() => handleDayToggle("sex")}
                      />
                      <label htmlFor="sex" className="switch">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>SAB</span>
                    <div className="check-slider">
                      <input
                        type="checkbox"
                        id="sab"
                        checked={daysOfWeek.sab}
                        onChange={() => handleDayToggle("sab")}
                      />
                      <label htmlFor="sab" className="switch">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>DOM</span>
                    <div className="check-slider">
                      <input
                        type="checkbox"
                        id="dom"
                        checked={daysOfWeek.dom}
                        onChange={() => handleDayToggle("dom")}
                      />
                      <label htmlFor="dom" className="switch">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </li>
                </ul>
                <select
                  name="time"
                  id="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="" disabled>
                    Selecione o tempo
                  </option>
                  <option value="30 min">30 min</option>
                  <option value="45 min">45 min</option>
                  <option value="60 min">60 min</option>
                  <option value="custom">Custom</option>
                </select>
                {time === "custom" && (
                  <input
                    type="text"
                    id="customTimeInput"
                    name="customTime"
                    placeholder="Insira o tempo desejado"
                  />
                )}
              </div>
              <button id="submitButton" onClick={handleSubmit}>
                Adicionar Evento
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Renderizar os eventos aqui */}
      <div id="events" className="container">
        <button id="showFormButton" onClick={handleShowModal}>
          <img src="../../../src/assets/+.svg" alt="botão de adicionar" />{" "}
        </button>

        {events.map((event, index) => (
          <div key={index} className="appointment">
            <h1>{event.title}</h1>
            <label>{event.time}</label>
            <p>{event.content}</p>

            <p className="cardDays">Dias: {event.selectedDays.join(", ")}</p>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default DashboardEvents;
