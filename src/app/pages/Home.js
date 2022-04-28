// Components
import Article from '../components/Article';

// Shared components
import Button from '../shared/Button';

// Services
import { WipMessage } from '../services/WipMessage';

// Styles
import '../../assets/styles/pages.css';
import '../../assets/styles/shared.css';

export default function Home() {

  return (
    <>
      <Article />
      <Button buttonTitle='Add new article' buttonClass='add' buttonText='Add new article' buttonClick={WipMessage} />
    </>
  );
}
