import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Loader from "./Components/Loader";

const App = () => {
  // States
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [scrapeData, setScrapeData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadingToggler = () => {
    if (isLoading === false) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

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
      <Loader isLoading={isLoading} />
      <h1>Hello React</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        listItems={listItems}
        setListItems={setListItems}
        scrapeData={scrapeData}
        setScrapeData={setScrapeData}
        isLoading={isLoading}
        isLoading={isLoading}
        loadingToggler={loadingToggler}
      />
      <List listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default App;
