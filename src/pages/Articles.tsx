import Header from "../components/Header";
import { CSSProperties } from "react";

const Articles = () => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);
  function handleResize() {
    let headerId = document.getElementById("Header");
    let fakeHeaderId = document.getElementById("FakeHeader");
    if (headerId && fakeHeaderId) {
      if (headerId.offsetHeight != fakeHeaderId.offsetHeight) {
        fakeHeaderId.setAttribute(
          "style",
          `position: relative; height: ${headerId.offsetHeight}px`
        );
        console.log(headerId.offsetHeight);
      }
    }
  }

  const pageContainer: CSSProperties = {
    height: "auto",
    position: "relative",
  };

  const descTopBoxText: CSSProperties = {
    margin: 0,
    marginTop: "5%",
    marginBottom: "5%",
    padding: 0,
    paddingTop: "5%",
    height: "auto",
    width: "100%",
  };
  const lightTextStyleL: CSSProperties = {
    padding: 0,
    margin: 0,
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: "5vw",
    textShadow: "-1px 1px 2px white",
    lineHeight: "110%",
    color: "white",
    textAlign: "start",
    position: "relative",
  };
  const lightTextStyleS: CSSProperties = {
    padding: 0,
    margin: 0,
    width: "100%",
    fontWeight: "bold",
    fontSize: "1vw",
    color: "white",
    textWrap: "stable",
    textAlign: "center",
  };
  return (
    <div>
      <div>
        <Header />
        <div
          id="FakeHeader"
          className="container-fluid bg-primary fade show"
        ></div>
        <div className="row bg-primary" style={pageContainer}>
          <div className="row" style={{ marginTop: "4%", marginBottom: "4%" }}>
            <div className="col-1"></div>
            <div className="col-5 p-0 m-0 d-flex justify-content-end">
              <p
                className="p-0 m-0"
                style={{
                  ...lightTextStyleL,
                  ...descTopBoxText,
                  textAlign: "center",
                }}
              >
                Articles
              </p>
            </div>
            <div className="col-1 p-0 m-0"></div>
            <div className="col-3 p-0" style={{ marginTop: "1%" }}>
              <p
                className="p-0 m-0"
                style={{
                  ...lightTextStyleS,
                  marginTop: "20%",
                  textAlign: "start",
                }}
              >
                Below are short, introductory articles on neurodiversity written
                and edited by Huskies for Neurodiversity members and students in
                the Disability Studies department at the University of
                Washington. This section also includes some articles on the
                lived experience of neurodivergent people. Special thanks to Dr.
                Sara Goering of the Disability Studies department for assistance
                with the editing process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
