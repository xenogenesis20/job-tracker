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
    const jobTitleText = document.querySelector("h2.t-24.t-bold").innerText;

    const companyNameAndLocation = document.querySelector(
      "span.jobs-unified-top-card__subtitle-primary-grouping.mr2.t-black"
    );

    const jobDetails = document.getElementById("job-details").innerText;

    console.log("jobTitleText", jobTitleText);
    console.log("companyNameAndLocation", companyNameAndLocation);
    console.log("jobDetails", jobDetails);
    let jobDetailsText = {
      jobTitleText,
      jobDetails,
    };

    response(jobDetailsText);
  }
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
