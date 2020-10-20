import React from 'react';
import EditBtn from './EditBtn';

export default function CountryDisplay({
  title,
  value,
  isEditing,
  toggleEdit,
  setValue,
  validate,
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
          <select
            name={title}
            onChange={setValue}
            className="user-config-tabs__form__form-control__select"
          >
            <option value={value}>{value}</option>
            <option value="Germany">Germany</option>
            <option value="Austria">Austria</option>
            <option value="Switzerland">Switzerland</option>
          </select>
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
