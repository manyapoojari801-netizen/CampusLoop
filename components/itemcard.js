
export default function ItemCard({ item, onToggleSave, onMarkReturned }) {
  return (
    <article className="item-card">
      <div className="item-card-top">
        <span className={`status ${item.status.toLowerCase()}`}>
          {item.status}
        </span>

        <button
          className={`save-btn ${item.saved ? "saved" : ""}`}
          onClick={() => onToggleSave(item.id)}
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
          onClick={() => onMarkReturned(item.id)}
        >
          Mark as Returned
        </button>
      )}
    </article>
  );
}
