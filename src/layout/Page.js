import React from "react";
import Header from "./Header";

export default function Page({ children, isAuthenticated, setIsAuthenticated }) {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      {children}
    </div>
  );
}