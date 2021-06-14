import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      {/* <h5>Photo Credits:</h5>
        <a href="https://www.vadimdaniel.com/" className="footer-links">
          Vadimdaniel
        </a>
        <a href="https://www.kandco.photos/" className="footer-links">
          K&Co Photography
        </a> */}
      <div className="footer-self-credit">
        <h5>Talon Goulart 2021</h5>
        <label>Photo Credit on User Page:</label>
        <a href="https://www.kandco.photos/" className="footer-links">
          K&Co Photography
        </a>
      </div>
    </div>
  );
}
