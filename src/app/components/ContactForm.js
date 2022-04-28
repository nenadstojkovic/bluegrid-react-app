// Vendor
import { useState } from 'react';

// Services
import { TextValidation } from '../services/TextValidation';
import { EmailValidation } from '../services/EmailValidation';
import { ErrorValidation } from '../services/ErrorValidation';

// Components
import ContactMessage from './ContactMessage';

// Shared components
import Input from '../shared/Input';
import Textarea from '../shared/Textarea';
import Button from '../shared/Button';

// Styles
import '../../assets/styles/pages.css';

export default function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [checkFormValidation, setCheckFormValidation] = useState(false);

  const saveName = (e) => setName(e.target.value);
  const saveEmail = (e) => setEmail(e.target.value);
  const saveQuestion = (e) => setQuestion(e.target.value);

  const submitForm = () => {
    if (TextValidation(name) && EmailValidation(email) && TextValidation(question)) {
      setCheckFormValidation(true);
    } else {
      ErrorValidation("Please check and fill all fields!", "error", "center", 4000);
    }
  }

  return (
    <>
      {
        checkFormValidation
          ?
            <ContactMessage name={name} email={email} question={question} />
          :
            <div className='form-wrapper'>
              <h3>Contact us</h3>
              <Input fieldPlaceholder='Your name' fieldType='text' fieldOnChange={(event) => {saveName(event)}} />
              <Input fieldPlaceholder='Your email' fieldType='email' fieldOnChange={(event) => {saveEmail(event)}}/>
              <Textarea placeholder='Your question' fieldOnChange={(event) => {saveQuestion(event)}}/>
              <Button buttonTitle='Contact us' buttonText='Send' buttonClass='send' buttonClick={() => {submitForm()}}  />
            </div>
      }
    </>
  );
}