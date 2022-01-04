import React from "react";
import NavigationBar from "./NavigationBar";
export default function Home({ isLoggedIn }) {
  return (
    <div>
      <NavigationBar isLoggedIn={isLoggedIn} />
    </div>
  );
}
