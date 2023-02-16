import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const currentTime = currentDate.getHours();

let greeting;

const customStyle = {
  color: " "
};
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "green";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "red";
} else {
  greeting = "Good Night";
  customStyle.color = "violet";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
