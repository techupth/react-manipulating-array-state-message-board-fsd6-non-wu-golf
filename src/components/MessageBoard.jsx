import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState(["Hello", "Hi"]);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            if (inputMessage.trim() !== "") {
              setMessages([...messages, inputMessage]);
              setInputMessage("");
            }
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  let delMessage = [...messages];
                  delMessage.splice(index, 1);
                  setMessages(delMessage);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
