import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "./items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <ShoppingList items={items} />
    </div>
  );
}

export default App;

