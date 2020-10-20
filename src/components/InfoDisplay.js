import React from 'react';
import EditBtn from './EditBtn';
import Input from './Input';

export default function InfoDisplay({
  title,
  inputType,
  value,
  isEditing,
  toggleEdit,
  setValue,
  validate,
  isValid,
}) {
  return (
    <>
      <h4>{title}:</h4>
      <div
        className={`user-config-tabs__form__form-control ${
          isEditing ? 'editing' : ''
        }`}
      >
        {isEditing ? (
          <div className="multiLineInputContainer">
            <Input
              id={title}
              label={title}
              type={inputType}
              value={value}
              updateValue={setValue}
              showFeedback={!isValid}
            />
          </div>
        ) : (
          <span>{value}</span>
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
