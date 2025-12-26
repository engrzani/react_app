import React, { useState, useRef, useEffect } from 'react';
import { getBotResponse } from '../utils/botLogic';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help answer questions about my expertise and services. Feel free to ask about my skills, experience, rates, or anything else!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage = {
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  const quickQuestions = [
    "What's your hourly rate?",
    "What technologies do you use?",
    "Are you available for long-term projects?",
    "Can you help with AI integration?"
  ];

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h3>💬 Ask Me Anything</h3>
        <p className="chatbox-subtitle">Quick answers to your questions</p>
      </div>

      <div className="quick-questions">
        {quickQuestions.map((question, index) => (
          <button
            key={index}
            className="quick-question-btn"
            onClick={() => handleQuickQuestion(question)}
          >
            {question}
          </button>
        ))}
      </div>

      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot-message">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbox-input">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your question here..."
          rows="2"
        />
        <button onClick={handleSend} className="send-btn" disabled={!inputValue.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
