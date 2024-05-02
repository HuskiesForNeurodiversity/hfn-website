import { CSSProperties } from "react";
import Navbar from "./Navbar";

function Header() {
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    let headerId = document.getElementById("Header");
    if (headerId) {
      if (window.scrollY > 140) {
        (headerId as HTMLFormElement).className =
          "container-fluid p-0 bg-light fade";
      } else if (window.scrollY < 140) {
        (headerId as HTMLFormElement).className =
          "container-fluid p-0 bg-light fade show";
      }
    }
  }

  const headerBoxStyle: CSSProperties = {
    height: "auto",
    position: "fixed",
    zIndex: 100,
  };

  const logoStyle: CSSProperties = {
    padding: 0,
    margin: 0,
    marginLeft: "10%",
    height: "auto",
    width: "70%",
  };

  const textBoxStyle: CSSProperties = {
    padding: 0,
    margin: 0,
    marginLeft: "10%",
    height: "auto",
    width: "100%",
  };

  const headerTextStyle: CSSProperties = {
    padding: 0,
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.5vw",
    textShadow: "-1px 1px 2px white",
    lineHeight: "110%",
    textAlign: "start",
    position: "relative",
  };

  return (
    <div
      id="Header"
      className="container-fluid bg-light fade show"
      style={headerBoxStyle}
    >
      <div
        className="row row-cols-auto"
        style={{ marginTop: "2%", marginLeft: "2.5%" }}
      >
        <div className="col-1 p-0 p-0 m-0 d-flex justify-content-end align-self-center">
          <img style={logoStyle} src="/HFNLOGO.png" alt="HFN Logo"></img>
        </div>
        <div className="col-1 p-0">
          <div style={textBoxStyle}>
            <p className="text-primary text-nowrap" style={headerTextStyle}>
              Huskies
            </p>
            <p className="text-primary text-nowrap" style={headerTextStyle}>
              for Neurodiversity
            </p>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
