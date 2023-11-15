import { faker, th } from '@faker-js/faker';

const GetNewAddress = function GetNewUser(address, firstName, lastName, state, postalCode) {
  this.address = address;
  this.firstName = firstName;
  this.lastName = lastName;
  this.postalCode = postalCode;
  this.state = state;
};

export const AddressBuilder = function AddressBuilder() {
  return {
    setFirstName() {
      this.firstName = faker.person.firstName();
      return this;
    },
    setLastName() {
        this.lastName = faker.person.lastName();
        return this;
    },
    setAddress() {
      this.address = faker.location.city();
      return this;
    },
    setPostalCode() {
      this.postalCode = faker.location.zipCode();
      return this;
    },
    setState() {
      this.state = faker.location.state();
      return this;
    },
    build() {
      const user = new GetNewAddress(this.address, this.firstName, this.lastName, this.state, this.postalCode);
      return user;
    },
  };
};
