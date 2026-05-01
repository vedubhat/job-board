import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header" style={{width: "80vw",height: "10vh", margin: "auto", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h1>HN Jobs</h1>
      </header>
    </>
)
}

export default Header;