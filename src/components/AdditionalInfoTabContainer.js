import React, { useState } from 'react';
import AdditionalInfoTab from './AdditionalInfoTab';
import submitToServer from './submitToServer';

export default function AdditionalInfoTabContainer() {
  // First name component state
  const [fname, setFname] = useState('Franco');
  const [fnameEdit, setFnameEdit] = useState(false);
  const [fnameValid, setFnameValid] = useState(true);
  const validateFname = () => {
    setFnameValid(!!fname);
    return fname;
  };

  // Last name component state
  const [lname, setLname] = useState('Panozzo Vitoloni');
  const [lnameEdit, setLnameEdit] = useState(false);
  const [lnameValid, setLnameValid] = useState(true);
  const validateLname = () => {
    setLnameValid(!!lname);
    return lname;
  };

  // Address component state
  const [street, setStreet] = useState('Callao');
  const [streetValid, setStreetValid] = useState(true);
  const validateStreetName = () => {
    setStreetValid(!!street);
    return street;
  };
  const [streetNum, setStreetNum] = useState('72');
  const [streetNumValid, setStreetNumValid] = useState(true);
  const validateStreetNum = () => {
    setStreetNumValid(!!streetNum);
    return streetNum;
  };
  const [postalCode, setPostalCode] = useState('1192 AC');
  const [postalCodeValid, setPostalCodeValid] = useState(true);
  const validatePostalCode = () => {
    setPostalCodeValid(!!postalCode);
    return postalCode;
  };
  const [addressEdit, setAddressEdit] = useState(false);

  // Country component state
  const [country, setCountry] = useState('Germany');
  const [countryEdit, setCountryEdit] = useState(false);

  // Submit handler
  const handleSubmit = (e) => {
    // There should also be an id for the server to match this info against a user,
    // or initializing a global user state and then sending that data.

    // This function should include a check against the initial state to prevent unnecessary requests
    e.preventDefault();
    if (fnameEdit || lnameEdit || addressEdit || countryEdit) return;
    const input = window.confirm(
      'Are you sure you want to save the changes made?'
    );
    if (!input) return;
    const additionalInfo = {
      fname,
      lname,
      street,
      streetNum,
      postalCode,
      country,
    };
    submitToServer(additionalInfo);
    // Then.., via promises, depending on the response status we'll give feedback
    alert('Changes saved succesfully! (console logged)');
  };

  return (
    <AdditionalInfoTab
      handleSubmit={handleSubmit}
      // First name component props
      fname={fname}
      setFname={setFname}
      fnameEdit={fnameEdit}
      setFnameEdit={setFnameEdit}
      fnameValid={fnameValid}
      validateFname={validateFname}
      // Last name component props
      lname={lname}
      setLname={setLname}
      lnameEdit={lnameEdit}
      setLnameEdit={setLnameEdit}
      lnameValid={lnameValid}
      validateLname={validateLname}
      // Address component props
      street={street}
      setStreet={setStreet}
      streetValid={streetValid}
      validateStreetName={validateStreetName}
      streetNum={streetNum}
      setStreetNum={setStreetNum}
      streetNumValid={streetNumValid}
      validateStreetNum={validateStreetNum}
      postalCode={postalCode}
      setPostalCode={setPostalCode}
      postalCodeValid={postalCodeValid}
      validatePostalCode={validatePostalCode}
      addressEdit={addressEdit}
      setAddressEdit={setAddressEdit}
      // Country component props
      country={country}
      setCountry={setCountry}
      countryEdit={countryEdit}
      setCountryEdit={setCountryEdit}
    />
  );
}
