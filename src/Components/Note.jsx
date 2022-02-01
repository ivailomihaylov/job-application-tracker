import React, { useState, useEffect } from "react";

const Note = ({ customNotes, saveLocalJobs }) => {
  const [inputText, setInputText] = useState("");
  const [style, setStyle] = useState({ display: "none" });

  const noteSubmitHandler = (e) => {
    e.preventDefault();
    customNotes.push(inputText);

    setInputText("");
    saveLocalJobs();
  };

  // Delete button on hover

  return (
    <div>
      <form onSubmit={noteSubmitHandler} className="input-group mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Add a pro"
          aria-label="Add a pro"
          value={inputText}
          onChange={(e) => setInputText(`${e.target.value}`)}
        />
        <button className="btn btn-outline-primary note-add-btn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </button>
      </form>
      <ul className="list-group note-list-item">
        {customNotes.map((item, index) => (
          <li
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
            }}
            key={index}
            className="note-list-item list-group-item d-inline-block position-relative overflow-hidden"
          >
            <p>{item}</p>
            {/* <button
              style={style}
              className="note-delete-button btn btn-link position-absolute top-0 end-0 p-1 m-1 rounded-pill"
            >
              delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Note;
