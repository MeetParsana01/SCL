"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    setLoading(true);
    const res = await fetch("/api/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">SCL Tokenizer & Format Converter</h1>
      <textarea className="w-full h-40 p-3 bg-gray-900 border border-gray-700 rounded"
        placeholder="Paste any text..." value={input}
        onChange={e => setInput(e.target.value)} />
      <button onClick={send} className="mt-4 bg-blue-600 px-5 py-2 rounded">Convert</button>
      {loading && <p className="mt-4">Processing...</p>}
      {result && (
        <div className="mt-10 space-y-6">
          {Object.entries(result.outputs).map(([k,v])=>(
            <div key={k} className="p-4 bg-gray-800 rounded border border-gray-700">
              <h2 className="font-bold text-xl capitalize mb-2">{k}</h2>
              <pre className="whitespace-pre-wrap text-sm">{v}</pre>
              <p className="text-green-400 mt-2">Tokens: {result.tokens[k]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
