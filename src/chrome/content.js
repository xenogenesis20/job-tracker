/* eslint-disable no-undef */
/*global chrome*/
const messagesFromReactAppListener = (request, sender, response) => {
  console.log("[content.js]. request received", {
    request,
    sender,
  });

  if (
    sender.id === chrome.runtime.id &&
    request.from === "React" &&
    request.message === "Hello from React"
  ) {
    response("Hello from content.js");
  }

  if (
    sender.id === chrome.runtime.id &&
    request.from === "React" &&
    request.message === "copy job"
  ) {
    // create snapshot of the DOM
    // const snapshot = document.createElement("html");
    // snapshot.innerHTML = document.documentElement.innerHTML;
    // const jobDetails = snapshot.querySelector("#job-details");

    const jobDetails = document.querySelector("#job-details");
    console.log("jobDetails", jobDetails.innerHTML);
    // Get all information from jobDetails
    const jobTitle = jobDetails.querySelector("h1").innerText;
    const companyName = jobDetails.querySelector("h2").innerText;
    const jobDescription =
      jobDetails.querySelector("#job-description").innerText;
    const jobLocation = jobDetails.querySelector("#job-location").innerText;
    const jobDate = jobDetails.querySelector("#job-date").innerText;
    const jobUrl = jobDetails.querySelector("#job-url").innerText;

    // create a new job object
    const job = {
      title: jobTitle,
      company: companyName,
      description: jobDescription,
      location: jobLocation,
      date: jobDate,
      url: jobUrl,
    };

    // send job object to App.js
    chrome.runtime.sendMessage({
      from: "content",
      message: "job",
      job,
    });
  }
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
