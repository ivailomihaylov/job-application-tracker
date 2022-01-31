import "../CSS/List.css";
import Note from "./Note";
import React, { useContext } from "react";
import { NotificationContext } from "./Notifications/NotificationProvider";
import useCollapse from "react-collapsed";

import { v4 } from "uuid";

const ListItem = ({
  company,
  position,
  timestamp,
  image,
  customNotes,
  listItems,
  setListItems,
  item,
  saveLocalJobs,
}) => {
  const dispatch = useContext(NotificationContext);
  const { getCollapseProps, getToggleProps } = useCollapse();
  const timestampHandler = () => {
    let currentdate = new Date(timestamp);
    let year = currentdate.getFullYear();
    let month = String(currentdate.getMonth() + 1).padStart(2, "0");
    let day = String(currentdate.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  const time = timestampHandler();

  const deleteHandler = () => {
    setListItems(listItems.filter((el) => el.id !== item.id));
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        type: "SUCCESS",
        message: `${item.position} successfully deleted`,
      },
    });
  };
  return (
    <div>
      <li className=" d-flex justify-content-center p-1">
        <div
          className="job-list-item list-group-item list-group-item-action w-75 align-self-center d-flex justify-content-between p-0 rounded-left"
          aria-current="true"
          {...getToggleProps()}
        >
          <div className="list-img-container">
            <img className="img-fluid" src={image} alt={company} />
          </div>
          <div className="position-title ms-3">
            <h5 className="mb-2">{position}</h5>
          </div>
          <div className="d-flex ms-auto me-2 mt-1">
            <small>
              <i>Added {time}</i>
            </small>
          </div>
        </div>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={deleteHandler}
        >
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
      <div {...getCollapseProps()}>
        <div className="d-flex w-75 m-auto">
          {/* Pros section */}
          <div className="d-block w-25">
            <p className="input-p p-1 rounded-top  bg-success bg-gradient mb-0">
              Pros
            </p>
            <Note
              customNotes={customNotes.pros}
              saveLocalJobs={saveLocalJobs}
              listItems={listItems}
              type={"pro"}
            />
          </div>
          {/* Con section */}
          <div className="d-block w-25">
            <p className="input-p mb-0 rounded-top  bg-danger bg-gradient p-1">
              Cons
            </p>
            <Note
              customNotes={customNotes.cons}
              saveLocalJobs={saveLocalJobs}
              listItems={listItems}
              type={"con"}
            />
          </div>
          <div className="d-block ps-2 w-50">
            <p className=" mb-0 bg-warning rounded-top bg-gradient p-1 mb-0">
              Notes
            </p>
            <Note
              customNotes={customNotes.notes}
              saveLocalJobs={saveLocalJobs}
              listItems={listItems}
              type={"note"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
