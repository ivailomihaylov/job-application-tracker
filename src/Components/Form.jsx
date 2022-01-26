import React, { useEffect, useRef, useContext } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { NotificationContext } from "./Notifications/NotificationProvider";

const Form = ({
  inputText,
  setInputText,
  listItems,
  setListItems,
  scrapeData,
  setScrapeData,
}) => {
  // Notification dispatch
  const dispatch = useContext(NotificationContext);
  const firstUpdate = useRef(true);
  useEffect(() => {
    setInputText("");
  }, []);

  // Form Submit
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://job-application-track.herokuapp.com/scraper",
      params: {
        url: inputText,
      },
    };
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        type: "SUCCESS",
        message: `Submitting...`,
      },
    });
    axios
      .request(options)
      .then((response) => {
        setScrapeData(response.data);
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: v4(),
            type: "ERROR",
            message: `${error}. Please try again in a few minutes.`,
          },
        });
      });
    setInputText("");
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      setListItems([
        {
          company: scrapeData.company,
          position: scrapeData.position,
          image: scrapeData.image,
          id: scrapeData.id,
          timestamp: scrapeData.timestamp,
        },
        ...listItems,
      ]);

      // Notification

      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: v4(),
          type: "SUCCESS",
          message: `New entry added `,
        },
      });
    }
  }, [scrapeData]);

  return (
    <div>
      <form className="d-flex justify-content-center ">
        <div className="col-auto">
          <label htmlFor="url" className="visually-hidden">
            URL
          </label>
          <input
            placeholder="Place URL here"
            value={inputText}
            type="url"
            name="url"
            onChange={(e) => setInputText(`${e.target.value}`)}
          />
        </div>
        <div className="col-auto">
          <button
            onClick={formSubmitHandler}
            type="submit"
            className="btn btn-primary mb-3"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
