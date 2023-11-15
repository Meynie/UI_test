class Address {
    constructor(page)
    {
        this.page = page;
        this.firstNameField = page.getByLabel('First Name');
        this.lastNameField = page.getByLabel('Last Name');
        this.postalCodeField = page.getByLabel('Postal Code');
        this.stateField = page.getByLabel('State/Province');
        this.addressField = page.getByLabel('Address');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async fullForm(firstName='', lastName='', postalCode='', state='', address='') {
        await this.firstNameField.click();
        await this.firstNameField.fill(firstName);
        await this.lastNameField.click();
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.click();
        await this.postalCodeField.fill(postalCode);
        await this.stateField.click();
        await this.stateField.fill(state);
        await this.addressField.click();
        await this.addressField.fill(address);
        await this.submitButton.click();
        }
}

export {Address}