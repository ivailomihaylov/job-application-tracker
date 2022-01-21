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
    <li className="list-group justify-content-center">
      <a
        href="#"
        className="list-group-item list-group-item-action w-75 align-self-center "
        aria-current="true"
      >
        <h5 className="mb-1 text-left">{position}</h5>
        <div className="d-flex justify-content-between">
          <img src={image} alt={company} />
          <small>Added {time}</small>
          <button className="btn btn-danger" onClick={deleteHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 17 17"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
        </div>

        <div className="text-start">
          <p className="mb-1">{company}</p>
        </div>
      </a>
    </li>
  );
};

export default ListItem;
