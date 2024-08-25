import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";

const container = document.createElement("root")
container.id = "root"
document.body.appendChild(container)

const root = createRoot(container);

const data = document.getElementById("data")

function Gomi() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCounter((new Date()).toISOString())
    }, 100)
  }, [])
  return <div>
   counter: {counter}
  </div>
}

const Lazyed = imports[data.getAttribute("file")]
const props = JSON.parse(data.getAttribute("props"))

root.render(
  <div className="bg-green-600">
  <Gomi />
  <Lazyed {...props} />
  </div>
);