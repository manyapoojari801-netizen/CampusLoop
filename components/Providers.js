"use client";

import { ItemProvider } from "../context/ItemContext";

export default function Providers({ children }) {
  return (
    <ItemProvider>
      {children}
    </ItemProvider>
  );
}