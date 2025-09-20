import React, { useMemo } from "react";
import "./ScheduleTable.css";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const Schedule = ({ courses = [] }) => {
  const byDay = useMemo(() => {
    const map = Object.fromEntries(DAYS.map((d) => [d, []]));
    courses.forEach((c) => {
      const days = Array.isArray(c.days) ? c.days : [];
      days.forEach((d) => {
        if (map[d]) map[d].push(c);
      });
    });
    return map;
  }, [courses]);

  return (
    <section className="sched-wrap">
      <header className="sched-head">
        <h2 className="sched-title">Weekly Schedule</h2>
        <span className="sched-count">{courses.length}</span>
      </header>

      <div className="sched-card">
        <div className="sched-grid sched-grid--header">
          {DAYS.map((d) => (
            <div key={d} className="sched-colhead">
              {d}
            </div>
          ))}
        </div>

        <div className="sched-grid sched-grid--body">
          {DAYS.map((d) => (
            <div key={d} className="sched-cell">
              {byDay[d].length === 0 ? (
                <div className="sched-empty">—</div>
              ) : (
                <ul className="sched-list">
                  {byDay[d].map((c, idx) => (
                    <li key={`${d}-${c.dept}-${c.number}-${idx}`}>
                      <span className="sched-pill">
                        {c.dept}-{c.number}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
