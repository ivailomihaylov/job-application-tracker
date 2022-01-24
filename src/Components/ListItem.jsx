import "../CSS/List.css";
import React from "react";
import { formatDistanceToNow } from "date-fns";

const ListItem = ({
  company,
  position,
  timestamp,
  image,
  listItems,
  setListItems,
  item,
  id,
}) => {
  const time = formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    includeSeconds: true,
  });

  const deleteHandler = () => {
    setListItems(listItems.filter((el) => el.id !== item.id));
    console.log(`${item.position} deleted`);
  };

  return (
    <li className=" d-flex justify-content-center p-1">
      <a
        href="#"
        className="list-group-item list-group-item-action w-75 align-self-center d-flex justify-content-between p-0 rounded-left"
        aria-current="true"
      >
        <div className="list-img-container">
          <img className="img-fluid" src={image} alt={company} />
        </div>
        <div className="position-title ms-3">
          <h5 className="mb-2">{position}</h5>
        </div>
        <div className="d-flex ms-auto me-2 mt-1">
          <small>Added {time}</small>
        </div>
      </a>
      <button className="btn btn-outline-danger btn-sm" onClick={deleteHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
          <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          ></path>
        </svg>
      </button>
    </li>
  );
};

export default ListItem;
