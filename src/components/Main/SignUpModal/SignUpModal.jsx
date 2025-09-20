import React, { useEffect, useRef } from "react";
import "./SignUpModal.css";
import { Link } from "react-router-dom";

export default function SignUpModal({ open = true }) {
  const titleId = "signup-title";
  const descId = "signup-desc";
  const btnRef = useRef(null);

  useEffect(() => {
    if (open && btnRef.current) btnRef.current.focus();
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="signup-modal-overlay"
      onKeyDown={(e) => {
        if (e.key === "Escape") e.preventDefault();
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="signup-modal-box">
        <h2 id={titleId} className="signup-modal-title">
          Please sign up!
        </h2>
        <p id={descId} className="signup-modal-desc">
          PennCourseCart requires you to sign up to use the application.
        </p>
        <Link className="signup-button" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
