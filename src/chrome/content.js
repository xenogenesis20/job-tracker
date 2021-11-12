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


    const jobTitle = document.querySelector("h2").innerText;


    const jobDetails = document.getElementById("job-details");
    let jobDetailsText = {
      jobTitle,
      jobDetails: jobDetails.innerText
    }
    
    response(jobDetailsText);
  }
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
