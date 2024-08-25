import React, { useState } from "react";

export default function Page({ title = "notitle", subtitle = "tsx subtitle" }: { title?: string, subtitle?: string }) {
  const [count, setCount] = useState(0)
  return <div>
    <h1>I am info page {title} and {subtitle}</h1>
    <p>{count}</p>
    <button onClick={() => {
      setCount(count + 1)
    }}>click me</button>
  </div>
}