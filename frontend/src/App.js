import React, { useEffect, useState } from "react";
import { vote, getSummary, getTimeline } from "./api";

function App() {
  const [summary, setSummary] = useState([]);
  const [timeline, setTimeline] = useState([]);

  const loadData = async () => {
    const s = await getSummary();
    const t = await getTimeline();

    setSummary(s.data);
    setTimeline(t.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleVote = async (type) => {
    await vote(type);
    loadData();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Voting App</h1>

      <button onClick={() => handleVote("YES")}>Yes</button>
      <button onClick={() => handleVote("NO")}>No</button>

      <h2>Summary</h2>
      {summary.map((s, i) => (
        <div key={i}>
          {s.vote_type}: {s.count}
        </div>
      ))}

      <h2>Timeline</h2>
      {timeline.map((t, i) => (
        <div key={i}>
          {t.time} - {t.vote_type}: {t.count}
        </div>
      ))}
    </div>
  );
}

export default App;