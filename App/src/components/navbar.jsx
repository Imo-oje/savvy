import { Link } from "react-router-dom";
import { SiBinance } from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";

function Navbar() {
  let LogoIconStyles = { color: "#E5C232", fontSize: "1.5em" };

  return (
    <>
      <nav className="navbar">
        <div>
          <SiBinance style={LogoIconStyles} />
          <h1>Binance</h1>
        </div>
        <ul>
          <li>
            <a href="">Buy Crypto</a>
          </li>
          <li>
            <a href="">Trade</a>
          </li>
          <li className="flex items-center hover:text-primary cursor-pointer font-medium p-2">
            Invest
          </li>
          <li className="flex items-center hover:text-primary cursor-pointer font-medium p-2">
            Contact
          </li>
          <li className="flex items-center hover:text-primary cursor-pointer font-medium p-2">
            <a href="">More</a>
            <RiArrowDropDownLine />
          </li>
        </ul>
        <ul>
          <li>
            <Link to="login">Log In</Link>
          </li>
          <li>
            <Link to="register" href="register">
              Register
            </Link>
          </li>
          <li>
            <GrLanguage />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
