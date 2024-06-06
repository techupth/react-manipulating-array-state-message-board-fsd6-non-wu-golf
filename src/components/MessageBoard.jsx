import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = () => {
    if (inputMessage) {
      setMessageList([...messageList, inputMessage]);
      setInputMessage("");
    }
  };

  const handleDelete = (messageIndex) => {
    const newMessage = [...messageList];
    newMessage.splice(messageIndex, 1);
    setMessageList(newMessage);
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
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
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
