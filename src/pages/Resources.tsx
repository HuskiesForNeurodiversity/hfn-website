import Header from "../components/Header";
import { CSSProperties } from "react";

const Resources = () => {
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
  const textStyleL: CSSProperties = {
    padding: 0,
    margin: 0,
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: "5vw",
    lineHeight: "110%",
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
                Resources and Involvement
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
                Need resources? Want to know how to get involved with Huskies
                for Neurodiversity? Check out our resource list and our social
                media pages linked below!
              </p>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0 bg-light" style={pageContainer}>
          <div className="row m-0 p-0">
            <div className="col-2"></div>
            <div className="col" style={{ marginLeft: "0.61%" }}>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleL,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Resources
              </p>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-2"></div>
            <div className="col-8" style={{ marginLeft: "0.9%" }}>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                On-Campus Disability Resources for University of Washington
                Students
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://sdc.asuw.org/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Disability Resources for Students:
                </a>{" "}
                Go here to apply for accommodations like extended testing,
                accessible housing, etc. The physical office is in the basement
                of Mary Gates Hall.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="http://depts.washington.edu/dcenter/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  UW D Center:
                </a>{" "}
                A space where students can study, organize, rest and attend
                events and programs focusing on supporting and celebrating
                disability and D/deaf communities at the UW and beyond! Located
                at the HUB.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="http://sdc.asuw.org/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Student Disability Commission:
                </a>{" "}
                ASUW commission that advocates for disabled UW students. They
                collect resources for students and host events sometimes.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://huskies-for-neurodiversity.webflow.io/resources#http://sdc.asuw.org/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  UW Disability Advocacy Student Alliance:
                </a>{" "}
                Student group for disabled students and allies.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://huskies-for-neurodiversity.webflow.io/resources#http://students.washington.edu/dasa/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  UW DO-IT:
                </a>{" "}
                Resources on disability rights, accessibility, universal design,
                and more. They also host AccessSTEM, AccessComputing and other
                technology resources that connect disabled students to
                internships and provide training for educators.{" "}
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Accessible Tech
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="http://depts.washington.edu/uwdrs/current-students/accommodations/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  DRS list of Example Accommodations:
                </a>{" "}
                Need help brainstorming what accommodations you need? Check out
                this list!
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://www.washington.edu/accesstech/policy-resources/guidelines/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  UW IT Accessibility Guidelines:
                </a>{" "}
                Info on accessibility options in technologies that UW uses, such
                as Canvas, Zoom, and Microsoft Office.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://luminantsoftware.com/apps/audionote-notepad-and-voice-recorder/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  AudioNote:
                </a>{" "}
                Record audio from lectures while taking notes (to use this, you
                need DRS approval or instructor permission).
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://notability.com/ "
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Notability:
                </a>{" "}
                Notetaking application that allows you to connect written notes
                to audio recordings of lectures.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://us.livescribe.com/collections/smartpens"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Smart Pen:
                </a>{" "}
                Records audio while taking notes in a paper notebook. The pen
                records a digital version of notes and can be referenced online.
                DRS provides these to students.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://itconnect.uw.edu/learn/accessible/atc/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Access Technology Center:
                </a>{" "}
                Provides accessible computing resources to UW students. The main
                office is in Mary Gates Hall, but there are also specialized
                workstations in Odegaard and Suzzallo.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Off-Campus Advocacy
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://www.autistichoya.com/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Lydia X. Z. Brown
                </a>{" "}
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://brownstargirl.org/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Leah Lakshmi Piepzna
                </a>{" "}
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://autisticadvocacy.org/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  ASAN
                </a>{" "}
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="http://www.autreat.com/dont_mourn.html"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  “Don’t Mourn for Us" Jim Sinclair
                </a>{" "}
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                <a
                  className="p-0 m-0 text-primary"
                  href="https://autisticadvocacy.org/book/navigating-college/"
                  style={{
                    ...textStyleS,
                    ...descTopBoxText,
                    textAlign: "start",
                  }}
                >
                  Navigating College: A Handbook on Self Advocacy
                </a>{" "}
              </p>
              <span>&#8203;</span>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-2"></div>
            <div className="col" style={{ marginLeft: "0.61%" }}>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleL,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Email Templates
              </p>
            </div>
            <div className="col">
              <a href="\assets\HFN Email Templates.txt" target="_blank">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  style={{ marginTop: "5%", marginLeft: "45%" }}
                >
                  Download
                </button>
              </a>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-2"></div>
            <div className="col-8" style={{ marginLeft: "0.9%" }}>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Finding a Therapist:
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Subject Line: Openings for New Clients
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Hi [Name],
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                My name is [name], and I’m currently looking for a therapist for
                help with [1-2 specific issues]. I have insurance via [insurance
                provider]. Do you currently have any openings for new clients,
                and if so would you be willing to set up a short phone consult?
                If not, do you have any referrals for local therapists who might
                be a good fit?
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Thank you, [Your name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                NOTE: If you do not have insurance or if you know this provider
                does not take your insurance, you can ask if they have sliding
                scale options instead. This typically means the fee they charge
                you will be based on your income level.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Emailing a Professor or TA for an extension:
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Subject Line: Extension on [Assignment]?
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Dear Professor [Name],
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                This is [name] from your [course] class. I’m behind on
                schoolwork this week and am concerned I will not be able to
                complete [assignment] by the deadline. Would it be possible for
                me to have an extension? I think I can get it done by [day and
                time]. Thank you and see you in class.{" "}
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Sincerely, [Your name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                NOTE: You can give the details of your situation (e.g. health
                issues, family emergency) if you want, but you are not obligated
                to tell instructors anything private. It is best to ask for an
                extension as soon as you think you might need one (usually a few
                days before the deadline). Try to avoid asking for extensions
                less than 24 hours before an assignment is due. Also, keep in
                mind that many professors will not check their email outside of
                work hours.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Asking for Informal Accommodations:
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Subject Line: Course Access?
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Dear Professor [Name],
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                This is [name] from your [course] class. I wanted to let you
                know I [am disabled/have had health issues recently] and it has
                been affecting my academics. In particular, I’ve been struggling
                with [examples]. [I am working on getting formal accommodations
                but they will take several months to implement/I am not able to
                access DRS accommodations because of xyz.] Could we meet to
                discuss alternative options so I can better engage with your
                course?
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Sincerely, [Your name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                NOTE: Professors are not obligated to grant accommodation
                requests informally, but you can still ask. They are more likely
                to say yes if your requests are minor and easy for them to
                accommodate (e.g. asking to have your video off in Zoom meetings
                or the ability to step out periodically to take medications
                during the discussion section). Also note that many abled
                professors are unaware of how difficult the accommodations
                process can be (e.g., requiring additional expensive testing
                even for people with existing diagnoses, or taking a long time
                for all the paperwork to go through), so it helps if you explain
                why formal accommodations are not an option.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Letting a Professor or TA Know Your Name/Pronouns– Quarter
                Start:
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Dear [Name],
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                I’ll be in your [course] class this quarter. I just wanted to
                let you know my name is listed as [birth name] on the course
                list, but I go by [preferred name] and use [pronouns]. Please
                use those in class and any other time you see me. Thank you, and
                I look forward to your class.
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Sincerely, [Preferred name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Meeting with a Professor Outside of Their Office Hours:
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Dear [Name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                This is [name] from your [course] class. I was hoping to meet
                with you sometime in the next [time interval] to discuss
                [topic], but unfortunately, I am busy during your office hours.
                Do you have any other availability to meet with me? Thank you,
                [Name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Sincerely, [Preferred name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Confirming that Your Professor/TA is Aware You Have
                Accommodations Email version:
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Dear [Name],
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                This is [name] from your [course] class. I was hoping to meet
                with you sometime in the next [time interval] to discuss
                [topic], but unfortunately, I am busy during your office hours.
                Do you have any other availability to meet with me? Thank you,
                [Name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                Sincerely, [Preferred name]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleM,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                In-person version (ask after class or during office hours):
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                ‍“Hi, I requested DRS accommodations for this class, so I just
                wanted to make sure you got that email?”
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                [Wait for the instructor to confirm they received it or look
                through their email. DRS emails sometimes get lost or sent to
                spam, so you may need to resend them.]
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                “Okay, did you have any questions about how those work?”
              </p>
              <span>&#8203;</span>
              <p
                className="p-0 m-0 text-primary"
                style={{
                  ...textStyleS,
                  ...descTopBoxText,
                  textAlign: "start",
                }}
              >
                [If they have questions, answer them. If you don’t know the
                answer or if you’re getting pushback, tell them you’ll email
                your DRS coordinator and get back to them.]{" "}
              </p>
              <span>&#8203;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
