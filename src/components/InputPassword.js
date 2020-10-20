import React from 'react';

export default function InputPassword({
  id,
  value,
  updateValue,
  showFeedback,
  label,
}) {
  return (
    <>
      <input
        type="password"
        className={`user-config-tabs__form__form-control__input ${
          showFeedback && 'wrong-input'
        } `}
        id={id}
        placeholder={label}
        value={value}
        onChange={updateValue}
      />

      {showFeedback && (
        <>
          <span className="danger-feedback">Requirements:</span>
          <ul className="danger-feedback">
            <li>6 to 20 characters</li>
            <li>one uppercase letter (A)</li>
            <li>one lowercase letter (a)</li>
            <li>one number (1)</li>
          </ul>
        </>
      )}
    </>
  );
}
