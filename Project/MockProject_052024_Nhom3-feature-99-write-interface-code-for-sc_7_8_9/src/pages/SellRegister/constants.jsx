const FULL_NAME = {
  prettier: 'Text',
  label: 'full name',
  name: 'fullName',
  placeholder: 'Enter your first and last name',
};

const EMAIL = {
  prettier: 'Text',
  type: 'email',
  label: 'email',
  name: 'email',
  placeholder: 'Enter your email',
};

const PHONE = {
  prettier: 'Text',
  label: 'phone number',
  name: 'phone',
  placeholder: 'Enter your phone number',
};

const CITY = {
  prettier: 'Text',
  label: 'City',
  name: 'city',
  placeholder: 'Enter your city',
};

const STREET_ADDRESS = {
  prettier: 'Text',
  label: 'Street Address',
  name: 'street',
  placeholder: 'Enter your city',
};

const RELN = {
  prettier: 'Text',
  label: 'Real Estate License Number',
  name: 'reln',
  placeholder: 'Enter your License',
};

const ADDRESS = {
  prettier: 'TextArea',
  label: 'Full Address',
  name: 'address',
  placeholder: 'Enter your full address',
};

const SELL_REGISTER = [FULL_NAME, EMAIL, PHONE, CITY, STREET_ADDRESS, RELN, ADDRESS];

export { SELL_REGISTER };
