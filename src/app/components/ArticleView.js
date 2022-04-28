// Vendor
import { useNavigate } from 'react-router-dom';

// Shared components
import Button from '../shared/Button';

export default function ArticleView(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    props.setEnableView(false);
  }

  return (
    <>
      <div className='article-view'>
        <h3>{props.title}</h3>
        <span>{props.text}</span>
      </div>
      <Button buttonClick={() => {handleBack()}} buttonText={'Back'}  />
    </>
  )
}