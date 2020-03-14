import React from "react";

function Footer() {
  var date = new Date();
  return <footer> Hallo {date.getFullYear()} </footer>;
}

export default Footer;
