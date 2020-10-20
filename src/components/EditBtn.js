import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

export default function EditBtn({ isEditing, toggleEdit, validate }) {
  return (
    <button
      type="button"
      className={`user-config-tabs__form__form-control__btn ${
        isEditing ? 'editing' : ''
      }`}
      onClick={() => {
        if (!isEditing || validate()) {
          toggleEdit();
        }
      }}
    >
      <FaPencilAlt />
      <span>{isEditing ? ' done' : ' change'}</span>
    </button>
  );
}
