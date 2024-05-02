import { CSSProperties } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Welcome() {
  //const windowHeight = window.innerHeight;

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
  const descTopBoxLogo: CSSProperties = {
    margin: 0,
    padding: 0,
    width: "50%",
    height: "auto",
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
      <Header />
      <div
        id="FakeHeader"
        className="container-fluid bg-primary fade show"
      ></div>
      <div className="row bg-primary" style={pageContainer}>
        <div className="row" style={{ marginTop: "2%" }}>
          <div className="col-5 p-0 m-0 d-flex justify-content-end align-self-center">
            <img
              src="hfn-website/assets/HFNLOGO.png"
              alt="HFN Logo"
              style={descTopBoxLogo}
            ></img>
          </div>
          <div className="col p-0 m-0">
            <p style={lightTextStyleL}>Huskies for</p>
            <p style={lightTextStyleL}>Neurodiversity</p>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-center">
            <p
              className="p-0 m-0"
              style={{ ...lightTextStyleS, ...descTopBoxText }}
            >
              A University of Washington organization by and for neurodivergent
              students.
            </p>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-end align-self-center">
            <button
              type="button"
              className="btn btn-secondary btn-large"
              style={{
                marginRight: "5%",
                marginTop: "2.5%",
                marginBottom: "2.5%",
              }}
            >
              Our Archived Work
            </button>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-start">
            <button
              type="button"
              className="btn btn-secondary btn-large"
              style={{
                marginLeft: "5%",
                marginTop: "2.5%",
                marginBottom: "2.5%",
              }}
            >
              Contact Info
            </button>
          </div>
        </div>
      </div>

      <div className="row bg-light" style={pageContainer}>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-end align-self-center">
            <p
              className="text-primary"
              style={{ ...textStyleM, marginTop: "4%", marginBottom: "2.5%" }}
            >
              Our Work
            </p>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 ">
            <Link
              to="/hfn-website/events"
              className=" p-0 m-0 d-flex justify-content-end"
            >
              <button
                type="button"
                className="btn btn-primary btn-large"
                style={{
                  marginTop: "2.5%",
                  marginBottom: "2.5%",
                  width: "45%",
                }}
              >
                Events
              </button>
            </Link>
          </div>
          <div className="col p-0 m-0 ">
            <Link
              to="/hfn-website/experience"
              className=" p-0 m-0 d-flex justify-content-end"
            >
              <button
                type="button"
                className="btn btn-primary btn-large"
                style={{
                  marginTop: "2.5%",
                  marginBottom: "2.5%",
                  width: "45%",
                }}
              >
                Lived Experience Interviews
              </button>
            </Link>
          </div>
          <div className="col p-0 m-0">
            <a className="p-0 m-0 d-flex justify-content-start" href="events">
              <button
                type="button"
                className="btn btn-primary btn-large"
                style={{
                  marginTop: "2.5%",
                  marginBottom: "2.5%",
                  width: "45%",
                }}
              >
                Events and Advocacy
              </button>
            </a>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-end">
            <p
              style={{ ...textStyleS, marginLeft: "55%", marginBottom: "2.5%" }}
            >
              We have given neurodivergent individuals and Disability Studies
              scholars the opportunity to showcase their scholarly work and
              personal experiences with neurodiversity in short, digestible
              articles.
            </p>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-center">
            <p
              style={{
                ...textStyleS,
                marginLeft: "22.5%",
                marginRight: "22.5%",
                marginBottom: "2.5%",
              }}
            >
              In the 2021-2022 school year, we conducted several video
              interviews with neurodivergent members of the University of
              Washington community about their lived experiences.
            </p>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-start">
            <p
              style={{
                ...textStyleS,
                marginRight: "55%",
                marginBottom: "2.5%",
              }}
            >
              We hold both hybrid and in-person events throughout the school
              year, including socials, educational panels, and outreach events,
              to provide a space for neurodivergent individuals to connect with
              others in the community.
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-light" style={pageContainer}>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-end align-self-center">
            <p
              className="text-primary"
              style={{ ...textStyleM, marginTop: "4%", marginBottom: "2.5%" }}
            >
              Communication
            </p>
          </div>
        </div>

        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-center">
            <a href="mailto:huskies4neurodiverse@gmail.com">
              <img
                className="m=0 p-0"
                src="hfn-website/assets/emailIcon.png"
                alt="Email icon"
                style={{ ...descTopBoxLogo, marginLeft: "175%" }}
              ></img>
            </a>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-center">
            <a href="https://www.instagram.com/hfnuw/" target="_blank">
              <img
                className="m=0 p-0"
                src="hfn-website/assets/instagramLogo.png"
                alt="Instagram icon"
                style={{ ...descTopBoxLogo, width: "8%", marginLeft: "46%" }}
              ></img>
            </a>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-start">
            <a href="https://discord.gg/yxspf8aewR" target="_blank">
              <img
                className="m=0 p-0"
                src="hfn-website/assets/discordIcon.png"
                alt="Discord icon"
                style={{ ...descTopBoxLogo, width: "8%", marginLeft: "20%" }}
              ></img>
            </a>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-end">
            <p
              style={{ ...textStyleS, marginLeft: "55%", marginBottom: "25%" }}
            >
              huskies4neurodiverse@gmail.com
            </p>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-center">
            <p
              style={{
                ...textStyleS,
                marginLeft: "22.5%",
                marginRight: "22.5%",
                marginBottom: "2.5%",
              }}
            >
              @huskiesforneurodiversity on Instagram
            </p>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-start">
            <p
              style={{
                ...textStyleS,
                marginRight: "55%",
                marginBottom: "2.5%",
              }}
            >
              For an online space to meet neurodivergent UW students
            </p>
          </div>
        </div>
      </div>

      <div className="row bg-primary" style={pageContainer}>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-end align-self-center">
            <p
              className="text-light"
              style={{ ...textStyleM, marginTop: "4%", marginBottom: "2.5%" }}
            >
              Acknowledgements
            </p>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-center">
            <img
              className="m-0 p-0"
              src="hfn-website/assets/Screenshot 2023-07-11 225513.png"
              alt="Images of Acknowledgements"
              style={{ width: "25%", height: "auto" }}
            ></img>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0 m-0 d-flex justify-content-center">
            <p
              className="text-light"
              style={{
                ...textStyleM,
                marginLeft: "18%",
                marginRight: "18%",
                marginBottom: "2.5%",
                marginTop: "2.5%",
              }}
            >
              We would like to give special thanks to our faculty and
              organizational collaborators, specifically Katy DeRosier, Dr. Sara
              Goering, Dr. Jason Naranjo, Dr. Hala Annabi, the UW Husky Seed
              Fund, UW DO-IT, and ASUW SDC.
            </p>
          </div>
        </div>
      </div>

      <div className="row bg-light" style={pageContainer}>
        <div className="row m-0 p-0">
          <div className="col p-0 d-flex justify-content-center">
            <form style={{ marginRight: "30%" }}>
              <div
                className="row text-primary"
                style={{ marginTop: "10%", marginRight: "20%" }}
              >
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "2vw",
                    textWrap: "nowrap",
                  }}
                >
                  I want to get involved!
                </p>
              </div>
              <div className="row" style={{ marginTop: "10%" }}>
                <div className="col">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="col">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>
              <div className="row" style={{ marginTop: "10%" }}>
                <div className="col">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div className="row" style={{ marginTop: "10%" }}>
                <div className="col">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></textarea>
                </div>
                <div className="row" style={{ marginTop: "10%" }}>
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        marginTop: "2.5%",
                        marginBottom: "2.5%",
                        width: "106%",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col p-0 m-0 d-flex justify-content-center">
            <img
              className="m-0 p-0"
              src="hfn-website/assets/HfN community image.png"
              alt="Images of Acknowledgements"
              style={{
                width: "80%",
                height: "auto",
                zIndex: 100,
                position: "absolute",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
