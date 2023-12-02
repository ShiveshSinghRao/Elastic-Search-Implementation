import React, { useState } from "react";

import "../style/MessageSearch.css";
import api from "../services/api.js";
const MessageSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const [showTable, setShowTable] = useState(false); // State to toggle table visibility

  const handleSearch = async (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    try {
      const response = await api.get("/search", {
        params: {
          searchTerm: value,
        },
      });

      console.log(response.data);
      setMessages(response.data);
      setShowTable(true); // Show table when messages are retrieved
    } catch (error) {
      console.error("Error searching:", error);
      setMessages([]); // Reset messages on error
      setShowTable(false); // Hide table on error
    }
  };

  return (
    <div className="gendiv">
      <h1>Real-Time Search</h1>
      <input
        type="text"
        placeholder="Search messages..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {showTable && messages.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Messages</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index}>
                <td>{message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MessageSearch;
