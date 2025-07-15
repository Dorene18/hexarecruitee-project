import React, { useState, useEffect } from "react";
import "./MessagingUI.css";

const LOCAL_STORAGE_KEY = "messaging-ui-data";

const initialMessages = [
  {
    id: 1,
    name: "Careers",
    subtitle: "Chatting with Diksha Tyagi, Senior Counsellor",
    preview: "Hey Edina, I’m Diksha, I noticed you're studying at St Jose...",
    date: "07/10/2024",
    tag: "Get a Guaranteed Job",
    fullChat: [
      {
        sender: "them",
        text: "Hey Edina, I’m Diksha from Recruitment Agency.",
      },
      { sender: "them", text: "I've helped many students like you." },
    ],
  },
  {
    id: 2,
    name: "Ozibook Tech Solutions Private Limited",
    subtitle: "Prompt Engineering internship",
    preview: "Dear Applicant, Trust you are doing well and safe...",
    date: "17/07/2024",
    tag: "Not selected",
    fullChat: [
      { sender: "them", text: "Thank you for applying!" },
      { sender: "them", text: "We’ve chosen other candidates for now." },
    ],
  },
];

const MessagingUI = () => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialMessages;
  });

  const [selectedMessageId, setSelectedMessageId] = useState(messages[0].id);
  const [inputText, setInputText] = useState("");

  const selectedMessage = messages.find((msg) => msg.id === selectedMessageId);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const updatedMessages = messages.map((msg) => {
      if (msg.id === selectedMessageId) {
        return {
          ...msg,
          fullChat: [...msg.fullChat, { sender: "you", text: inputText }],
        };
      }
      return msg;
    });

    setMessages(updatedMessages);
    setInputText("");
  };

  return (
    <div className="messaging-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="tabs">
          <button className="tab active">All messages</button>
          <button className="tab">Unread (1)</button>
        </div>
        <div className="message-list">
          {messages.map((msg) => (
            <div
              className={`message-item ${
                selectedMessageId === msg.id ? "selected" : ""
              }`}
              key={msg.id}
              onClick={() => setSelectedMessageId(msg.id)}
            >
              <h4>
                {msg.name}{" "}
                {msg.id === 1 && <span className="blue-check">✔️</span>}
              </h4>
              <p className="subtitle">{msg.subtitle}</p>
              <p className="preview">{msg.preview}</p>
              <div className="bottom-row">
                <span className="date">{msg.date}</span>
                <span className="tag">{msg.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="chat">
        <h3 className="chat-header">
          {selectedMessage.name}
          {selectedMessage.id === 1 && <span className="blue-check">✔️</span>}
        </h3>
        <p className="subtitle">{selectedMessage.subtitle}</p>
        <p className="unread">UNREAD MESSAGES</p>
        <p className="chat-date">{selectedMessage.date}</p>

        {/* ✅ Scrollable message area */}
        <div className="chat-messages">
          <div className="chat-box">
            {selectedMessage.fullChat.map((line, index) => (
              <p
                key={index}
                style={{
                  marginBottom: "12px",
                  color: line.sender === "you" ? "black" : "#333",
                  fontWeight: line.sender === "you" ? "bold" : "normal",
                }}
              >
                <span style={{ color: "#555" }}>
                  {line.sender === "you" ? "You" : "Diksha"}:
                </span>{" "}
                {line.text}
              </p>
            ))}
          </div>
        </div>

        {/* ✅ Send box stays at the bottom */}
        <div className="send-box">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default MessagingUI;
