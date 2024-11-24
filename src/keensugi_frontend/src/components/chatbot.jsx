import React, { useState } from 'react';
import '../styles/styles.css';
import { MessageSquare, X } from 'lucide-react'; // Using the X icon for closing the chatbot

const Chatbot = () => {
  // State to track whether the chatbot is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChatbot}>
        <MessageSquare className="chatbot-icon" />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <button onClick={toggleChatbot} className="chatbot-close-button">
              <X className="chatbot-close-icon" />
            </button>
          </div>
          <div className="chatbot-content">
            {/* Chatbot content goes here */}
            <p>Chatbot is now open!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
