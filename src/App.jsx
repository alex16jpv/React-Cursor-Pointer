import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointermove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.body.classList.toggle("hide-cursor", enabled);
    if (enabled) {
      addEventListener("pointermove", pointermove);
    }

    return () => {
      removeEventListener("pointermove", pointermove);
    };
  }, [enabled]);

  return (
    <main>
      <div
        className="cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button
        onClick={() => {
          setEnabled((prev) => !prev);
        }}
      >
        {enabled ? "Disable" : "Enable"} cursor pointer
      </button>
    </main>
  );
}

export default App;
