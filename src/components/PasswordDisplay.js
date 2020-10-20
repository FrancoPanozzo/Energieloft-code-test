import React from 'react';
import Input from './Input';
import InputPassword from './InputPassword';
import EditBtn from './EditBtn';

export default function PasswordDisplay({
  password,
  repeatPassword,
  setPassword,
  setRepeatPassword,
  isPasswordValid,
  isRepeatPasswordValid,
  isEditing,
  toggleEdit,
  validate,
}) {
  const renderBlurredPassword = (password) => {
    let blurred = '';
    for (let i = 0; i < password.length; i++) {
      blurred += '*';
    }
    return blurred;
  };

  return (
    <>
      <h4>Password:</h4>
      <div
        className={`user-config-tabs__form__form-control ${
          isEditing ? 'editing' : ''
        }`}
      >
        {isEditing ? (
          <div className="multiLineInputContainer">
            <label htmlFor="newPassword">New password:</label>
            <InputPassword
              id="newPassword"
              label="New password"
              value={password}
              updateValue={setPassword}
              showFeedback={!isPasswordValid}
            />
            <label htmlFor="repeatedPassword">Repeat your password:</label>
            <Input
              id="repeatedPassword"
              label="Repeat Password"
              type="password"
              value={repeatPassword}
              updateValue={setRepeatPassword}
              showFeedback={!isRepeatPasswordValid}
              feedbackMessage="Passwords don't match"
            />
          </div>
        ) : (
          <span>{renderBlurredPassword(password)}</span>
        )}

        <EditBtn
          isEditing={isEditing}
          toggleEdit={toggleEdit}
          validate={validate}
        />
      </div>
    </>
  );
}
