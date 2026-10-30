
"use client";

import { useState } from "react";
import { useItems } from "../context/ItemContext";

export default function Dashboard() {
  const {
    items,
    markReturned,
    toggleSaved,
    lostCount,
    foundCount,
    returnedCount,
    savedCount,
    searchItems,
  } = useItems();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredItems = searchItems(search, category, status);

  return (
    <main className="dashboard">

      <section className="welcome">
        <div className="welcome-content">
          <span className="welcome-tag">YOUR CAMPUS, CONNECTED</span>
          <h1>Lost something?<br />Let's find it.</h1>
          <p>
            A smarter way to report, discover and reunite
            lost belongings across your campus.
          </p>

          <div className="welcome-buttons">
            <a href="#items" className="hero-btn">
              Explore Items
            </a>
            <a href="/report" className="hero-btn secondary-btn">
              + Report an Item
            </a>
          </div>
        </div>

        <div className="welcome-art">🎒</div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🔍</div>
          <p>Lost Items</p>
          <h2>{lostCount}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <p>Found Items</p>
          <h2>{foundCount}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🤝</div>
          <p>Successfully Returned</p>
          <h2>{returnedCount}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <p>Saved Items</p>
          <h2>{savedCount}</h2>
        </div>
      </section>

      <section className="items-section" id="items">
        <div className="section-heading">
          <div>
            <span className="section-tag">CAMPUS ACTIVITY</span>
            <h2>Recently Reported Items</h2>
            <p>
              Find what you lost or help someone find their belongings.
            </p>
          </div>

          <a href="/report" className="report-link">
            + Report Item
          </a>
        </div>

        <div className="search-panel">
          <input
            type="text"
            placeholder="Search by item, location or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Accessories">Accessories</option>
            <option value="ID Cards">ID Cards</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
            <option value="Returned">Returned</option>
          </select>
        </div>

        <div className="items-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <article className="item-card" key={item.id}>
                <div className="item-card-top">
                  <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>

                  <button
                    className={`save-btn ${item.saved ? "saved" : ""}`}
                    onClick={() => toggleSaved(item.id)}
                    aria-label="Save item"
                  >
                    {item.saved ? "♥" : "♡"}
                  </button>
                </div>

                <div className="item-emoji">
                  {item.category === "Electronics" ? "🎧" :
                    item.category === "Books" ? "📘" :
                    item.category === "ID Cards" ? "🪪" : "🎒"}
                </div>

                <span className="item-category">{item.category}</span>
                <h3>{item.name}</h3>
                <p className="item-description">{item.description}</p>

                <div className="item-info">
                  <span>📍 {item.location}</span>
                  <span>📅 {item.date}</span>
                </div>

                {item.status !== "Returned" && (
                  <button
                    className="returned-btn"
                    onClick={() => markReturned(item.id)}
                  >
                    Mark as Returned
                  </button>
                )}
              </article>
            ))
          ) : (
            <div className="empty-state">
              <span>🔎</span>
              <h3>No items found</h3>
              <p>Try changing your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      <section className="how-section">
        <span className="section-tag">SIMPLE AND EASY</span>
        <h2>How CampusLoop Works</h2>

        <div className="how-grid">
          <div className="how-card">
            <span>01</span>
            <h3>Report</h3>
            <p>Post details about an item you lost or found.</p>
          </div>

          <div className="how-card">
            <span>02</span>
            <h3>Discover</h3>
            <p>Search and explore items reported by students.</p>
          </div>

          <div className="how-card">
            <span>03</span>
            <h3>Reunite</h3>
            <p>Connect with the owner and return the item.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
