import React, { useState, useEffect } from "react";
import axios from "../services/api.js";
import "../style/DisplayMessage.css";

const DisplayMessage = () => {
  const [logs, setLogs] = useState([]);
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get("/all");
        // Set logs state with received data
        setLogs(response.data.hits.hits);
      } catch (error) {
        // Handle error
        console.log(error);
        throw error;
      }
    };
    fetchLogs();
  }, []);

  const handleClick = () => {
    setShowLogs(!showLogs);
  };

  return (
    <div className="gendiv">
      <button onClick={handleClick}>
        {showLogs ? "Hide Messages" : "Show All Messages"}
      </button>
      {showLogs && (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{log._source.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayMessage;
