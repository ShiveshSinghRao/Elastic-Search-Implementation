import React, { useState } from "react";

import "../style/QueryMessage.css";
import api from "../services/api.js";
const QueryMessage = () => {
  const [message, setMessage] = useState(""); // State to hold user input
  const [data, setData] = useState([]); // State to hold fetched data

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`?message=${message}`);
      setData(response.data); // Set fetched data to state
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  };

  return (
    <div className="gendiv">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit">Fetch Data</button>
      </form>

      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item._source.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QueryMessage;
