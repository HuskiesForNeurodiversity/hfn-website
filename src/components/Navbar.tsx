import { CSSProperties } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const navListStyle: CSSProperties = {
    height: "auto",
    width: "100%",
    padding: 0,
    margin: 0,
    marginTop: "1%",
    marginLeft: "5%",
    flexDirection: "row!important" as any,
  };

  const navItemStyle: CSSProperties = {
    fontSize: "1vw",
  };
  const defaultNav = "text-truncate nav-link p-0";
  const WelcomeNavLink = () => {
    return (
      <Link
        to={"/hfn-website/welcome"}
        className={
          location.pathname == "/hfn-website/welcome"
            ? `${defaultNav}  active`
            : defaultNav
        }
        style={navItemStyle}
      >
        Welcome
      </Link>
    );
  };

  const EventsNavLink = () => {
    return (
      <Link
        to={"/hfn-website/events"}
        className={
          location.pathname == "/hfn-website/events "
            ? `${defaultNav}  active`
            : defaultNav
        }
        style={navItemStyle}
      >
        Events and Advocacy
      </Link>
    );
  };
  const ExperienceNavLink = () => {
    return (
      <Link
        to={"/hfn-website/experience"}
        className={
          location.pathname == "/hfn-website/experience"
            ? `${defaultNav}  active`
            : defaultNav
        }
        style={navItemStyle}
      >
        Lived Experience Interview
      </Link>
    );
  };
  const ResourcesNavLink = () => {
    return (
      <Link
        to={"/hfn-website/resources"}
        className={
          location.pathname == "/hfn-website/resources"
            ? `${defaultNav}  active`
            : defaultNav
        }
        style={navItemStyle}
      >
        Resources and How to Get Involved
      </Link>
    );
  };
  return (
    <nav className="nav nav-underline flex-nowrap" style={navListStyle}>
      <WelcomeNavLink />
      <EventsNavLink />
      <ExperienceNavLink />
      {/*<ArticleNavLink />*/}
      <ResourcesNavLink />
    </nav>
  );
}

export default Navbar;
