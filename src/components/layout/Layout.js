import "./Layout.css";
import Switch from "react-switch";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Outlet, useLocation, useNavigate  } from "react-router-dom";

function Layout({ handleThemeChange, theme }) {
  const [switchChecked, setSwitchChecked] = useState(true);
  const handleChange = (checked) => {
    setSwitchChecked(checked);
    if (checked) {
      handleThemeChange(["App-dark", "dark-theme"]);
    } else {
      handleThemeChange(["App-light", "light-theme"]);
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const location = useLocation();
  const navigate = useNavigate ();
  const closeMenu = () => {
    setClick(false);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  // const goToHomePage = () => {
  //   if (location.pathname !== "/") {
  //     history.push("/");
  //   }
  // };

  const offsetValue = -100;

  return (
    <div className={theme}>
      <nav className="navigationbar">
        <RouterLink
          to="/#projects-section-second"
          onClick={closeMenu}
          className="primary-font-color"
        >
          <img
            className="logo"
            src={"./icons/dawid-uniowski-logo.png"}
            alt="logo"
          />
        </RouterLink>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} className="primary-font-color" />
          ) : (
            <FaBars size={30} className="primary-font-color" />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            {/* <a href="/" onClick={closeMenu}> */}
            <Link
              to="curriculum-vitae"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={500}
              onClick={closeMenu}
              className="primary-font-color"
            >
              Curriculum Vitae
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects-react-js"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={500}
              onClick={closeMenu}
              className="primary-font-color"
            >
              Projekty React JS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects-android"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={300}
              onClick={closeMenu}
              className="primary-font-color"
            >
              Projekty Android - Java
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={300}
              onClick={closeMenu}
              className="primary-font-color"
            >
              Kontakt
            </Link>
          </li>
          <Switch
            className="theme-switch"
            onChange={handleChange}
            checked={switchChecked}
            checkedIcon={
              <img
                src="/icons/dark-theme.png"
                alt="Zaznaczony"
                height={28}
                width={28}
              />
            }
            uncheckedIcon={
              <img
                src="/icons/light-theme.png"
                alt="Zaznaczony"
                height={28}
                width={28}
              />
            }
            onColor="#222222"
            offColor="#c4c4c4"
          />
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
