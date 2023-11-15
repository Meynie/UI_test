class MainPage {
    constructor(page) 
    {
    this.page = page;
    this.signInButton = page.locator('nav').filter({ hasText: 'Sign In' });
    this.ordersButton = page.getByRole('link', { name: 'Orders' });
    this.favouriteButton = page.getByRole('link', { name: 'Favourites' });
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
    this.choosePhone1 = page.locator('[id="\\31 "]').getByText('Add to cart');
    this.choosePhone2 = page.locator('[id="\\32 "]').getByText('Add to cart');

    }
    async signin () {
        await this.signInButton.click();
    }
    async order () {
        await this.ordersButton.click();
    }
    async favourite () {
        await this.favouriteButton.click();
    }
    async logout () {
        await this.logoutButton.click();
    }
    async add () {
        await this.choosePhone1.click();
        await this.choosePhone2.click();
    }
}

export {MainPage};