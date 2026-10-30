
"use client";

import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

const initialItems = [
  {
    id: 1,
    name: "Black Water Bottle",
    description: "Black Milton water bottle",
    location: "Central Library",
    category: "Accessories",
    date: "2026-10-28",
    status: "Lost",
    saved: false,
  },
  {
    id: 2,
    name: "Blue Notebook",
    description: "Notebook with blue cover",
    location: "CSE Classroom",
    category: "Books",
    date: "2026-10-29",
    status: "Found",
    saved: false,
  },
  {
    id: 3,
    name: "College ID Card",
    description: "Student identity card",
    location: "College Canteen",
    category: "ID Cards",
    date: "2026-10-30",
    status: "Lost",
    saved: false,
  },
  {
    id: 4,
    name: "Wireless Earphones",
    description: "White wireless earphones",
    location: "Seminar Hall",
    category: "Electronics",
    date: "2026-10-30",
    status: "Found",
    saved: false,
  },
];

export function ItemProvider({ children }) {
  const [items, setItems] = useState(initialItems);

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      saved: false,
    };

    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const markReturned = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, status: "Returned" }
          : item
      )
    );
  };

  const toggleSaved = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, saved: !item.saved }
          : item
      )
    );
  };

  const searchItems = (searchText, category, status) => {
    return items.filter((item) => {
      const text = searchText.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(text) ||
        item.description.toLowerCase().includes(text) ||
        item.location.toLowerCase().includes(text);

      const matchesCategory =
        category === "All" || item.category === category;

      const matchesStatus =
        status === "All" || item.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  };

  const lostCount = items.filter(
    (item) => item.status === "Lost"
  ).length;

  const foundCount = items.filter(
    (item) => item.status === "Found"
  ).length;

  const returnedCount = items.filter(
    (item) => item.status === "Returned"
  ).length;

  const savedCount = items.filter(
    (item) => item.saved
  ).length;

  const possibleMatches = items.filter((item) =>
    items.some(
      (other) =>
        item.id !== other.id &&
        item.status !== other.status &&
        item.status !== "Returned" &&
        other.status !== "Returned" &&
        item.name.toLowerCase() === other.name.toLowerCase()
    )
  );

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        markReturned,
        toggleSaved,
        searchItems,
        lostCount,
        foundCount,
        returnedCount,
        savedCount,
        possibleMatches,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemContext);
}
