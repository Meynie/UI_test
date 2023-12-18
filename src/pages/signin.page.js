class SignIn {
    constructor(page)
    {
        this.page = page;
        this.userNameField = page.getByText('Select Username');
        this.userName = page.getByText('demouser', { exact: true });
        this.userPasswordField = page.getByText('Select password');
        this.password = page.getByText('testingisfun99', { exact: true });
        this.loginButton = page.getByRole('button', { name: 'Log In' })
    }

    async signin () {
        await this.userNameField.click();
        await this.userName.click();
        await this.userPasswordField.click();
        await this.password.click();
        await this.loginButton.click();   
    }
}

export {SignIn};