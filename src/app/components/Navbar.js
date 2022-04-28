// Vendor
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <ul className="nav-bar">
          <li onClick={() => {navigate("/")}}>Home</li>
          <li onClick={() => {navigate("/about-us")}}>About us</li>
          <li onClick={() => {navigate("/contact")}}>Contact</li>
      </ul>
    </>
  );
}
