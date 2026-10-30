
"use client";

import { useState } from "react";
import { useItems } from "../../context/ItemContext";
import { useRouter } from "next/navigation";

export default function ReportPage() {
  const { addItem } = useItems();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    category: "Electronics",
    date: "",
    status: "Lost",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem(form);
    alert("Item reported successfully!");
    router.push("/");
  };

  return (
    <main className="report-page">
      <div className="report-container">
        <h1>Report an Item</h1>
        <p>Help reunite lost belongings with their owners.</p>

        <form onSubmit={handleSubmit}>
          <label>Report Type</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Lost">I Lost Something</option>
            <option value="Found">I Found Something</option>
          </select>

          <label>Item Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter item name"
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the item"
            required
          />

          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Electronics</option>
            <option>Books</option>
            <option>Accessories</option>
            <option>ID Cards</option>
          </select>

          <label>Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Where was it lost/found?"
            required
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Report</button>
        </form>
      </div>
    </main>
  );
}
