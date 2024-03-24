import React from "react";
import MeetingScheduled from "./MeetingScheduledCard";
import Header from "./designerBody/Header.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  // Simulando dados de atendimentos e reuniões pendentes
  const appointments = [
    { status: "Realizado", title: "Consulta médica", date: "2024-03-10" },
    { status: "Cancelado", title: "Reunião de equipe", date: "2024-03-12" },
    { status: "Adiado", title: "Apresentação de vendas", date: "2024-03-15" },
    // Adicione mais atendimentos conforme necessário
  ];

  // Filtrando os atendimentos por status
  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Realizado"
  );
  const canceledAppointments = appointments.filter(
    (appointment) => appointment.status === "Cancelado"
  );
  const postponedAppointments = appointments.filter(
    (appointment) => appointment.status === "Adiado"
  );

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

  // Simulando dados de reuniões marcadas
  const meetingsScheduled = [
    {
      name: "Brainstorming",
      duration: "1 hora",
      requestedBy: "João Silva",
      dateRequested: "2024-03-20",
    },
    {
      name: "Apresentação de projeto",
      duration: "2 horas",
      requestedBy: "Maria Santos",
      dateRequested: "2024-03-25",
    },
    {
      name: "Apresentação de projeto",
      duration: "2 horas",
      requestedBy: "Maria Santos",
      dateRequested: "2024-03-25",
    },
    // Adicione mais reuniões conforme necessário
  ];

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
                <p>Você efetuou {completedAppointments.length} atendimento(s)</p>
                <p className="data">
                  <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" alt="calendar icon" />{" "}
                  {getLastAppointmentDate(completedAppointments)}
                </p>
              </div>

              {/* Card de Atendimentos Cancelados */}
              <div className="agenda-card canceled">
                <span className="circle-red"></span>
                <h3>Atendimentos Cancelados</h3>
                <p>Você cancelou {canceledAppointments.length} atendimento(s)</p>
                <p className="data">
                  <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" alt="calendar icon" />{" "}
                  {getLastAppointmentDate(canceledAppointments)}
                </p>
              </div>

              {/* Card de Atendimentos Adiados */}
              <div className="agenda-card postponed">
                <span className="circle-blueLight"></span>
                <h3>Atendimentos Adiados</h3>
                <p>Você adiou {postponedAppointments.length} atendimento(s)</p>
                <p className="data">
                  <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" alt="calendar icon" />{" "}
                  {getLastAppointmentDate(postponedAppointments)}
                </p>
              </div>
            </div>
          </div>
          {/* Card de Reuniões Marcadas */}
          <div className="meetings">
            <p className="meetings-header">Reuniões Marcadas</p>
            <div className="meetings-cards-container">
              {meetingsScheduled.map((meeting, index) => (
                <div className="meeting-card" key={index}>
                  <MeetingScheduled key={index} meeting={meeting} />
                  <p className="data">
                    <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" alt="calendar icon" />{" "}
                    {getLastAppointmentDate(postponedAppointments)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
