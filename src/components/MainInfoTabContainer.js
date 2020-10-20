import React, { useState } from 'react';
import InfoDisplay from './InfoDisplay';
import PasswordDisplay from './PasswordDisplay';
import submitToServer from './submitToServer';

export default function MainInfoTabContainer() {
  const [email, setEmail] = useState('franco@gmail.com');
  const [emailEdit, setEmailEdit] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const validateEmail = () => {
    const matches = email.match(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/
    );
    setEmailValid(matches);
    return matches;
  };

  const [password, setPassword] = useState('ABC123a!');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const [repeatPasswordValid, setRepeatPasswordValid] = useState(true);
  const validatePassword = () => {
    // Between 6 to 20 characters,
    // contain at least one numeric digit,
    // one uppercase and one lowercase letter.
    const passOK = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    setPasswordValid(passOK);
    const passwordsMatch = password === repeatPassword;
    setRepeatPasswordValid(passwordsMatch);
    return passOK && passwordsMatch;
  };

  const handleSubmit = (e) => {
    // This function should include a check against the initial state to prevent unnecessary requests
    e.preventDefault();
    if (emailEdit || passwordEdit) return;
    const input = window.confirm(
      'Are you sure you want to save the changes made?'
    );
    if (!input) return;
    const mainInfo = { email, password };
    submitToServer(mainInfo);
    // Then.., via promises, depending on the response status we'll give feedback
    alert('Changes saved succesfully! (console logged)');
  };

  return (
    <form className="user-config-tabs__form" onSubmit={handleSubmit}>
      <InfoDisplay
        title="Email"
        inputType="email"
        value={email}
        isEditing={emailEdit}
        setValue={(e) => {
          setEmail(e.target.value);
        }}
        validate={validateEmail}
        toggleEdit={() => {
          setEmailEdit(!emailEdit);
        }}
        isValid={emailValid}
      />

      <PasswordDisplay
        password={password}
        isPasswordValid={passwordValid}
        setPassword={(e) => {
          setPassword(e.target.value);
        }}
        repeatPassword={repeatPassword}
        isRepeatPasswordValid={repeatPasswordValid}
        setRepeatPassword={(e) => {
          setRepeatPassword(e.target.value);
        }}
        isEditing={passwordEdit}
        toggleEdit={() => {
          setPasswordEdit(!passwordEdit);
        }}
        validate={validatePassword}
      />

      <input
        type="submit"
        value="Save changes"
        className="user-config-tabs__form__submit-btn"
      />
    </form>
  );
}
