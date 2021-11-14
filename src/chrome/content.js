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

    const jobInsights = document.querySelector(".mt2");

    const jobDetails = document.getElementById("job-details").innerText;

    let jobInsight = [];

    const getTextFromChildNodes = (parentNode) => {
      for (let i = 0; i < parentNode.childNodes.length; i++) {
        let child = parentNode.childNodes[i];
        if (child.nodeType !== 3 && child.childNodes) {
          getTextFromChildNodes(child);
        } else {
          let text = child.nodeValue;
          if (text.trim().length > 0) {
            jobInsight.push(text.trim());
          }
        }
      }
    };

    getTextFromChildNodes(jobInsights);

    let jobDetailsObj = {
      company: jobInsight[0],
      location: jobInsight[1],
      where: jobInsight[2] || "",
      posted: jobInsight[3],
      applicants: jobInsight[4] || "",
      jobTitleText,
      jobDetails,
    };
    console.log("jobDetailsObj", jobDetailsObj);
    response(jobDetailsObj);
  }
};

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
