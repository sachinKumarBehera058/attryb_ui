import React, { useState } from 'react';
import {
  Navbar,
  Button,
  AlertPopup,
  AlertPopupHeader,
  AlertPopupBody,
  AlertPopupFooter,
  useModal,
  FieldGroup,
  FieldLabel,
  InputField,
  Alert,
} from '@attrybtech/attryb-ui';
import "./Navbar.css";

const NavBar = ({ addTweet }) => {
  const { modalState, modalRef, exitModal, showModal } = useModal();
  const [value, setValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertTheme, setAlertTheme] = useState('success');
  const maxChars = 160;

  const modalOkayHandler = () => {
    addTweet(value);
    setValue('');
    setShowAlert(true);
    setAlertTheme('success');
    exitModal();
  };

  const modalCancelHandler = () => {
    setValue('');
    exitModal();
  };

  const handleInputChange = (event) => {
    const val = event?.target?.value;
    if (val.length <= maxChars) {
      setValue(val);
    }
  };

  return (
    <Navbar className='nav-com'
      navbarLeftSection={
        <div className='left-navbar'>
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Moments </a>
            </li>
            <li>
              <a href="#"> Notifications </a>
            </li>
            <li> <a href="#"> Messages <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/292px-Logo_of_Twitter.svg.png' alt=''></img> </a>
            </li>
          </ul>
        </div>
      }
      navbarRightSection={
        <nav className='navbar'>
          <div className='tweet-btn'>
            <Button onClick={showModal}>Tweet</Button>
            <AlertPopup
              wrapperRef={modalRef}
              name='example-popup-1'
              visibility={modalState}
              onBackdropClick={modalCancelHandler}
            >
              <AlertPopupHeader>Write your tweet</AlertPopupHeader>
              <AlertPopupBody>
                <FieldGroup name='sample-text-field'>
                  <FieldLabel name='nnnn'>
                    Enter Tweet
                  </FieldLabel>
                  <InputField
                    name='input-one'
                    state={'default'}
                    placeholder={'Write here...'}
                    preFilledValue={value}
                    maxCharsLimit={maxChars}
                    onChange={handleInputChange}
                  />
                  <p>Character count: {value.length}/{maxChars}</p>
                </FieldGroup>
              </AlertPopupBody>
              <AlertPopupFooter>
                <Button onClick={modalCancelHandler} variant='link'>
                  Cancel
                </Button>
                <Button onClick={modalOkayHandler}>Post</Button>
              </AlertPopupFooter>
            </AlertPopup>
            {showAlert && (
              <Alert content="Tweet posted successfully!" theme={alertTheme} />
            )}
          </div>
        </nav>
      }
    />
  );
};

export default NavBar;
