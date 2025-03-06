import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState(""); 
  const [chatHistory, setChatHistory] = useState([]); 
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    const newMessage = { role: "user", content: message };
    setChatHistory([...chatHistory, newMessage]);
    setMessage(""); 
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message });
      setChatHistory([...chatHistory, newMessage, { role: "bot", content: res.data.reply }]);
    } catch (error) {
      setChatHistory([...chatHistory, { role: "bot", content: "Error getting chatbot response" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Chatbot</h1>
      <div 
        style={{
          border: "1px solid #ccc",
          width: "50%",
          height: "300px",
          overflowY: "auto",
          padding: "10px",
          margin: "auto",
        }}
      >
        {chatHistory.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.role === "user" ? "right" : "left" }}>
            <strong>{msg.role === "user" ? "You: " : "Chatbot: "}</strong>
            {msg.content}
          </div>
        ))}
        {loading && <p>Typing...</p>}
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ padding: "10px", width: "300px" }}
        />
        <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "10px" }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
