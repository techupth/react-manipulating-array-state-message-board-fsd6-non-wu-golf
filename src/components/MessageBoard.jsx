import { useState } from "react";

function MessageBoard() {
  const [messageBoard, setMessageBoard] = useState([
    "Hello all ! This is first message.",
  ]);
  const [message, setMessage] = useState("");

  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = () => {
    const newMessageBoard = [...messageBoard];
    newMessageBoard.push(message);
    setMessageBoard(newMessageBoard);
    setMessage("");
  };

  const deleteMessage = (messageIndex) => {
    const newMessageBoard = [...messageBoard];
    newMessageBoard.splice(messageIndex, 1);
    setMessageBoard(newMessageBoard);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={message}
            onChange={handleMessageInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleMessageSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageBoard.map((message, index) => (
          <div className="message">
            <h1 key={index}>{message}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
