class MainPage {
    constructor(page) 
    {
    this.page = page;
    this.signInButton = page.locator('nav').filter({ hasText: 'Sign In' });
    this.ordersButton = page.getByRole('link', { name: 'Orders' });
    this.favouriteButton = page.getByRole('link', { name: 'Favourites' });
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
    this.choosePhone1 = page.locator('[id="\\31 "]');
    this.choosePhone2 = page.locator('[id="\\32 "]');
   // this.choosePhone3 = page.locator('[id="\\33 "]');

    }
    async signin () {
        await this.signInButton.click();
    }
    async order () {
        await this.ordersButton.click();
    }
    async favourite () {
        await this.choosePhone1.getByLabel('delete').click();
        await this.choosePhone2.getByLabel('delete').click();
        await this.favouriteButton.click();
    }
    async logout () {
        await this.logoutButton.click();
    }
    async addInBasket () {
        await this.choosePhone1.getByText('Add to cart').click();
        await this.choosePhone2.getByText('Add to cart').click();
    }
    async addInFavourite () {
        await this.choosePhone1.getByLabel('delete').click();
        await this.choosePhone2.getByLabel('delete').click();
        //await this.choosePhone3.getByLabel('delete').click();
    }
}

export {MainPage};