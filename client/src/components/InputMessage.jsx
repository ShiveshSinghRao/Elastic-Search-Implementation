import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/InputMessage.css";
import api from "../services/api.js";

export const InputMessage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const logData = {
        message: message,
      };
      await api.post("/create", logData);
      // Handle success
      setMessage("");
      // Show toast notification
      toast.success("Message saved!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      // Handle error
      console.error("Error saving message:", error);
      // Show toast notification for error if needed
      toast.error("Failed to save message!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="gendiv">
      <h1>Save your message here ...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Message"
        />
        <button type="submit">Insert Message</button>
      </form>
      <ToastContainer />
    </div>
  );
};
