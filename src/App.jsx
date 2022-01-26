import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

const App = () => {
  // States
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [scrapeData, setScrapeData] = useState({});

  // Local storage

  useEffect(() => {
    getLocalJobs();
  }, []);

  useEffect(() => {
    saveLocalJobs();
  }, [listItems]);

  const saveLocalJobs = () => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };

  const getLocalJobs = () => {
    if (localStorage.getItem("listItems") === null) {
      localStorage.setItem("listItems", JSON.stringify([]));
    } else {
      let localJobs = JSON.parse(localStorage.getItem("listItems"));
      setListItems(localJobs);
    }
  };
  return (
    <div className="App">
      <h1 className="my-3 text-center">Job Application Tracker</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        listItems={listItems}
        setListItems={setListItems}
        scrapeData={scrapeData}
        setScrapeData={setScrapeData}
      />
      <List listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default App;
