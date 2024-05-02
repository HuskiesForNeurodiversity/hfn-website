import Header from "../components/Header";
import { CSSProperties } from "react";
import Carousel from "react-bootstrap/Carousel";

const Experience = () => {
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
  const textStyleBorder: CSSProperties = {
    textShadow:
      "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
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
                Lived Experience Interviews
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
                We have compiled video interviews with neurodivergent members of
                the University of Washington community about their lived
                experiences. Check them out at our YouTube channel linked below!
                Huge thanks to Carolyn Gasser and Brendon McCarroll for their
                audiovisual editing work.
              </p>
            </div>
          </div>
        </div>

        <div className="row bg-light" style={{ ...pageContainer }}>
          <div className="row" style={{ marginTop: "5%", marginBottom: "5%" }}>
            <div className="col-3"></div>
            <div className="col-5">
              <Carousel>
                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/aN7tCtYpJ2s?si=stSrGCHBE2sKidFR"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/b80iLHvoS9w?si=KS_jeqggDEi1lx_K"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1ELxDOT6BeM?si=s2haPxAVV-p_6wqu"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/n82raCo-arQ?si=Veh4GlOjEPC6QTcJ"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Carousel.Caption>
                    <h3 className="text-primary" style={textStyleBorder}>
                      Fourth slide label
                    </h3>
                    <p className="text-primary" style={textStyleBorder}>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/sWSC-p7QupE?si=iDTJpNwlIaFuEOmb"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/6gNM7JnTSQg?si=8QR89iTlGYAIGRFn"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/FwRcq2lZqdI?si=dA9eUii1icFay_VS"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/VxOYQf7O1s8?si=W3Wt_5vFKuREUSvG"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/u_i63BMwzGc?si=qZ6YmgvmJB0QFnAO"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/EN68kAhWRGI?si=zBTDj5rrLRJTmG1b"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/wqyaw7VQG9Y?si=QrhrRHjco1qffVwy"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/HbgbN_bJ6Ls?si=X5vp8QzU0q8cviLS"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/XN1PhqSAUNg?si=R3jc8jkij9BpYBjd"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/hpoExgRjlDw?si=odoQUn5mn8ToV-6m"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/a3RSlHczMFo?si=H20rf1VjdC5i0nyE"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/qNIkAalMPZY?si=0hffPrF9uPIzIYsu"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
