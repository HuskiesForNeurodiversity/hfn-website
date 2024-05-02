import Header from "../components/Header";
import { CSSProperties } from "react";
const Events = () => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("pageshow", handleResize);
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
  const textStyleS: CSSProperties = {
    padding: 0,
    margin: 0,
    width: "100%",
    fontWeight: "bold",
    fontSize: "1vw",
    textWrap: "stable",
    textAlign: "center",
  };
  const textStyleM: CSSProperties = {
    padding: 0,
    margin: 0,
    width: "100%",
    fontWeight: "bold",
    fontSize: "2vw",
    textWrap: "stable",
    textAlign: "center",
  };
  return (
    <div>
      <div>
        <Header />
        <div className="row bg-primary" style={pageContainer}>
          <div className="row" style={{ marginTop: "8%" }}></div>
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
                Events and Advocacy
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
                Huskies for Neurodiversity holds social and educational events
                in-person at the University of Washington and on Zoom for the
                broader neurodivergent community. Recordings of our panels and
                descriptions of our social events can be found down below!
              </p>
            </div>
          </div>
        </div>

        <div className="row bg-light" style={{ ...pageContainer }}>
          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-3" style={{ width: "10%" }}></div>
            <div className="col">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/sWSC-p7QupE?si=TjmAotVWTfwJl91q"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col">
              <p
                className="text-primary"
                style={{
                  ...textStyleM,
                  textAlign: "start",
                }}
              >
                Intersectional Identities Panel 2023
              </p>
              <p
                className="text-primary"
                style={{
                  ...textStyleS,
                  textAlign: "start",
                }}
              >
                Panelists discussed how neurodiversity interacts with other
                identities they hold as queer folks, people of color, university
                students, and disability advocates. Financial support and free
                pizza generously provided by the Neuroscience for Neurodiverse
                Learners project of UW DO-IT.
              </p>
            </div>
            <div className="col-3" style={{ width: "10%" }}></div>
          </div>

          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-3" style={{ width: "10%" }}></div>
            <div className="col">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/a3RSlHczMFo?si=lwwg4vYeXRKnKkaQ"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col">
              <p
                className="text-primary"
                style={{
                  ...textStyleM,
                  textAlign: "start",
                }}
              >
                Neurodivergent Career Panel 2022
              </p>
              <p
                className="text-primary"
                style={{
                  ...textStyleS,
                  textAlign: "start",
                }}
              >
                Neurodivergent panelists from a variety of fields discussed
                their experience navigating the transition from higher education
                to the workplace as a neurodivergent person.
              </p>
            </div>
            <div className="col-3" style={{ width: "10%" }}></div>
          </div>

          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-3" style={{ width: "10%" }}></div>
            <div className="col">
              <div className="ratio ratio-16x9">
                <img
                  className="m=0 p-0"
                  src="../assets/eventsimages.png"
                  style={{ marginLeft: "25%", maxWidth: "50%" }}
                ></img>
              </div>
            </div>
            <div className="col" style={{ marginTop: "5%" }}>
              <p
                className="text-primary"
                style={{
                  ...textStyleM,
                  textAlign: "start",
                }}
              >
                Social Events
              </p>
              <p
                className="text-primary"
                style={{
                  ...textStyleS,
                  textAlign: "start",
                }}
              >
                We hold various sensory-friendly, lowkey social events that give
                neurodivergent students a space to meet each other throughout
                the year. These events feature a variety of activities, such as
                arts and crafts, games, and general meetups. Follow us on
                Instagram at @huskiesforneurodiversity to learn more about our
                past and upcoming socials! Feel free to reach out to us via
                email at huskies4neurodiverse@gmail.com if you would like to
                collaborate with us!
              </p>
            </div>
            <div className="col-3" style={{ width: "10%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
