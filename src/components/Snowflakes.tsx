import { useEffect, useState } from "react";

interface Flake { id: number; left: string; size: string; duration: string; delay: string; char: string; }

export default function Snowflakes() {
  const [flakes, setFlakes] = useState<Flake[]>([]);
  useEffect(() => {
    const chars = ["❄", "❅", "❆", "✦", "·"];
    setFlakes(Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 0.8 + 0.4}rem`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 20}s`,
      char: chars[Math.floor(Math.random() * chars.length)],
    })));
  }, []);
  return <>
    {flakes.map(f => (
      <span key={f.id} className="snowflake" style={{ left: f.left, fontSize: f.size, animationDuration: f.duration, animationDelay: f.delay }}>
        {f.char}
      </span>
    ))}
  </>;
}
