import React from "react";
import "./ShareSchedule.css";

const timeAgo = (ts) => {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  return `${d}d`;
};

const Publication = ({ author, handle, avatar, courses = [], note, createdAt }) => {
  return (
    <li className="pub-item">
      <div className="pub-card">
        <header className="pub-item-head">
          <div className="avatar" aria-hidden>
            {avatar ? <img src={avatar} alt="" /> : author?.[0] || "U"}
          </div>
          <div className="identity">
            <div className="name">{author}</div>
            <div className="handle">{handle} · {timeAgo(createdAt)}</div>
          </div>
        </header>

        <div className="courses-chips">
          {courses.map((c, i) => (
            <span key={`${c}-${i}`} className="chip">{c}</span>
          ))}
        </div>

        {note && <p className="note">{note}</p>}
      </div>
    </li>
  );
};

export default Publication;
