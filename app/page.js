
"use client";

import LandingPage from "../components/Landingpage";
import ItemCard from "../components/itemcard";
import SearchBar from "../components/searchbar";
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

      <LandingPage />

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
          <SearchBar
          searchTerm={search}
          onSearch={setSearch}
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
              <ItemCard
  key={item.id}
  item={item}
  onToggleSave={toggleSaved}
  onMarkReturned={markReturned}
/>
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
