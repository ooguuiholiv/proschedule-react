import React from "react";

function MeetingScheduled({meeting}){
  return (
  <div className="meetings-scheduled">
    <p>
      <strong>{meeting.name}</strong>-{meeting.duration}
    </p><p>
        <strong>Solicitada por:</strong> {meeting.requestedBy}
      </p>
  </div>
  )
}

export default MeetingScheduled