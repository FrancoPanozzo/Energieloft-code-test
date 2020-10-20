import React from 'react';
import EditBtn from './EditBtn';
import Input from './Input';

export default function AddressDisplay({
  title,
  isEditing,
  toggleEdit,
  streetName,
  setStreetNameValue,
  streetNameValid,
  validateStreetName,
  streetNumber,
  setStreetNumberValue,
  streetNumValid,
  validateStreetNum,
  postalCode,
  setPostalCodeValue,
  postalCodeValid,
  validatePostalCode,
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
            <label htmlFor="street">Street name:</label>
            <Input
              id="street"
              label="Street name"
              type="text"
              value={streetName}
              updateValue={setStreetNameValue}
              showFeedback={!streetNameValid}
            />
            <label htmlFor="streetNum">Street number:</label>
            <Input
              id="streetNum"
              label="Street number"
              type="text"
              value={streetNumber}
              updateValue={setStreetNumberValue}
              showFeedback={!streetNumValid}
            />
            <label htmlFor="postalCode">Postal code:</label>
            <Input
              id="postalCode"
              label="Postal code"
              type="text"
              value={postalCode}
              updateValue={setPostalCodeValue}
              showFeedback={!postalCodeValid}
            />
          </div>
        ) : (
          <span>{`${streetName} ${streetNumber} (${postalCode})`}</span>
        )}

        <EditBtn
          isEditing={isEditing}
          toggleEdit={toggleEdit}
          validate={() => {
            const a = validateStreetName();
            const b = validateStreetNum();
            const c = validatePostalCode();
            return a && b && c;
          }}
        />
      </div>
    </>
  );
}
