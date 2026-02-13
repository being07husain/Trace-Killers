import React, { useState } from "react";
import "../styles/events.css";
import { useGlitchText } from "../hooks/useGlitchText";
import ROBLOX from "../utils/ROBLOX.png";
import FORTINITE from "../utils/FORTINITE.png";
import MINECRAFT from "../utils/MINECRAFT.png";
import CS2 from "../utils/CS2.png";
import LoL from "../utils/LoL.jpg";

function EventCard({ event, coordinators, eventCoordinators }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const glitchTitle = useGlitchText(event.title);
  
  const eventCoordList = eventCoordinators.find(ec => ec.eventId === event.id);
  const members = eventCoordList ? eventCoordList.members.map(memberId => 
    coordinators.find(c => c.id === memberId)
  ).filter(Boolean) : [];

  return (
    <div 
      className="event-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`event-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="event-card-front">
          {event.classified && <div className="classified-stamp">CLASSIFIED</div>}
          <div className="event-header">{glitchTitle}</div>
          <div className="event-image-container">
            <img src={event.img} alt={event.title} className="event-img" />
          </div>
          <div className="event-content">
            <p className="event-description">{event.description}</p>
            <div className="event-meta">
              <span className="meta-item">LEVEL: {event.level}</span>
              <span className="meta-item">LINK: {event.link}</span>
            </div>
            <button className="btn event-btn">{event.buttonText}</button>
          </div>
        </div>

        {/* Back Side - Coordinators */}
        <div className="event-card-back">
          <div className="card-back-content">
            <h3 className="back-title">EVENT COORDINATORS</h3>
            <div className="coordinators-back">
              {members.length > 0 ? (
                members.map((member, idx) => (
                  <div key={idx} className="coordinator-badge">
                    <span className="coordinator-name">{member.name}</span>
                  </div>
                ))
              ) : (
                <p className="no-coordinators">No coordinators assigned</p>
              )}
            </div>
            <div className="flip-hint">Hover to flip back</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Events() {
  const events = [
    {
      id: 1,
      title: "INFILTRATION TARGET",
      description: "Security Protocol Assessment. Payload Delivery.",
      level: "HARD",
      link: "HARD",
      img: ROBLOX,
      buttonText: "EXECUTE_SESSION"
    },
    {
      id: 2,
      title: "ZERO DAY HIJACK",
      description: "Vulnerability Exploitation. System Override.",
      level: "HARD",
      link: "HARD",
      img: FORTINITE,
      buttonText: "INITIATE_BREACH"
    },
    {
      id: 3,
      title: "BIOFEEDBACK TARGET",
      description: "Encryption Key Recovery. Access Escalation.",
      level: "HARD",
      link: "HARD",
      img: MINECRAFT,
      buttonText: "CRACK_CIPHER"
    },
    {
      id: 4,
      title: "CRYOTECHNICS TARGET",
      description: "Deep Freeze Protocol. Identity Masking.",
      level: "HARD",
      link: "HARD",
      img: CS2,
      buttonText: "EXECUTE_RESURECTION"
    },
    {
      id: 5,
      title: "GREY SANCTUARY HEIST",
      description: "Neural Interface Trace. Memory Extraction.",
      level: "HARD",
      link: "HARD",
      img: LoL,
      buttonText: "DEPLOY_SIPHON"
    },
    {
      id: 6,
      title: "INFILTRATION PENETRATION",
      description: "Network Mappers. Surveillance Evasion.",
      level: "HARD",
      link: "HARD",
      img: ROBLOX,
      buttonText: "LAUNCH_PROXY"
    },
    {
      id: 7,
      title: "CYBER-OVER-TEACH",
      description: "Knowledge Transfer. System Adaptation.",
      level: "HARD",
      link: "HARD",
      img: FORTINITE,
      buttonText: "ENABLE_LEARNING"
    },
    {
      id: 8,
      title: "DERMATIZATION TARGET",
      description: "Dark Web Filtration. Breach Containment.",
      level: "HARD",
      link: "HARD",
      img: MINECRAFT,
      buttonText: "PURGE_TRACE"
    },
    {
      id: 9,
      title: "RECOVERIES",
      description: "Ghost Protocol Operations. Data Recovery.",
      level: "HARD",
      link: "HARD",
      img: CS2,
      buttonText: "RESTORE_SHADOW"
    },
    {
      id: 10,
      title: "PHANTOM PROTOCOL",
      description: "Silent Mode Execution. Trace Elimination.",
      level: "HARD",
      link: "HARD",
      img: LoL,
      buttonText: "ACTIVATE_GHOST"
    },
    {
      id: 11,
      title: "APEX PREDATOR",
      description: "Advanced Threat Analysis. Countermeasure Deployment.",
      level: "HARD",
      link: "HARD",
      img: ROBLOX,
      buttonText: "HUNT_THREATS"
    },
    {
      id: 12,
      title: "NEXUS CORE",
      description: "Central Intelligence Hub. Command & Control.",
      level: "HARD",
      link: "HARD",
      img: FORTINITE,
      buttonText: "ESTABLISH_LINK"
    }
  ];

  const coordinators = [
    { id: 1, name: "ALPHA_NEXUS" },
    { id: 2, name: "CIPHER_UNIT" },
    { id: 3, name: "PHOENIX_ONE" },
    { id: 4, name: "GHOST_RIDER" },
    { id: 5, name: "VORTEX_CORE" },
    { id: 6, name: "SHADOW_OPS" },
    { id: 7, name: "VOID_GUARDIAN" }
  ];

  const eventCoordinators = [
    { eventId: 1, members: [1, 2] },
    { eventId: 2, members: [2, 3] },
    { eventId: 3, members: [3, 4] },
    { eventId: 4, members: [4, 5] },
    { eventId: 5, members: [5, 6] },
    { eventId: 6, members: [6, 7] },
    { eventId: 7, members: [7, 1] },
    { eventId: 8, members: [1, 2, 3] },
    { eventId: 9, members: [4, 5, 6] },
    { eventId: 10, members: [2, 4, 7] },
    { eventId: 11, members: [1, 3, 5] },
    { eventId: 12, members: [6, 7, 2] }
  ];

  return (
    <div className="main-container">
      <div className="events-grid">
        {events.map((event) => (
          <EventCard 
            event={event} 
            key={event.id}
            coordinators={coordinators}
            eventCoordinators={eventCoordinators}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;