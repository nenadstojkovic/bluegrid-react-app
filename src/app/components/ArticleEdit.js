// Vendor
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Shared components
import Button from '../shared/Button';
import Input from '../shared/Input';
import Textarea from '../shared/Textarea';

// Services
import { WipMessage } from '../services/WipMessage';

// Styles
import '../../assets/styles/pages.css';
import '../../assets/styles/shared.css';

export default function ArticleEdit(props) {

  const [item, setItem] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    props.setEnableEdit(false);
  }

  const handleTitleChanges = (e) => {
    e.target.value = props.title;
    setTitle(e.target.value);
  }
  const handleTextChanges = (e) => {
    e.target.value = props.text;
    setText(e.target.value);
  }

  const handleSave = () => {
    WipMessage();
  }


    return (
      <div className='article-wrapper'>
        <Button buttonClick={() => {handleBack()}} buttonText={'Back'}  />
        <div className='article-edit'>
          <Input fieldType='text' fieldPlaceholder='Article title' value={props.title} fieldOnChange={(event) => handleTitleChanges(event)} />
          <Textarea placeholder='Article text' value={props.text} fieldOnChange={(event) => handleTextChanges(event)} />
          <Button buttonTitle='Save' buttonText='Save article' buttonClass='save' buttonClick={() => handleSave()} />
        </div>
      </div>
    );
}