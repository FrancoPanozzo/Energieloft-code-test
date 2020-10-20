import React from 'react';
import InfoDisplay from './InfoDisplay';
import AddressDisplay from './AddressDisplay';
import CountryDisplay from './CountryDisplay';

export default function AdditionalInfoTab({
  // Submit handler
  handleSubmit,
  // First name component props
  fname,
  setFname,
  fnameEdit,
  setFnameEdit,
  fnameValid,
  validateFname,
  // Last name component props
  lname,
  setLname,
  lnameEdit,
  setLnameEdit,
  lnameValid,
  validateLname,
  // Address component props
  street,
  setStreet,
  streetValid,
  validateStreetName,
  streetNum,
  setStreetNum,
  streetNumValid,
  validateStreetNum,
  postalCode,
  setPostalCode,
  postalCodeValid,
  validatePostalCode,
  addressEdit,
  setAddressEdit,
  // Country component props
  country,
  setCountry,
  countryEdit,
  setCountryEdit,
}) {
  return (
    <form className="user-config-tabs__form" onSubmit={handleSubmit}>
      <InfoDisplay
        title="First name"
        inputType="text"
        value={fname}
        setValue={(e) => {
          setFname(e.target.value);
        }}
        isEditing={fnameEdit}
        toggleEdit={() => {
          setFnameEdit(!fnameEdit);
        }}
        validate={validateFname}
        isValid={fnameValid}
      />

      <InfoDisplay
        title="Last name"
        inputType="text"
        value={lname}
        setValue={(e) => {
          setLname(e.target.value);
        }}
        isEditing={lnameEdit}
        toggleEdit={() => {
          setLnameEdit(!lnameEdit);
        }}
        validate={validateLname}
        isValid={lnameValid}
      />

      <AddressDisplay
        title="Address"
        streetName={street}
        setStreetNameValue={(e) => {
          setStreet(e.target.value);
        }}
        streetNameValid={streetValid}
        validateStreetName={validateStreetName}
        streetNumber={streetNum}
        setStreetNumberValue={(e) => {
          setStreetNum(e.target.value);
        }}
        streetNumValid={streetNumValid}
        validateStreetNum={validateStreetNum}
        postalCode={postalCode}
        setPostalCodeValue={(e) => {
          setPostalCode(e.target.value);
        }}
        postalCodeValid={postalCodeValid}
        validatePostalCode={validatePostalCode}
        isEditing={addressEdit}
        toggleEdit={() => {
          setAddressEdit(!addressEdit);
        }}
      />

      <CountryDisplay
        title="Country"
        value={country}
        isEditing={countryEdit}
        setValue={(e) => {
          setCountry(e.target.value);
        }}
        validate={validateLname}
        toggleEdit={() => {
          setCountryEdit(!countryEdit);
        }}
      />

      <input
        type="submit"
        value="Save changes"
        className="user-config-tabs__form__submit-btn"
      />
    </form>
  );
}
