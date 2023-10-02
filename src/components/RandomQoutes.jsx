import { useEffect, useState } from "react";
import "./RandomQoutes.css";

const RandomQoutes = () => {
  const [currentQoute, setCurrentQoute] = useState("");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) =>
        setCurrentQoute(data[Math.floor(Math.random() * data.length)])
      );
  }, []);

  return (
    <blockquote className="qoute-box">
      &ldquo;{currentQoute.text}&rdquo;
      <footer className="quote-info">{currentQoute.author}</footer>
    </blockquote>
  );
};

export default RandomQoutes;
