import React, { useContext, useEffect, useMemo, useState } from "react";
import "./ShareSchedule.css";
import Publication from "./Publication";
import CartContext from "../../context/CartContext";

const STORAGE_KEY = "pcc_posts_v1";

const seedPosts = [
  {
    id: "seed-1",
    author: "Alex Chen",
    handle: "@alex",
    avatar: "",
    courses: ["CIS-120", "CIS-160"],
    note: "Locked in for CS this term.",
    createdAt: Date.now() - 1000 * 60 * 60 * 3, // 3h ago
  },
  {
    id: "seed-2",
    author: "María López",
    handle: "@marial",
    avatar: "",
    courses: ["CIS-121", "CIS-240"],
    note: "Anyone also taking CIS-240??? I'm looking for study buddies",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1, // 1d ago
  },
];

const loadPosts = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedPosts;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : seedPosts;
  } catch {
    return seedPosts;
  }
};

const savePosts = (posts) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {}
};

const ShareSchedule = () => {
  const { cart } = useContext(CartContext);
  const [posts, setPosts] = useState([]);
  const [note, setNote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  // Build the courses list from the cart (dept-number), e.g., "CIS-120"
  const cartCourses = useMemo(
    () =>
      (cart || [])
        .map((c) => `${c.dept}-${c.number}`)
        .filter(Boolean),
    [cart]
  );

  const handlePublish = (e) => {
    e.preventDefault();

    if (!author.trim()) {
      alert("Please add your name.");
      return;
    }
    if (!cartCourses.length) {
      alert("Your cart is empty. Add courses to your cart to share your schedule.");
      return;
    }

    const newPost = {
      id: `${Date.now()}`,
      author: author.trim(),
      handle: `@${author.trim().toLowerCase().replace(/\s+/g, "")}`,
      avatar: "",
      courses: cartCourses,
      note: note.trim(),
      createdAt: Date.now(),
    };

    setPosts((prev) => [newPost, ...prev]);
    setNote("");
  };

  const clearAll = () => {
    if (confirm("Clear all shared posts?")) {
      setPosts([]);
      savePosts([]);
    }
  };

  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.createdAt - a.createdAt),
    [posts]
  );

  return (
    <section className="pub-wrap">
      <header className="pub-head">
        <h2 className="pub-title">Share Schedule</h2>
        <div className="pub-head-actions">
          <span className="pub-count">{sorted.length}</span>
          <button className="actionButton actionButton--ghost" onClick={clearAll}>
            Clear
          </button>
        </div>
      </header>

      {/* Composer (courses come from cart; user cannot type them) */}
      <form className="pub-composer" onSubmit={handlePublish}>
        <div className="composer-row">
          <input
            className="input"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="actionButton actionButton--primary" type="submit">
            Post
          </button>
        </div>

        {/* Preview of courses from the cart */}
        <div className="courses-chips" aria-live="polite">
          {cartCourses.length ? (
            cartCourses.map((c, i) => (
              <span key={`${c}-${i}`} className="chip">
                {c}
              </span>
            ))
          ) : (
            <span style={{ color: "#6b7280", fontSize: 14 }}>
              No courses in cart yet.
            </span>
          )}
        </div>

        <textarea
          className="textarea"
          placeholder="Add a note (optional)…"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </form>

      {/* Feed */}
      <ul className="pub-list">
        {sorted.map((p) => (
          <Publication key={p.id} {...p} />
        ))}
      </ul>
    </section>
  );
};

export default ShareSchedule;
