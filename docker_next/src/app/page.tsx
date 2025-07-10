'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("null");

  useEffect(() => {
      fetch("http://localhost:3001/backend/data") 
      .then((res) => res.text())
      .then((text) => setData(text))
      
  }, []);

  return (
    <div>
      <h1>This is</h1>
      <pre>{data}</pre>
      <h2>this srtywrhw </h2>

    </div>
  );
}
