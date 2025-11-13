import React, { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export default function ChatScreen() {
  const { socket, sendMessage } = useSocket();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
  }, [socket]);

  return (
    <div className="chat-screen">
      <div className="chat-header">Messenger</div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div key={i} className="msg">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
