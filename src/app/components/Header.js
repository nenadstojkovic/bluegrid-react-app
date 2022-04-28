// Components
import Navbar from './Navbar';

// Images
import logo from '../../assets/images/ns-logo.png';

// Styles
import '../../assets/styles/components.css'

export default function Header() {
  return (
      <div className="header">
          <img src={logo} alt='Nenad Stojković logo' />
          <Navbar />
      </div>
  );
}