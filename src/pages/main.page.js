import { MAIN_PAGE_URL } from "./const.page";

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
    }
    async open () {
        await this.page.goto(MAIN_PAGE_URL);
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
}

export {MainPage};