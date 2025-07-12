import { useState } from "react";
import EmotionCard from "./emotions";
import "./App.css";

interface EmotionResponse {
  emotion: string;
  confidence: number;
}

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<EmotionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data: EmotionResponse = await response.json();
      setResult(data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Emotion Reflection Tool</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="How are you feeling today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {result && <EmotionCard emotion={result.emotion} confidence={result.confidence} />}
    </div>
  );
}

export default App;
