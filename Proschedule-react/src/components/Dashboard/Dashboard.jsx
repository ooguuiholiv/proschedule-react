import React from "react";

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
      <div className="header">
        <div className="header-links">
          <a href="#">DASHBOARD</a>
          <a href="#">EVENTS</a>
          <a href="#">SCHEDULED EVENTS</a>
        </div>
        <div className="user-profile">
          <img
            src="proschedule-react/Proschedule-react/src/assets/icon-perfil.jpg"
            alt="User Icon"
            className="user-icon"
          />
          <div className="perfil">
            <span className="user-name">Rick Sanches</span> <br />
            <span className="occupation">Engenheiro de software</span>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="months-agenda">
          <p>Agenda do mês</p>
          {/* Card de Atendimentos Realizados */}
          <div className="card made">
            <span className="circle-green"></span>
            <h2>Atendimentos Realizados</h2>
            <p>Você efetuou {completedAppointments.length} atendimento(s)</p>

            <p className="data">
              <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" />{" "}
              {getLastAppointmentDate(completedAppointments)}
            </p>
          </div>

          {/* Card de Atendimentos Cancelados */}
          <div className="card canceled">
            <span className="circle-red"></span>
            <h2>Atendimentos Cancelados</h2>
            <p>Você cancelou {canceledAppointments.length} atendimento(s)</p>
            <p className="data">
              <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" />{" "}
              {getLastAppointmentDate(canceledAppointments)}
            </p>
          </div>

          {/* Card de Atendimentos Adiados */}
          <div className="card postponed">
            <span className="circle-blueLight"></span>
            <h2>Atendimentos Adiados</h2>
            <p>Você adiou {postponedAppointments.length} atendimento(s)</p>
            <p className="data">
              <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" />{" "}
              {getLastAppointmentDate(postponedAppointments)}
            </p>
          </div>
        </div>
        {/* Card de Reuniões Marcadas */}
        <div className="meetings-scheduled">
          <h2>Reuniões Marcadas</h2>
          {meetingsScheduled.map((meeting, index) => (
            <div className="card meeting" key={index}>
              <p>
                <strong>{meeting.name}</strong>-{meeting.duration}
              </p>
              <p>
                <strong>Solicitada por:</strong> {meeting.requestedBy}
              </p>
              <p>
                <p className="data">
                  <img src="proschedule-react/Proschedule-react/src/assets/calendar3.svg" />{" "}
                  {getLastAppointmentDate(postponedAppointments)}
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
