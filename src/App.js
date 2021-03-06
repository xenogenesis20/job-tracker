/* eslint-disable no-undef */
/*global chrome*/

import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [url, setUrl] = useState("");
  const [responseFromContent, setResponseFromContent] = useState("");
  const [jobInfo, setJobInfo] = useState();

  //gets current tab url
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://apis.google.com/js/client.js?onload=onGAPILoad";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  //sends message to content script
  const sendTestMessage = () => {
    const message = {
      from: "React",
      message: "Hello from React",
    };

    const queryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const currentTabId = tabs[0].id;

        chrome.tabs.sendMessage(currentTabId, message, (response) => {
          setResponseFromContent(response);
        });
      });
  };

  const copyJobInformation = () => {
    const message = {
      from: "React",
      message: "copy job",
    };

    const queryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const currentTabId = tabs[0].id;
        chrome.tabs.sendMessage(currentTabId, message, (response) => {
          // setResponseFromContent(response);
          setJobInfo(response);
          console.log(response);
        });
      });
  };

  // receive message from content.js
  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.from === "content") {
        console.log(request, sender, sendResponse);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>URL: </p>
        <p>{url}</p>
        <button onClick={sendTestMessage}>TEST</button>
        <button onClick={copyJobInformation}>Copy Job Details</button>
        <p>Response from content:</p>
        <p>{responseFromContent}</p>
      </header>
    </div>
  );
}

export default App;
