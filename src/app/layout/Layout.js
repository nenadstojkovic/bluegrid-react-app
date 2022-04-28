// Components
import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
        <div className='page-wrapper'>
          {props.children}
        </div>
      <Footer />
    </>
  );
}