import React from 'react';

export default function Input({
  id,
  label,
  type,
  value,
  updateValue,
  showFeedback,
  feedbackMessage,
}) {
  return (
    <>
      <input
        type={type}
        className={`user-config-tabs__form__form-control__input ${
          showFeedback && 'wrong-input'
        } `}
        id={id}
        placeholder={label}
        value={value}
        onChange={updateValue}
      />

      {showFeedback && (
        <span className="danger-feedback">{feedbackMessage || 'Required'}</span>
      )}
    </>
  );
}
