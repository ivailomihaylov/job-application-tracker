import React, { useEffect, useRef } from "react";
import axios from "axios";
const Form = ({
  inputText,
  setInputText,
  listItems,
  setListItems,
  scrapeData,
  setScrapeData,
  setIsLoading,
  isLoading,
  loadingToggler,
}) => {
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
    loadingToggler();
    console.log(`Loading set to ${isLoading}`);
    console.log("Loading...");
    axios
      .request(options)
      .then((response) => {
        setScrapeData(response.data);
        console.log("Done!");
      })
      .catch((error) => {
        console.error(error);
      });
    setInputText("");
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      setListItems([
        ...listItems,
        {
          company: scrapeData.company,
          position: scrapeData.position,
          image: scrapeData.image,
          id: scrapeData.id,
          timestamp: scrapeData.timestamp,
        },
      ]);

      loadingToggler();
    }
  }, [scrapeData]);

  return (
    <div>
      <form className="row g-3 justify-content-center">
        <div className="col-auto">
          <label htmlFor="url" className="visually-hidden">
            URL
          </label>
          <input
            value={inputText}
            type="text"
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
